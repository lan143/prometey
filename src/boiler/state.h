#pragma once

#include <Arduino.h>

#include "enums.h"

struct BoilerState
{
    CentralHeatingMode mode = CENTRAL_HEATING_MODE_OFF;
    float_t centralHeatingSetPoint = 30;
    float_t hotWaterSetPoint = 30;
    float_t outdoorTemperature = 0.0f;
    float_t autoTrim = 0.0f;

    bool operator==(BoilerState& other)
    {
        return mode == other.mode
            && centralHeatingSetPoint == other.centralHeatingSetPoint
            && hotWaterSetPoint == other.hotWaterSetPoint
            && outdoorTemperature == other.outdoorTemperature
            && autoTrim == other.autoTrim;
    }

    bool operator!=(BoilerState& other)
    {
        return !((*this) == other);
    }
};
