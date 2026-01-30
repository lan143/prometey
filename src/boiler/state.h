#pragma once

#include <Arduino.h>

#include "enums.h"

struct BoilerState {
    CentralHeatingMode mode = CENTRAL_HEATING_MODE_OFF;
    float_t centralHeatingSetPoint = 30;
    float_t hotWaterSetPoint = 30;
    float_t outdoorTemperature = 0.0f;
    float_t maxRoomTemperatureErr = 0.0f;
    float_t maxRoomSetPoint = 0.0f;
};
