#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "state.h"

bool State::operator==(State& other)
{
    return (*this)._centralHeatingMode == other._centralHeatingMode
        && (*this)._centralHeatingSetPoint == other._centralHeatingSetPoint
        && (*this)._centralHeatingCurrentTemperature == other._centralHeatingCurrentTemperature
        && (*this)._hotWaterMode == other._hotWaterMode
        && (*this)._hotWaterSetPoint == other._hotWaterSetPoint
        && (*this)._hotWaterCurrentTemperature == other._hotWaterCurrentTemperature
        && (*this)._isHotWaterActive == other._isHotWaterActive
        && (*this)._isFlameActive == other._isFlameActive
        && (*this)._isFault == other._isFault
        && (*this)._modulation == other._modulation;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_centralHeatingMode.Valid()) {
            switch (_centralHeatingMode.Value()) {
            case EDHA::MODE_OFF:
                entity[F("centralHeatingMode")] = "off";
                break;
            case EDHA::MODE_HEAT:
                entity[F("centralHeatingMode")] = "heat";
                break;
            case EDHA::MODE_AUTO:
                entity[F("centralHeatingMode")] = "auto";
                break;
            }
        }

        if (_isCentralHeatingActive.Valid()) {
            entity[F("centralHeatingState")] = _isCentralHeatingActive.Value() ? "heating" : "idle";
        }

        if (_centralHeatingSetPoint.Valid()) {
            entity[F("centralHeatingSetPoint")] = _centralHeatingSetPoint.Value();
        }

        if (_centralHeatingCurrentTemperature.Valid()) {
            entity[F("centralHeatingCurrentTemperature")] = _centralHeatingCurrentTemperature.Value();
        }

        if (_hotWaterMode.Valid()) {
            entity[F("hotWaterMode")] = EDHA::mapMode(_hotWaterMode.Value());
        }

        if (_hotWaterSetPoint.Valid()) {
            entity[F("hotWaterSetPoint")] = _hotWaterSetPoint.Valid();
        }

        if (_hotWaterCurrentTemperature.Valid()) {
            entity[F("hotWaterCurrentTemperature")] = _hotWaterCurrentTemperature.Value();
        }

        if (_isHotWaterActive.Valid()) {
            entity[F("isHotWaterActive")] = _isHotWaterActive.Value() ? "true" : "false";
        }

        if (_isFlameActive.Valid()) {
            entity[F("isFlameActive")] = _isFlameActive.Value() ? "true" : "false";
        }

        if (_isFault.Valid()) {
            entity[F("isFault")] = _isFault.Value() ? "true" : "false";
        }

        if (_modulation.Valid()) {
            entity[F("modulation")] = _modulation.Value();
        }
    });

    return payload;
}