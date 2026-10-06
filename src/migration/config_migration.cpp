#include <LittleFS.h>

#include "config_migration.h"
#include "log/log.h"

uint16_t migrationCrc16(const uint8_t* data, size_t len)
{
    uint16_t crc = 0xffff;
    const uint16_t poly = 0xa001;

    for (size_t i = 0; i < len; i++) {
        crc ^= data[i];
        for (uint8_t j = 0; j < 8; j++) {
            crc >>= 1;
            if (crc & 0x01) {
                crc ^= poly;
            }
        }
    }

    return crc;
}

bool readLegacyConfigV2(ConfigV2* out)
{
    File file = LittleFS.open("/config.bin", FILE_READ);
    if (!file) {
        LOGD("migration", "legacy config not found");
        return false;
    }

    if (file.size() != sizeof(ConfigV2) + sizeof(uint16_t)) {
        file.close();
        return false;
    }

    if (file.read(reinterpret_cast<uint8_t*>(out), sizeof(ConfigV2)) != sizeof(ConfigV2)) {
        LOGW("migration", "failed to read legacy config");
        file.close();
        return false;
    }

    uint16_t storedCrc = 0;
    if (file.read(reinterpret_cast<uint8_t*>(&storedCrc), sizeof(uint16_t)) != sizeof(uint16_t)) {
        LOGW("migration", "failed to read legacy config checksum");
        file.close();
        return false;
    }

    file.close();

    if (migrationCrc16(reinterpret_cast<const uint8_t*>(out), sizeof(ConfigV2)) != storedCrc) {
        LOGW("migration", "migration crc mismatch, skipping");
        return false;
    }

    if (out->version > 2) {
        return false;
    }

    return true;
}

void applyLegacyConfigV2(Config* target, const ConfigV2& src)
{
    target->network = src.network;
    target->mqtt = src.mqtt;
    target->mqttIsHADiscovery = src.mqttIsHADiscovery;
    memcpy(target->mqttHADiscoveryPrefix, src.mqttHADiscoveryPrefix, MQTT_TOPIC_LEN);
    memcpy(target->mqttCommandTopic, src.mqttCommandTopic, MQTT_TOPIC_LEN);
    memcpy(target->mqttStateTopic, src.mqttStateTopic, MQTT_TOPIC_LEN);

    memcpy(target->rooms, src.rooms, sizeof(src.rooms));
    memcpy(target->valves, src.valves, sizeof(src.valves));

    BoilerConfig& boiler = target->boiler;
    boiler.driver = src.boiler.driver;
    boiler.modbusAddress = src.boiler.modbusAddress;
    boiler.outdoorSensor = src.boiler.outdoorSensor;
    boiler.modbusSpeed = src.boiler.modbusSpeed;
    memcpy(boiler.outdoorSensorMqttTopic, src.boiler.outdoorSensorMqttTopic, sizeof(boiler.outdoorSensorMqttTopic));
    memcpy(boiler.outdoorSensorMqttField, src.boiler.outdoorSensorMqttField, sizeof(boiler.outdoorSensorMqttField));
    boiler.minSetPoint = 50.0f;

    if (src.boiler.K == 0.0f && src.boiler.B == 0.0f) {
        boiler.K = 1.0f;
        boiler.B = 7.2f;
    } else {
        boiler.K = src.boiler.K;
        boiler.B = src.boiler.B;
    }

    if (src.boiler.P == 0.0f && src.boiler.I == 0.0f) {
        boiler.P = 2.0f;
        boiler.I = 0.0005f;
    } else {
        boiler.P = src.boiler.P;
        boiler.I = src.boiler.I;
    }

    LOGI("migration", "legacy config v2 detected, migrating");
}

bool readLegacyBoilerStateV1(BoilerStateV1* out)
{
    File file = LittleFS.open("/boiler.bin", FILE_READ);
    if (!file) {
        LOGD("migration", "legacy boiler state not found");
        return false;
    }

    if (file.size() != sizeof(BoilerStateV1) + sizeof(uint16_t)) {
        file.close();
        return false;
    }

    if (file.read(reinterpret_cast<uint8_t*>(out), sizeof(BoilerStateV1)) != sizeof(BoilerStateV1)) {
        LOGW("migration", "failed to read legacy boiler state");
        file.close();
        return false;
    }

    uint16_t storedCrc = 0;
    if (file.read(reinterpret_cast<uint8_t*>(&storedCrc), sizeof(uint16_t)) != sizeof(uint16_t)) {
        LOGW("migration", "failed to read legacy boiler state checksum");
        file.close();
        return false;
    }

    file.close();

    if (migrationCrc16(reinterpret_cast<const uint8_t*>(out), sizeof(BoilerStateV1)) != storedCrc) {
        LOGW("migration", "migration crc mismatch, skipping");
        return false;
    }

    return true;
}

void applyLegacyBoilerStateV1(BoilerState* target, const BoilerStateV1& src)
{
    target->mode = src.mode;
    target->centralHeatingSetPoint = src.centralHeatingSetPoint;
    target->hotWaterSetPoint = src.hotWaterSetPoint;
    target->outdoorTemperature = src.outdoorTemperature;
    target->autoTrim = 0.0f;

    LOGI("migration", "legacy boiler state detected, migrating");
}
