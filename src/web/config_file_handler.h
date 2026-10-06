#pragma once

#include <FS.h>
#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <cstdio>
#include <cstdint>

#include "config.h"
#include "log/log.h"
#include "web/reboot_after_response.h"

class ConfigFileHandler
{
public:
    void registerHandlers(AsyncWebServer* server)
    {
        server->on("/api/config", HTTP_GET, [](AsyncWebServerRequest *request) {
            if (!LittleFS.exists(CONFIG_PATH)) {
                request->send(404, "application/json", "{\"message\": \"no config file on device\"}");
                return;
            }

            request->send(LittleFS, CONFIG_PATH, "application/octet-stream", true);
        });

        // Raw binary upload. Browsers send a Content-Length bounded body, so the
        // bytes arrive in onBody and the request handler fires once after the last
        // chunk (WebRequest.cpp:231,877). Multipart is not supported (onUpload unused).
        server->on(
            "/api/config",
            HTTP_POST,
            [this](AsyncWebServerRequest *request) { completeUpload(request); },
            nullptr,
            [this](AsyncWebServerRequest* request, uint8_t *data, size_t len, size_t index, size_t total) {
                // Register once on the first chunk: if the client drops mid-upload
                // the request-handler tail never runs, so clean up here instead of
                // leaving _uploadStarted set with an open temp File.
                if (index == 0) {
                    request->onDisconnect([this] { abortUpload(); });
                }

                receiveUploadChunk(data, len, index, total);
            }
        );
    }

private:
    // On-disk format written by ed-config StorageLittleFS::store(): raw
    // sizeof(Config) bytes followed by a native little-endian uint16_t CRC16
    // over those bytes (littlefs_storage.hpp:49-80, data_mgr.hpp:70-89).
    static constexpr size_t CONFIG_FILE_SIZE = sizeof(Config) + sizeof(uint16_t);
    static constexpr const char* CONFIG_PATH = "/config.bin";
    // Distinct from ed-config's hardcoded "/data.tmp" so an upload can never race
    // a normal config save (littlefs_storage.hpp:54).
    static constexpr const char* CONFIG_TMP_PATH = "/config.upload.tmp";

    static constexpr uint16_t CRC16_INIT = 0xffff;
    static constexpr uint16_t CRC16_POLY = 0xa001;

    static constexpr const char* TAG = "config";

    // Replicates EDConfig::DataMgr::calculateChecksum() bit-exactly (data_mgr.hpp:70-89).
    static uint16_t crc16(uint16_t crc, const uint8_t* data, size_t len)
    {
        for (size_t i = 0; i < len; i++) {
            crc ^= data[i];
            for (uint8_t j = 0; j < 8; j++) {
                crc >>= 1;

                if (crc & 0x01) {
                    crc ^= CRC16_POLY;
                }
            }
        }

        return crc;
    }

    void receiveUploadChunk(uint8_t* data, size_t len, size_t index, size_t total)
    {
        if (index == 0) {
            // A new upload always starts at offset 0; truncate any stale temp file.
            if (_uploadFile) {
                _uploadFile.close();
            }

            _uploadStarted = true;
            _uploadError = false;
            _uploadOversize = false;
            _writtenBytes = 0;
            _runningCrc = CRC16_INIT;

            _uploadFile = LittleFS.open(CONFIG_TMP_PATH, "wb");
            if (!_uploadFile) {
                _uploadError = true;
                LOGE(TAG, "failed to open temp file %s for write", CONFIG_TMP_PATH);
                return;
            }

            LOGI(TAG, "receiving config file, expected total: %u bytes", (unsigned)total);
        }

        if (!_uploadStarted || _uploadError) {
            return;
        }

        // Oversize is fail-fast: consume the remaining chunks without writing.
        if (index + len > CONFIG_FILE_SIZE) {
            _uploadError = true;
            _uploadOversize = true;
            cleanupTemp();
            LOGE(TAG, "config upload exceeds maximum size %u bytes", (unsigned)CONFIG_FILE_SIZE);
            return;
        }

        // Keep a running CRC over the data bytes only; the trailing checksum
        // bytes are validated separately at completion.
        if (_writtenBytes < sizeof(Config)) {
            size_t crcLen = sizeof(Config) - _writtenBytes;
            if (crcLen > len) {
                crcLen = len;
            }

            _runningCrc = crc16(_runningCrc, data, crcLen);
        }

        if (_uploadFile.write(data, len) != len) {
            _uploadError = true;
            cleanupTemp();
            LOGE(TAG, "failed to write config upload chunk");
            return;
        }

        _writtenBytes += len;
    }

    void completeUpload(AsyncWebServerRequest *request)
    {
        if (!_uploadStarted) {
            LOGE(TAG, "config upload did not start");
            request->send(422, "application/json", "{\"message\": \"empty config upload\"}");
            return;
        }

        _uploadStarted = false;

        if (_uploadFile) {
            _uploadFile.close();
        }

        if (_uploadError) {
            cleanupTemp();
            if (_uploadOversize) {
                char message[96];
                snprintf(
                    message,
                    sizeof(message),
                    "{\"message\": \"invalid config file size, expected %u bytes\"}",
                    (unsigned)CONFIG_FILE_SIZE
                );
                request->send(422, "application/json", message);
            } else {
                request->send(500, "application/json", "{\"message\": \"failed to receive config file\"}");
            }
            return;
        }

        if (_writtenBytes != CONFIG_FILE_SIZE) {
            cleanupTemp();

            char message[96];
            snprintf(
                message,
                sizeof(message),
                "{\"message\": \"invalid config file size, expected %u bytes\"}",
                (unsigned)CONFIG_FILE_SIZE
            );

            LOGE(TAG, "invalid config size: %u, expected %u", (unsigned)_writtenBytes, (unsigned)CONFIG_FILE_SIZE);
            request->send(422, "application/json", message);
            return;
        }

        uint8_t version = 0;
        if (!readByteAt(0, &version)) {
            cleanupTemp();
            request->send(500, "application/json", "{\"message\": \"failed to read config file\"}");
            return;
        }

        if (version != CURRENT_VERSION) {
            cleanupTemp();

            char message[128];
            snprintf(
                message,
                sizeof(message),
                "{\"message\": \"config version mismatch: file %u, device expects %u\"}",
                (unsigned)version,
                (unsigned)CURRENT_VERSION
            );

            LOGE(TAG, "config version mismatch: file %u, expected %u", (unsigned)version, (unsigned)CURRENT_VERSION);
            request->send(422, "application/json", message);
            return;
        }

        uint8_t crcBytes[2] = {0, 0};
        if (!readBytesAt(sizeof(Config), crcBytes, sizeof(crcBytes))) {
            cleanupTemp();
            request->send(500, "application/json", "{\"message\": \"failed to read config file\"}");
            return;
        }

        uint16_t fileCrc = (uint16_t)(crcBytes[0] | (crcBytes[1] << 8));
        if (_runningCrc != fileCrc) {
            cleanupTemp();
            LOGE(TAG, "config CRC mismatch: file %u, calculated %u", (unsigned)fileCrc, (unsigned)_runningCrc);
            request->send(422, "application/json", "{\"message\": \"config CRC check failed\"}");
            return;
        }

        // Mirrors ed-config's swap: rename over the destination without an explicit
        // remove first (littlefs_storage.hpp:74).
        if (!LittleFS.rename(CONFIG_TMP_PATH, CONFIG_PATH)) {
            cleanupTemp();
            LOGE(TAG, "failed to rename %s to %s", CONFIG_TMP_PATH, CONFIG_PATH);
            request->send(500, "application/json", "{\"message\": \"failed to replace config\"}");
            return;
        }

        LOGI(TAG, "config file replaced, rebooting");

        request->send(200, "application/json", "{}");
        RebootAfterResponse::schedule(200);
    }

    // Client wrote a chunk and then disconnected mid-upload. completeUpload()
    // never ran (or already cleared _uploadStarted on normal completion), so
    // this is a no-op unless a transfer is genuinely in flight. Never sends a
    // response from the disconnect callback.
    void abortUpload()
    {
        if (!_uploadStarted) {
            return;
        }

        _uploadStarted = false;
        _uploadError = false;
        _writtenBytes = 0;
        cleanupTemp();
    }

    bool readByteAt(size_t position, uint8_t* out)
    {
        return readBytesAt(position, out, 1);
    }

    bool readBytesAt(size_t position, uint8_t* out, size_t len)
    {
        File file = LittleFS.open(CONFIG_TMP_PATH, FILE_READ);
        if (!file) {
            LOGE(TAG, "failed to open %s for read", CONFIG_TMP_PATH);
            return false;
        }

        bool ok = file.seek(position) && file.read(out, len) == len;

        file.close();

        return ok;
    }

    void cleanupTemp()
    {
        if (_uploadFile) {
            _uploadFile.close();
        }

        if (LittleFS.exists(CONFIG_TMP_PATH)) {
            LittleFS.remove(CONFIG_TMP_PATH);
        }
    }

    File _uploadFile;
    bool _uploadStarted = false;
    bool _uploadError = false;
    bool _uploadOversize = false;
    size_t _writtenBytes = 0;
    uint16_t _runningCrc = CRC16_INIT;
};
