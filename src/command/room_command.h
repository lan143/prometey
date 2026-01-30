#pragma once

#include <Arduino.h>
#include <nullable.h>

class RoomCommand
{
public:
    bool unmarshalJSON(const char* data);

    EDUtils::Nullable<std::string> getMode() const { return _mode; }
    EDUtils::Nullable<float_t> getSetPoint() const { return _setPoint; }

private:
    EDUtils::Nullable<std::string> _mode = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<float_t> _setPoint = EDUtils::Nullable<float_t>(false, 0.0f);
};