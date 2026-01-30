#pragma once

#include <Arduino.h>

#include "enums.h"

struct RoomConfig
{
    bool enabled = false;
    uint8_t id = 0;
    char name[32] = {0};
    char mqttCommandTopic[64] = {0};
    char mqttStateTopic[64] = {0};
    RoomTemperatureSensorType temperatureSensorType = ROOM_TEMPERATURE_SENSOR_TYPE_NONE;
    char mqttTemperatureSensorTopic[128] = {0};
    char mqttTemperatureSensorField[64] = {0};
    float_t kP = 0.0f;
    float_t kI = 0.0f;
    float_t kD = 0.0f;
};
