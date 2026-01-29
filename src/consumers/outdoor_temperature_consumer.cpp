#include <Json.h>
#include <nullable.h>

#include "outdoor_temperature_consumer.h"

void OutdoorTemperatureConsumer::consume(std::string payload)
{
    EDUtils::Nullable<float_t> outdoorTemperature = EDUtils::Nullable<float_t>(false, 0);

    if (!EDUtils::parseJson(payload.c_str(), [&outdoorTemperature](JsonObject root) {
        if (root.containsKey(F("centralHeatingMode"))) {
            outdoorTemperature.setValidValue(root[F("centralHeatingMode")].as<float_t>());
        }

        return true;
    })) {
        ESP_LOGE("OutdoorTemperatureConsumer", "failed to unmarshal message from topic");
        return;
    }

    if (outdoorTemperature.Valid()) {
        ESP_LOGD("OutdoorTemperatureConsumer", "got outdoor temperature: %f", outdoorTemperature.Value());
        _boiler->setOutdoorTemperature(outdoorTemperature.Value());
    } else {
        ESP_LOGE("OutdoorTemperatureConsumer", "got invalid temperature value from topic");
    }
}
