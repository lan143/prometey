#pragma once

#include <Arduino.h>

#include "driver.h"
#include "config.h"

class Valve
{
public:
    Valve(ValveDriver* driver) : _driver(driver) {}

    void init(ValveConfig config);
    bool setOpening(uint8_t percent) { _closePercent = 100 - percent; }
    void update();

private:
    ValveDriver* _driver;
    ValveConfig _config;

    uint8_t _closePercent = 0.0f;
    uint64_t _nextUpdateTime = 0;
    uint32_t _closeTime = 0;
};
