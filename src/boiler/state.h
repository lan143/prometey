#pragma once

#include <Arduino.h>
#include "mode.h"

struct BoilerState {
    CentralHeatingMode mode = CENTRAL_HEATING_MODE_OFF;
    float_t centralHeatingSetPoint = 30;
    float_t hotWaterSetPoint = 30;
};
