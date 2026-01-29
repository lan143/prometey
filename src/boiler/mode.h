#pragma once

#include <Arduino.h>

enum CentralHeatingMode : uint8_t {
    CENTRAL_HEATING_MODE_OFF,
    CENTRAL_HEATING_MODE_HEAT,
    CENTRAL_HEATING_MODE_AUTO
};
