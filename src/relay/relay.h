#pragma once

class Relay
{
public:
    virtual bool changeState(bool enable) = 0;
    virtual bool isEnabled() const = 0;
};
