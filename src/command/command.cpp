#include <ArduinoJson.h>
#include <Json.h>

#include "command.h"

bool Command::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("centralHeatingMode"))) {
            _centralHeatingMode.setValidValue(root[F("centralHeatingMode")].as<std::string>());
        }

        if (root.containsKey(F("centralHeatingSetPoint"))) {
            _centralHeatingSetPoint.setValidValue(root[F("centralHeatingSetPoint")].as<float_t>());
        }

        if (root.containsKey(F("hotWaterMode"))) {
            _hotWaterMode.setValidValue(root[F("hotWaterMode")].as<std::string>());
        }

        if (root.containsKey(F("hotWaterSetPoint"))) {
            _hotWaterSetPoint.setValidValue(root[F("hotWaterSetPoint")].as<float_t>());
        }

        return true;
    });
}
