#pragma once

#include <Arduino.h>
#include <nullable.h>

class Command
{
public:
    bool unmarshalJSON(const char* data);

    EDUtils::Nullable<std::string> getCentralHeatingMode() const { return _centralHeatingMode; }
    EDUtils::Nullable<float_t> getCentralHeatingSetPoint() const { return _centralHeatingSetPoint; }
    EDUtils::Nullable<std::string> getHotWaterMode() const { return _hotWaterMode; }
    EDUtils::Nullable<float_t> getHotWaterSetPoint() const { return _hotWaterSetPoint; }

private:
    EDUtils::Nullable<std::string> _centralHeatingMode = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<float_t> _centralHeatingSetPoint = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<std::string> _hotWaterMode = EDUtils::Nullable<std::string>(false, "");
    EDUtils::Nullable<float_t> _hotWaterSetPoint = EDUtils::Nullable<float_t>(false, 0.0f);
};
