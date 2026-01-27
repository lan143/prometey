#pragma once

#include <Arduino.h>

struct BoilerState {
    float_t centralHeatingSetPoint = 30;
    float_t hotWaterSetPoint = 30;
};
