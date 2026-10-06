#pragma once

#include <Arduino.h>

#include "config.h"
#include "defines.h"
#include "relay/relay.h"

class Valve
{
public:
    Valve(Relay* relay) : _relay(relay) {}

    void init(ValveConfig config);
    bool setOpening(uint8_t percent)
    {
        if (percent > 100) {
            percent = 100;
        }

        // Map logical 0-100% to physical opening: below 70% the valve passes no heat.
        uint8_t physical = VALVE_MIN_PHYSICAL_OPENING
            + (uint8_t)((100 - VALVE_MIN_PHYSICAL_OPENING) * (uint32_t)percent / 100);

        _closePercent = 100 - physical;
        _closeTime = (int64_t)_config.windowTime * (int64_t)_closePercent / 100;
        _nextUpdateTime = esp_timer_get_time();
        
        return true;
    }
    void update();

private:
    Relay* _relay;
    ValveConfig _config;

    uint8_t _closePercent = 0;
    int64_t _nextUpdateTime = 0;
    int64_t _closeTime = 0;
};
