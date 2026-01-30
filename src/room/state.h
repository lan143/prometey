#pragma once

#include <Arduino.h>

struct RoomState
{
    bool active = false;
    float_t currentTemperature = 0.0f;
    float_t setPoint = 0.0f;
    float_t I = 0.0f;
    float_t prevErr = 0.0f;
    uint64_t prevTime = 0;
};
