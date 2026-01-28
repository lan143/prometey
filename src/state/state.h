#pragma once

#include <Arduino.h>
#include <nullable.h>
#include <enum/modes.h>

class State
{
public:
    State() {}

    bool operator==(State& other);
    bool operator!=(State& other) { return !(*this == other); }

    std::string marshalJSON();

    void setCentralHeatingMode(EDHA::Mode mode) { _centralHeatingMode.setValidValue(mode); }
    void setCentralHeatingSetPoint(float_t value) { _centralHeatingSetPoint.setValidValue(value); }
    void setCentralHeatingCurrentTemperature(float_t value) { _centralHeatingCurrentTemperature.setValidValue(value); }

    void setHotWaterMode(EDHA::Mode mode) { _hotWaterMode.setValidValue(mode); }
    void setHotWaterSetPoint(float_t value) { _hotWaterSetPoint.setValidValue(value); }
    void setHotWaterCurrentTemperature(float_t value) { _hotWaterCurrentTemperature.setValidValue(value); }

    void changeCentralHeatingActive(bool active) { _isCentralHeatingActive.setValidValue(active); }
    void changeHotWaterActive(bool active) { _isHotWaterActive.setValidValue(active); }
    void changeFlameActive(bool active) { _isFlameActive.setValidValue(active); }
    void changeFault(bool active) { _isFault.setValidValue(active); }

    void setModulation(float_t value) { _modulation.setValidValue(value); }

public:
    
private:
    EDUtils::Nullable<EDHA::Mode> _centralHeatingMode = EDUtils::Nullable<EDHA::Mode>(false, EDHA::MODE_OFF);
    EDUtils::Nullable<float_t> _centralHeatingSetPoint = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<float_t> _centralHeatingCurrentTemperature = EDUtils::Nullable<float_t>(false, 0.0f);

    EDUtils::Nullable<EDHA::Mode> _hotWaterMode = EDUtils::Nullable<EDHA::Mode>(false, EDHA::MODE_OFF);
    EDUtils::Nullable<float_t> _hotWaterSetPoint = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<float_t> _hotWaterCurrentTemperature = EDUtils::Nullable<float_t>(false, 0.0f);

    EDUtils::Nullable<bool> _isCentralHeatingActive = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isHotWaterActive = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isFlameActive = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isFault = EDUtils::Nullable<bool>(false, false);

    EDUtils::Nullable<float_t> _modulation = EDUtils::Nullable<float_t>(false, 0.0f);
};
