#pragma once

#include <Arduino.h>
#include <nullable.h>
#include <enum/modes.h>

class RoomMQTTState
{
public:
    RoomMQTTState() {}

    bool operator==(RoomMQTTState& other);
    bool operator!=(RoomMQTTState& other) { return !(*this == other); }

    std::string marshalJSON();

    void setMode(EDHA::Mode mode) { _mode.setValidValue(mode); }
    void changeSetPoint(float_t value) { _setPoint.setValidValue(value); }
    void setCurrentTemperature(float_t value) { _currentTemperature.setValidValue(value); }
    void setValveOpening(uint8_t value) { _valveOpening.setValidValue(value); }

public:
    
private:
    EDUtils::Nullable<EDHA::Mode> _mode = EDUtils::Nullable<EDHA::Mode>(false, EDHA::MODE_OFF);
    EDUtils::Nullable<float_t> _setPoint = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<float_t> _currentTemperature = EDUtils::Nullable<float_t>(false, 0.0f);
    EDUtils::Nullable<uint8_t> _valveOpening = EDUtils::Nullable<uint8_t>(false, 0);
};
