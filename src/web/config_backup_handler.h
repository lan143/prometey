#pragma once

//
// Full-device config archive backup/restore.
//
// GET  /api/config/backup -> zip of every persisted config/state file
// POST /api/config/backup -> validate a zip and atomically commit its members
//
// The archive member-name classification below is deliberately dependency-free
// so it can be compiled and unit-tested on a host. Define
// PROMETEY_BACKUP_HOST_TEST to expose only the pure helpers (no Arduino/FS).
//

#include <cstddef>
#include <string>

namespace BackupNames
{
    // Mirror of ROOMS_COUNT (src/defines.h); a static_assert below keeps the two
    // in sync on firmware builds.
    constexpr size_t ROOM_COUNT = 8;

    enum class Kind
    {
        None,
        Config,
        Boiler,
        Room,
    };

    // Explicit constructors keep brace-initialization working under C++11, which
    // the ESP32 toolchain uses (NSDMIs disqualify aggregates there).
    struct Parsed
    {
        Kind kind;
        int roomIndex;

        Parsed() : kind(Kind::None), roomIndex(-1) {}
        Parsed(Kind kindValue, int roomIndexValue) : kind(kindValue), roomIndex(roomIndexValue) {}
    };

    struct SeenFlags
    {
        bool config = false;
        bool boiler = false;
        bool rooms[ROOM_COUNT] = {};
    };

    // Classify a flat archive member name. Only the exact ASCII whitelist is
    // recognized; everything else is Kind::None. Names are never used to build
    // paths, so no member name can escape the fixed destinations.
    inline Parsed classify(const std::string& name)
    {
        if (name == "config.bin") {
            return Parsed{Kind::Config, -1};
        }

        if (name == "boiler.bin") {
            return Parsed{Kind::Boiler, -1};
        }

        // room_<d>.bin, exactly one decimal digit in 0..ROOM_COUNT-1.
        if (name.size() == 10 && name.compare(0, 5, "room_") == 0 && name.compare(6, 4, ".bin") == 0) {
            const char digit = name[5];
            if (digit >= '0' && digit < (char)('0' + ROOM_COUNT)) {
                return Parsed{Kind::Room, digit - '0'};
            }
        }

        return Parsed{Kind::None, -1};
    }

    // Classify `name` and remember it in `seen`. Unknown names are ignored.
    // `duplicate` is set when a recognized member appears more than once.
    inline Parsed classifyAndMark(const std::string& name, SeenFlags& seen, bool& duplicate)
    {
        const Parsed parsed = classify(name);
        duplicate = false;

        switch (parsed.kind) {
            case Kind::Config:
                duplicate = seen.config;
                seen.config = true;
                break;
            case Kind::Boiler:
                duplicate = seen.boiler;
                seen.boiler = true;
                break;
            case Kind::Room:
                duplicate = seen.rooms[parsed.roomIndex];
                seen.rooms[parsed.roomIndex] = true;
                break;
            default:
                break;
        }

        return parsed;
    }
}

#ifndef PROMETEY_BACKUP_HOST_TEST

#include <FS.h>
#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <cstdio>
#include <cstdint>
#include <utility>
#include <vector>

#include "config.h"
#include "defines.h"
#include "log/log.h"
#include "web/reboot_after_response.h"
#include "zip_store.h"

static_assert(BackupNames::ROOM_COUNT == (size_t)ROOMS_COUNT, "BackupNames::ROOM_COUNT must match ROOMS_COUNT");

class ConfigBackupHandler
{
public:
    void registerHandlers(AsyncWebServer* server)
    {
        server->on("/api/config/backup", HTTP_GET, [this](AsyncWebServerRequest* request) {
            handleDownload(request);
        });

        // Raw zip body. As with the single-file endpoint, browsers send a
        // Content-Length bounded body, so bytes arrive in onBody and the request
        // handler fires once after the last chunk (WebRequest.cpp:231,877).
        server->on(
            "/api/config/backup",
            HTTP_POST,
            [this](AsyncWebServerRequest* request) { completeUpload(request); },
            nullptr,
            [this](AsyncWebServerRequest* request, uint8_t* data, size_t len, size_t index, size_t total) {
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
    // Whole archive is hard-capped at 16 KB (RAM safety): on-device files are
    // currently ~2.9 KB total and a zip adds only ~20 bytes/member of overhead.
    static constexpr size_t MAX_ARCHIVE_SIZE = 16 * 1024;

    // A single config member must always fit the archive cap, otherwise a
    // valid config could never be restored.
    static_assert(sizeof(Config) + sizeof(uint16_t) <= MAX_ARCHIVE_SIZE, "single config file must fit the archive cap");

    static constexpr const char* BACKUP_TMP_PATH = "/backup.upload.tmp";

    // Fixed, compile-time destinations. Archive member names only select one of
    // these constants, so no path from archive data is ever opened directly.
    static constexpr const char* CONFIG_PATH = "/config.bin";
    static constexpr const char* CONFIG_TMP_PATH = "/config.upload.tmp";
    static constexpr const char* BOILER_PATH = "/boiler.bin";
    static constexpr const char* BOILER_TMP_PATH = "/boiler.upload.tmp";
    static constexpr const char* ROOM_PATH_FORMAT = "/room_%d.bin";
    static constexpr const char* ROOM_TMP_PATH_FORMAT = "/room_%d.upload.tmp";

    static constexpr uint16_t CRC16_INIT = 0xffff;
    static constexpr uint16_t CRC16_POLY = 0xa001;

    static constexpr const char* TAG = "backup";

    struct Member
    {
        BackupNames::Kind kind;
        int roomIndex;
        std::string name;
        const uint8_t* data;
        size_t len;
        uint32_t zipCrc;
    };

    // Replicates EDConfig::DataMgr::calculateChecksum() bit-exactly
    // (data_mgr.hpp:70-89), same as config_file_handler.h.
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

    static bool readFile(const char* path, std::vector<uint8_t>& out)
    {
        File file = LittleFS.open(path, FILE_READ);
        if (!file) {
            LOGE(TAG, "failed to open %s for read", path);
            return false;
        }

        out.resize(file.size());

        bool ok = out.empty() || file.read(out.data(), out.size()) == out.size();

        file.close();

        return ok;
    }

    static bool appendFile(
        const char* path,
        const char* name,
        std::vector<std::string>& names,
        std::vector<std::vector<uint8_t>>& buffers
    )
    {
        std::vector<uint8_t> data;
        if (!readFile(path, data)) {
            return false;
        }

        names.push_back(name);
        buffers.push_back(std::move(data));

        return true;
    }

    void handleDownload(AsyncWebServerRequest* request)
    {
        std::vector<std::string> names;
        std::vector<std::vector<uint8_t>> buffers;
        names.reserve(2 + ROOMS_COUNT);
        buffers.reserve(2 + ROOMS_COUNT);

        // Fixed order, fixed member names; only files present on device are
        // included.
        if (LittleFS.exists(CONFIG_PATH) && !appendFile(CONFIG_PATH, "config.bin", names, buffers)) {
            request->send(500, "application/json", "{\"message\": \"failed to read config file\"}");
            return;
        }

        if (LittleFS.exists(BOILER_PATH) && !appendFile(BOILER_PATH, "boiler.bin", names, buffers)) {
            request->send(500, "application/json", "{\"message\": \"failed to read boiler state file\"}");
            return;
        }

        for (int i = 0; i < ROOMS_COUNT; i++) {
            char path[32];
            char name[24];
            snprintf(path, sizeof(path), ROOM_PATH_FORMAT, i);
            snprintf(name, sizeof(name), "room_%d.bin", i);

            if (LittleFS.exists(path) && !appendFile(path, name, names, buffers)) {
                request->send(500, "application/json", "{\"message\": \"failed to read room state file\"}");
                return;
            }
        }

        if (names.empty()) {
            request->send(404, "application/json", "{\"message\": \"no config files on device\"}");
            return;
        }

        std::vector<ZipStore::ZipEntryInput> entries;
        entries.reserve(names.size());

        for (size_t i = 0; i < names.size(); i++) {
            entries.push_back(ZipStore::ZipEntryInput{names[i].c_str(), buffers[i].data(), buffers[i].size()});
        }

        std::vector<uint8_t> archive;
        if (!ZipStore::zipBuildStore(entries.data(), entries.size(), archive)) {
            request->send(500, "application/json", "{\"message\": \"failed to build archive\"}");
            return;
        }

        if (archive.size() > MAX_ARCHIVE_SIZE) {
            request->send(500, "application/json", "{\"message\": \"archive too large\"}");
            return;
        }

        // AsyncResponseStream copies the payload into its own buffer
        // (WebResponses.cpp:926-943). The raw uint8_t* send() overload wraps an
        // AsyncProgmemResponse that only stores the pointer (WebRequest.cpp:1065,
        // WebResponses.cpp:893-898), which would dangle for a local vector.
        AsyncResponseStream* response = request->beginResponseStream("application/zip", archive.size());
        response->write(archive.data(), archive.size());
        response->addHeader("Content-Disposition", "attachment; filename=\"prometey-config.zip\"");
        request->send(response);
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

            _uploadFile = LittleFS.open(BACKUP_TMP_PATH, "wb");
            if (!_uploadFile) {
                _uploadError = true;
                LOGE(TAG, "failed to open temp file %s for write", BACKUP_TMP_PATH);
                return;
            }

            LOGI(TAG, "receiving backup archive, expected total: %u bytes", (unsigned)total);
        }

        if (!_uploadStarted || _uploadError) {
            return;
        }

        // Oversize is fail-fast: consume the remaining chunks without writing.
        if (index + len > MAX_ARCHIVE_SIZE) {
            _uploadError = true;
            _uploadOversize = true;
            cleanupTemp();
            LOGE(TAG, "backup archive exceeds maximum size %u bytes", (unsigned)MAX_ARCHIVE_SIZE);
            return;
        }

        if (_uploadFile.write(data, len) != len) {
            _uploadError = true;
            cleanupTemp();
            LOGE(TAG, "failed to write backup upload chunk");
            return;
        }

        _writtenBytes += len;
    }

    void completeUpload(AsyncWebServerRequest* request)
    {
        if (!_uploadStarted) {
            LOGE(TAG, "backup upload did not start");
            request->send(422, "application/json", "{\"message\": \"empty archive upload\"}");
            return;
        }

        _uploadStarted = false;

        if (_uploadFile) {
            _uploadFile.close();
        }

        if (_uploadError) {
            cleanupTemp();
            if (_uploadOversize) {
                request->send(422, "application/json", "{\"message\": \"archive too large (> 16 KB)\"}");
            } else {
                request->send(500, "application/json", "{\"message\": \"failed to receive archive\"}");
            }
            return;
        }

        if (_writtenBytes == 0) {
            cleanupTemp();
            request->send(422, "application/json", "{\"message\": \"empty archive upload\"}");
            return;
        }

        std::vector<uint8_t> archive;
        if (!readFile(BACKUP_TMP_PATH, archive)) {
            cleanupTemp();
            request->send(500, "application/json", "{\"message\": \"failed to read archive\"}");
            return;
        }

        // Strict parse: any malformed member, non-STORE method, encryption,
        // data descriptor, zip64 marker or bad bounds rejects the whole file.
        std::vector<ZipStore::ZipEntryRef> parsed;
        if (!ZipStore::zipParseStore(archive.data(), archive.size(), parsed)) {
            cleanupTemp();
            request->send(422, "application/json", "{\"message\": \"invalid zip archive\"}");
            return;
        }

        std::vector<Member> members;
        BackupNames::SeenFlags seen;

        for (const ZipStore::ZipEntryRef& ref : parsed) {
            bool duplicate = false;
            const BackupNames::Parsed info = BackupNames::classifyAndMark(ref.name, seen, duplicate);

            if (info.kind == BackupNames::Kind::None) {
                LOGW(TAG, "ignoring unknown archive entry '%s'", ref.name.c_str());
                continue;
            }

            if (duplicate) {
                cleanupTemp();

                char message[128];
                snprintf(message, sizeof(message), "{\"message\": \"duplicate entry %s\"}", ref.name.c_str());
                request->send(422, "application/json", message);
                return;
            }

            Member member;
            member.kind = info.kind;
            member.roomIndex = info.roomIndex;
            member.name = ref.name;
            member.data = archive.data() + ref.dataOffset;
            member.len = ref.len;
            member.zipCrc = ref.crc;
            members.push_back(std::move(member));
        }

        if (members.empty()) {
            cleanupTemp();
            request->send(422, "application/json", "{\"message\": \"no Prometey config files in archive\"}");
            return;
        }

        // Validate every member first: nothing is written or renamed until the
        // whole archive is known-good (all-or-nothing).
        for (const Member& member : members) {
            char message[128];
            if (!validateMember(member, message, sizeof(message))) {
                cleanupTemp();
                request->send(422, "application/json", message);
                return;
            }
        }

        // Stage every member into its own temp file. Still no destination touched.
        for (const Member& member : members) {
            if (!writeMemberTemp(member)) {
                cleanupTemp();
                request->send(500, "application/json", "{\"message\": \"failed to write archive member\"}");
                return;
            }
        }

        // Commit. Mirrors ed-config's swap: rename over the destination without
        // an explicit remove first (littlefs_storage.hpp:74). A failure part-way
        // can leave earlier members already renamed; the remaining temps are
        // cleaned and the reboot reloads whatever was committed.
        for (const Member& member : members) {
            const std::string tempPath = memberTempPath(member);
            const std::string finalPath = memberFinalPath(member);

            if (!LittleFS.rename(tempPath.c_str(), finalPath.c_str())) {
                LOGE(TAG, "failed to rename %s to %s", tempPath.c_str(), finalPath.c_str());
                cleanupTemp();
                request->send(500, "application/json", "{\"message\": \"failed to commit archive\"}");
                return;
            }
        }

        if (LittleFS.exists(BACKUP_TMP_PATH)) {
            LittleFS.remove(BACKUP_TMP_PATH);
        }

        LOGI(TAG, "backup archive committed, rebooting");

        request->send(200, "application/json", "{}");
        RebootAfterResponse::schedule(200);
    }

    // Client wrote a chunk and then disconnected mid-upload. completeUpload()
    // never ran (or already cleared _uploadStarted on normal completion), so
    // this is a no-op unless a transfer is genuinely in flight. Member temps do
    // not exist before completeUpload() stages them, so cleanupTemp() is safe
    // here; it only removes the archive temp (and any stale leftovers). Never
    // sends a response from the disconnect callback.
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

    static size_t expectedDataSize(BackupNames::Kind kind)
    {
        switch (kind) {
            case BackupNames::Kind::Config:
                return sizeof(Config);
            case BackupNames::Kind::Boiler:
                return sizeof(BoilerState);
            case BackupNames::Kind::Room:
                return sizeof(RoomState);
            default:
                return 0;
        }
    }

    // On-disk layout is raw sizeof(T) bytes followed by a native little-endian
    // uint16_t CRC16 over those bytes (littlefs_storage.hpp:49-80). `config.bin`
    // additionally stores CURRENT_VERSION in byte 0. Validation order:
    //   1. exact payload size (sizeof(T) + 2)
    //   2. config version byte (config.bin only)
    //   3. zip-level CRC32 over the raw payload
    //   4. ed-config CRC16 stored in the last two bytes
    static bool validateMember(const Member& member, char* message, size_t messageSize)
    {
        const size_t dataSize = expectedDataSize(member.kind);
        const size_t expectedLen = dataSize + sizeof(uint16_t);

        if (member.len != expectedLen) {
            snprintf(
                message,
                messageSize,
                "{\"message\": \"%s invalid size, expected %u bytes\"}",
                member.name.c_str(),
                (unsigned)expectedLen
            );
            return false;
        }

        if (member.kind == BackupNames::Kind::Config && member.data[0] != (uint8_t)CURRENT_VERSION) {
            snprintf(
                message,
                messageSize,
                "{\"message\": \"config version mismatch: file %u, device expects %u\"}",
                (unsigned)member.data[0],
                (unsigned)CURRENT_VERSION
            );
            return false;
        }

        if (ZipStore::crc32Zip(0, member.data, member.len) != member.zipCrc) {
            snprintf(message, messageSize, "{\"message\": \"%s archive CRC32 check failed\"}", member.name.c_str());
            return false;
        }

        const uint16_t fileCrc = (uint16_t)(member.data[dataSize] | (member.data[dataSize + 1] << 8));
        if (crc16(CRC16_INIT, member.data, dataSize) != fileCrc) {
            snprintf(message, messageSize, "{\"message\": \"%s CRC check failed\"}", member.name.c_str());
            return false;
        }

        return true;
    }

    static bool writeMemberTemp(const Member& member)
    {
        const std::string tempPath = memberTempPath(member);

        File file = LittleFS.open(tempPath.c_str(), "wb");
        if (!file) {
            LOGE(TAG, "failed to open %s for write", tempPath.c_str());
            return false;
        }

        const size_t written = file.write(member.data, member.len);
        file.close();

        return written == member.len;
    }

    static std::string memberTempPath(const Member& member)
    {
        if (member.kind == BackupNames::Kind::Config) {
            return CONFIG_TMP_PATH;
        }

        if (member.kind == BackupNames::Kind::Boiler) {
            return BOILER_TMP_PATH;
        }

        char path[32];
        snprintf(path, sizeof(path), ROOM_TMP_PATH_FORMAT, member.roomIndex);
        return std::string(path);
    }

    static std::string memberFinalPath(const Member& member)
    {
        if (member.kind == BackupNames::Kind::Config) {
            return CONFIG_PATH;
        }

        if (member.kind == BackupNames::Kind::Boiler) {
            return BOILER_PATH;
        }

        char path[32];
        snprintf(path, sizeof(path), ROOM_PATH_FORMAT, member.roomIndex);
        return std::string(path);
    }

    static void cleanupMemberTemps()
    {
        if (LittleFS.exists(CONFIG_TMP_PATH)) {
            LittleFS.remove(CONFIG_TMP_PATH);
        }

        if (LittleFS.exists(BOILER_TMP_PATH)) {
            LittleFS.remove(BOILER_TMP_PATH);
        }

        for (int i = 0; i < ROOMS_COUNT; i++) {
            char path[32];
            snprintf(path, sizeof(path), ROOM_TMP_PATH_FORMAT, i);

            if (LittleFS.exists(path)) {
                LittleFS.remove(path);
            }
        }
    }

    void cleanupTemp()
    {
        if (_uploadFile) {
            _uploadFile.close();
        }

        if (LittleFS.exists(BACKUP_TMP_PATH)) {
            LittleFS.remove(BACKUP_TMP_PATH);
        }

        cleanupMemberTemps();
    }

    File _uploadFile;
    bool _uploadStarted = false;
    bool _uploadError = false;
    bool _uploadOversize = false;
    size_t _writtenBytes = 0;
};

#endif  // PROMETEY_BACKUP_HOST_TEST
