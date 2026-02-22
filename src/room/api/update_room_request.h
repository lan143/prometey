#pragma once

#include <Arduino.h>
#include <nullable.h>

#include "room/config.h"
#include "room/enums.h"

struct ValidateErr
{
    ValidateErr(bool v, std::string m) : valid(v), message(m) {}

    bool valid = false;
    std::string message;
};

class UpdateRoomRequest
{
public:
    bool unmarshalJSON(const char* data);
    ValidateErr validate();
    RoomConfig asConfig();
    uint8_t getRoomID() const { return _id.Value(); }

private:
    EDUtils::Nullable<uint8_t> _id = EDUtils::Nullable<uint8_t>(false, 0);
    EDUtils::Nullable<bool> _enabled = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<RoomTemperatureSensorType> _temperatureSensorType = EDUtils::Nullable<RoomTemperatureSensorType>(false, ROOM_TEMPERATURE_SENSOR_TYPE_NONE);
    EDUtils::Nullable<std::string> _name = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<std::string> _mqttCommandTopic = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<std::string> _mqttStateTopic = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<std::string> _mqttTemperatureSensorTopic = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<std::string> _mqttTemperatureSensorField = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<float_t> _kP = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<float_t> _kI = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<float_t> _kD = EDUtils::Nullable<float_t>(false, 0.0f);
};
