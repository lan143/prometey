#pragma once

#include <Arduino.h>

struct ValidateErr
{
    ValidateErr(bool v, std::string m) : valid(v), message(m) {}

    bool valid = false;
    std::string message;
};
