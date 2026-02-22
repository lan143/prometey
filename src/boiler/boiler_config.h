#pragma once

#include "enums.h"

struct BoilerConfig
{
    BoilerDriver driver = BOILER_DRIVER_NO_SELECT;
    uint8_t modbusAddress = 0x7;
    BoilerOutdoorSensor outdoorSensor = BOILER_OUTDOOR_SENSOR_NO_SELECT;
    uint32_t modbusSpeed = 19200;
    float_t K = 0.0f;
    float_t B = 0.0f;
    float_t P = 0.0f;
    float_t I = 0.0f;
    char outdoorSensorMqttTopic[64] = {0};
    char outdoorSensorMqttField[16] = {0};
};
