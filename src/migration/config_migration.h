#pragma once

#include <Arduino.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "config.h"
#include "defines.h"
#include "boiler/enums.h"
#include "boiler/state.h"
#include "room/config.h"
#include "valve/config.h"

// Frozen byte-layout replica of the v2 BoilerConfig (before minSetPoint).
struct BoilerConfigV2
{
    BoilerDriver driver = BOILER_DRIVER_NO_SELECT;
    uint8_t modbusAddress = 0x7;
    BoilerOutdoorSensor outdoorSensor = BOILER_OUTDOOR_SENSOR_NO_SELECT;
    uint32_t modbusSpeed = 19200;
    float_t K = 0.0f;
    float_t B = 0.0f;
    float_t P = 0.0f;
    float_t I = 0.0f;
    char outdoorSensorMqttTopic[64] = {0};
    char outdoorSensorMqttField[16] = {0};
};

// Frozen byte-layout replica of the v2 Config (before minSetPoint).
struct ConfigV2
{
    uint8_t version = 2;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttCommandTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStateTopic[MQTT_TOPIC_LEN] = {0};

    BoilerConfigV2 boiler;
    RoomConfig rooms[ROOMS_COUNT] = {};
    ValveConfig valves[VALVES_COUNT] = {};
};

// Frozen byte-layout replica of the legacy BoilerState (before autoTrim).
struct BoilerStateV1
{
    CentralHeatingMode mode = CENTRAL_HEATING_MODE_OFF;
    float_t centralHeatingSetPoint = 30;
    float_t hotWaterSetPoint = 30;
    float_t outdoorTemperature = 0.0f;
};

// CRC16 identical to EDConfig::DataMgr::calculateChecksum (init 0xFFFF, poly 0xA001).
uint16_t migrationCrc16(const uint8_t* data, size_t len);

// Reads "/config.bin" only when it holds a legacy v2 layout with a valid checksum.
bool readLegacyConfigV2(ConfigV2* out);

// Copies every v2 field onto the v3 target, keeping CURRENT_VERSION and repairing
// never-tuned (all-zero) K/B and P/I pairs to reproduce the previous behavior.
void applyLegacyConfigV2(Config* target, const ConfigV2& src);

// Reads "/boiler.bin" only when it holds the legacy pre-trim layout with a valid checksum.
bool readLegacyBoilerStateV1(BoilerStateV1* out);

// Copies the legacy state onto the v3 target, leaving autoTrim at zero.
void applyLegacyBoilerStateV1(BoilerState* target, const BoilerStateV1& src);
