#pragma once

#include "enums.h"

struct BoilerConfig
{
    BoilerDriver driver = BOILER_DRIVER_NO_SELECT;
    uint32_t modbusSpeed = 19200;
    uint8_t modbusAddress = 0x7;
    float_t K = 0.0f;
    float_t B = 0.0f;
    BoilerOutdoorSensor outdoorSensor = BOILER_OUTDOOR_SENSOR_NO_SELECT;
    char outdoorSensorMqttTopic[128] = {0};
    char outdoorSensorMqttField[64] = {0};
};
