#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "room_state.h"

bool RoomMQTTState::operator==(RoomMQTTState& other)
{
    return (*this)._mode == other._mode
        && (*this)._setPoint == other._setPoint
        && (*this)._currentTemperature == other._currentTemperature;
}

std::string RoomMQTTState::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_mode.Valid()) {
            switch (_mode.Value()) {
            case EDHA::MODE_OFF:
                entity[F("mode")] = "off";
                break;
            case EDHA::MODE_HEAT:
                entity[F("mode")] = "heat";
                break;
            case EDHA::MODE_AUTO:
                entity[F("mode")] = "auto";
                break;
            }
        }

        if (_setPoint.Valid()) {
            entity[F("setPoint")] = _setPoint.Value();
        }

        if (_currentTemperature.Valid()) {
            entity[F("currentTemperature")] = _currentTemperature.Value();
        }

        if (_valveOpening.Valid()) {
            entity[F("valveOpening")] = _valveOpening.Value();
        }
    });

    return payload;
}