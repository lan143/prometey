#pragma once

#include <PCF8574.h>

#include "valve/driver.h"

class PCF8574ValveDriver : public ValveDriver
{
public:
    PCF8574ValveDriver(PCF8574* bus) : _bus(bus) {}

    void init(uint8_t channel) { _channel = channel; }

    bool changeState(bool enabled)
    {
        _bus->write(_channel, enabled ? LOW : HIGH);
        _enabled = enabled;

        return true;
    }

    bool isClosing() const { return _enabled; }

private:
    PCF8574* _bus;
    uint8_t _channel = 0;
    bool _enabled = false;
};
