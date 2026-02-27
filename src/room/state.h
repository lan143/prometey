#pragma once

#include <Arduino.h>

struct RoomState
{
    bool active = false;
    bool currentTemperatureInit = false;
    float_t currentTemperature = 0.0f;
    float_t setPoint = 25.0f;
    float_t I = 100.0f;
    float_t prevErr = 0.0f;
    uint64_t prevTime = 0;

    bool operator==(RoomState& other)
    {
        return active == other.active
            && currentTemperature == other.currentTemperature
            && setPoint == other.setPoint
            && I == other.I
            && prevErr == other.prevErr
            && prevTime == other.prevTime;
    }

    bool operator!=(RoomState& other)
    {
        return !((*this) == other);
    }
};
