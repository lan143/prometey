#include <Json.h>

#include "room_command.h"

bool RoomCommand::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("mode"))) {
            _mode.setValidValue(root[F("mode")].as<std::string>());
        }

        if (root.containsKey(F("setPoint"))) {
            _setPoint.setValidValue(root[F("setPoint")].as<float_t>());
        }

        return true;
    });
}
