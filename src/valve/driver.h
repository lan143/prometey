#pragma once

#include <Arduino.h>

class ValveDriver
{
public:
    virtual bool changeState(bool enabled) = 0;
    virtual bool isClosing() const = 0;
};
