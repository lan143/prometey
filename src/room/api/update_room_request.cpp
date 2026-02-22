#include <Json.h>

#include "defines.h"
#include "update_room_request.h"

bool UpdateRoomRequest::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("id"))) {
            _id.setValidValue(root[F("id")].as<uint8_t>());
        }

        if (root.containsKey(F("enabled"))) {
            _enabled.setValidValue(root[F("enabled")].as<bool>());
        }

        if (root.containsKey(F("temperatureSensorType"))) {
            _temperatureSensorType.setValidValue(root[F("temperatureSensorType")].as<RoomTemperatureSensorType>());
        }

        if (root.containsKey(F("name"))) {
            _name.setValidValue(root[F("name")].as<std::string>());
        }

        if (root.containsKey(F("mqttCommandTopic"))) {
            _mqttCommandTopic.setValidValue(root[F("mqttCommandTopic")].as<std::string>());
        }

        if (root.containsKey(F("mqttStateTopic"))) {
            _mqttStateTopic.setValidValue(root[F("mqttStateTopic")].as<std::string>());
        }

        if (root.containsKey(F("mqttTemperatureSensorTopic"))) {
            _mqttTemperatureSensorTopic.setValidValue(root[F("mqttTemperatureSensorTopic")].as<std::string>());
        }

        if (root.containsKey(F("mqttTemperatureSensorField"))) {
            _mqttTemperatureSensorField.setValidValue(root[F("mqttTemperatureSensorField")].as<std::string>());
        }

        if (root.containsKey(F("kP"))) {
            _kP.setValidValue(root[F("kP")].as<float_t>());
        }

        if (root.containsKey(F("kI"))) {
            _kI.setValidValue(root[F("kI")].as<float_t>());
        }

        if (root.containsKey(F("kD"))) {
            _kD.setValidValue(root[F("kD")].as<float_t>());
        }

        return true;
    });
}

ValidateErr UpdateRoomRequest::validate()
{
    if (!_id.Valid()) {
        return ValidateErr(false, "id is required");
    }

    if (_id.Value() >= ROOMS_COUNT) {
        return ValidateErr(false, "room id more that max");
    }

    if (!_enabled.Valid()) {
        return ValidateErr(false, "enabled is required");
    }

    if (!_temperatureSensorType.Valid()) {
        return ValidateErr(false, "temperatureSensorType is required");
    }

    switch (_temperatureSensorType.Value()) {
        case ROOM_TEMPERATURE_SENSOR_TYPE_NONE:
            return ValidateErr(false, "you must specify temperature sensor type");
        case ROOM_TEMPERATURE_SENSOR_TYPE_MQTT:
            if (!_mqttTemperatureSensorTopic.Valid() || _mqttTemperatureSensorTopic.Value().size() == 0) {
                return ValidateErr(false, "mqtt temperature sensor topic is required");
            }

            if (_mqttTemperatureSensorTopic.Value().size() > 64) {
                return ValidateErr(false, "max mqtt temperature sensor topic lenght is 64 symbols");
            }

            if (!_mqttTemperatureSensorField.Valid() || _mqttTemperatureSensorField.Value().size() == 0) {
                return ValidateErr(false, "mqtt temperature sensor field is required");
            }

            if (_mqttTemperatureSensorField.Value().size() > 16) {
                return ValidateErr(false, "max mqtt temperature sensor field lenght is 64 symbols");
            }
            break;
        default:
            return ValidateErr(false, "unknown temperature sensor type");
    }

    if (!_name.Valid() || _name.Value().size() == 0) {
        return ValidateErr(false, "name is required");
    }

    if (_name.Value().size() > 32) {
        return ValidateErr(false, "max name lenght is 32 symbols");
    }

    if (!_mqttCommandTopic.Valid() || _mqttCommandTopic.Value().size() == 0) {
        return ValidateErr(false, "mqtt command topic is required");
    }

    if (_mqttCommandTopic.Value().size() > 64) {
        return ValidateErr(false, "max mqtt command topic lenght is 64 symbols");
    }

    if (!_mqttStateTopic.Valid() || _mqttStateTopic.Value().size() == 0) {
        return ValidateErr(false, "mqtt state topic is required");
    }

    if (_mqttStateTopic.Value().size() > 64) {
        return ValidateErr(false, "max state command topic lenght is 64 symbols");
    }

    if (!_kP.Valid() || _kP.Value() < 0.0f) {
        return ValidateErr(false, "P required or must be more that 0");
    }

    if (!_kI.Valid() || _kI.Value() < 0.0f) {
        return ValidateErr(false, "I required or must be more that 0");
    }

    if (!_kD.Valid() || _kD.Value() < 0.0f) {
        return ValidateErr(false, "D required or must be more that 0");
    }

    return ValidateErr(true, "");
}

RoomConfig UpdateRoomRequest::asConfig()
{
    RoomConfig config = RoomConfig();
    config.id = _id.Value();
    config.enabled = _enabled.Value();
    config.temperatureSensorType = _temperatureSensorType.Value();
    strcpy(config.name, _name.Value().c_str());
    strcpy(config.mqttStateTopic, _mqttStateTopic.Value().c_str());
    strcpy(config.mqttTemperatureSensorTopic, _mqttTemperatureSensorTopic.Value().c_str());
    strcpy(config.mqttTemperatureSensorField, _mqttTemperatureSensorField.Value().c_str());
    config.kP = _kP.Value();
    config.kI = _kI.Value();
    config.kD = _kD.Value();

    return config;
}