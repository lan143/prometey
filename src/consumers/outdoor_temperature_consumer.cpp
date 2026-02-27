#include <Json.h>
#include <nullable.h>

#include "outdoor_temperature_consumer.h"
#include "log/log.h"

void OutdoorTemperatureConsumer::consume(std::string payload)
{
    EDUtils::Nullable<float_t> outdoorTemperature = EDUtils::Nullable<float_t>(false, 0);

    if (!EDUtils::parseJson(payload.c_str(), [this, &outdoorTemperature](JsonObject root) {
        if (root.containsKey(_field)) {
            outdoorTemperature.setValidValue(root[_field].as<float_t>());
        }

        return true;
    })) {
        LOGE("OutdoorTemperatureConsumer", "failed to unmarshal message from topic");
        return;
    }

    if (outdoorTemperature.Valid()) {
        LOGD("OutdoorTemperatureConsumer", "got outdoor temperature: %f", outdoorTemperature.Value());
        _boiler->setOutdoorTemperature(outdoorTemperature.Value());
    } else {
        LOGE("OutdoorTemperatureConsumer", "got invalid temperature value from topic");
    }
}
