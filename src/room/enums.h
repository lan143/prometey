#pragma once

#include <Arduino.h>

enum RoomTemperatureSensorType : uint8_t 
{
    ROOM_TEMPERATURE_SENSOR_TYPE_NONE,
    ROOM_TEMPERATURE_SENSOR_TYPE_MQTT,
};