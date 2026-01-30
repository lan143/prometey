#pragma once

#include <Arduino.h>

enum CentralHeatingMode : uint8_t {
    CENTRAL_HEATING_MODE_OFF,
    CENTRAL_HEATING_MODE_HEAT,
    CENTRAL_HEATING_MODE_AUTO
};

enum BoilerDriver : uint8_t {
    BOILER_DRIVER_NO_SELECT,
    BOILER_DRIVER_ECTOCONTROLV2
};

enum BoilerOutdoorSensor : uint8_t {
    BOILER_OUTDOOR_SENSOR_NO_SELECT,
    BOILER_OUTDOOR_SENSOR_MQTT
};
