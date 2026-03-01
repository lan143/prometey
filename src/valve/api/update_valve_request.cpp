#include <Json.h>

#include "defines.h"
#include "update_valve_request.h"

bool UpdateValveRequest::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("id"))) {
            _id.setValidValue(root[F("id")].as<uint8_t>());
        }

        if (root.containsKey(F("enabled"))) {
            _enabled.setValidValue(root[F("enabled")].as<bool>());
        }

        if (root.containsKey(F("type"))) {
            _type.setValidValue(root[F("type")].as<RelayType>());
        }

        if (root.containsKey(F("channel"))) {
            _channel.setValidValue(root[F("channel")].as<uint8_t>());
        }

        if (root.containsKey(F("fullTravelTime"))) {
            _fullTravelTime.setValidValue(root[F("fullTravelTime")].as<uint32_t>());
        }

        if (root.containsKey(F("windowTime"))) {
            _windowTime.setValidValue(root[F("windowTime")].as<uint32_t>());
        }

        if (root.containsKey(F("roomID"))) {
            _roomID.setValidValue(root[F("roomID")].as<uint8_t>());
        }

        return true;
    });
}

ValidateErr UpdateValveRequest::validate()
{
    if (!_id.Valid()) {
        return ValidateErr(false, "id is required");
    }

    if (_id.Value() >= VALVES_COUNT) {
        return ValidateErr(false, "valve id more that max");
    }

    if (!_enabled.Valid()) {
        return ValidateErr(false, "enabled is required");
    }

    if (!_type.Valid()) {
        return ValidateErr(false, "type is required");
    }

    switch (_type.Value()) {
        case RELAY_TYPE_NONE:
            return ValidateErr(false, "you must specify valve type");
        case RELAY_TYPE_PCF8574:
            if (!_channel.Valid()) {
                return ValidateErr(false, "channel is required");
            }

            if (_channel.Value() > 15) {
                return ValidateErr(false, "more that 15");
            }
            break;
        default:
            return ValidateErr(false, "unknown valve type");
    }

    if (!_fullTravelTime.Valid()) {
        return ValidateErr(false, "full travel time is required");
    }

    if (!_windowTime.Valid()) {
        return ValidateErr(false, "window time is required");
    }

    if (!_roomID.Valid()) {
        return ValidateErr(false, "room id is required");
    }

    if (_roomID.Value() >= ROOMS_COUNT) {
        return ValidateErr(false, "invalid room id");
    }

    return ValidateErr(true, "");
}

ValveConfig UpdateValveRequest::asConfig()
{
    ValveConfig config = ValveConfig();
    config.enabled = _enabled.Value();
    config.type = _type.Value();
    config.channel = _channel.Value();
    config.fullTravelTime = _fullTravelTime.Value();
    config.windowTime = _windowTime.Value();
    config.roomID = _roomID.Value();

    return config;
}
