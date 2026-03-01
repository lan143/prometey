#pragma once

#include <Arduino.h>
#include <nullable.h>

#include "relay/enum.h"
#include "valve/config.h"
#include "web/validate.h"

class UpdateValveRequest
{
public:
    bool unmarshalJSON(const char* data);
    ValidateErr validate();
    ValveConfig asConfig();
    uint8_t getID() const { return _id.Value(); }

private:
    EDUtils::Nullable<uint8_t> _id = EDUtils::Nullable<uint8_t>(false, 0);
    EDUtils::Nullable<bool> _enabled = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<RelayType> _type = EDUtils::Nullable<RelayType>(false, RELAY_TYPE_NONE);
    EDUtils::Nullable<uint8_t> _channel = EDUtils::Nullable<uint8_t>(false, 0);
    EDUtils::Nullable<uint32_t> _fullTravelTime = EDUtils::Nullable<uint32_t>(false, 0);
    EDUtils::Nullable<uint32_t> _windowTime = EDUtils::Nullable<uint32_t>(false, 0);
    EDUtils::Nullable<uint8_t> _roomID = EDUtils::Nullable<uint8_t>(false, 0);
};
