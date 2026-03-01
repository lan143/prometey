#pragma once

#include "relay/enum.h"

struct ValveConfig
{
    bool enabled = false;
    RelayType type = RELAY_TYPE_NONE;
    uint8_t channel = 0;
    uint32_t fullTravelTime = 0;
    uint32_t windowTime = 0;
    uint8_t roomID = 0;
};
