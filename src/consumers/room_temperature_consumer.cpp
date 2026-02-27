#include <Json.h>
#include <nullable.h>

#include "room_temperature_consumer.h"
#include "log/log.h"

void RoomTemperatureConsumer::consume(std::string payload)
{
    EDUtils::Nullable<float_t> temperature = EDUtils::Nullable<float_t>(false, 0);

    if (!EDUtils::parseJson(payload.c_str(), [this, &temperature](JsonObject root) {
        if (root.containsKey(_field)) {
            temperature.setValidValue(root[_field].as<float_t>());
        }

        return true;
    })) {
        LOGE("RoomTemperatureConsumer", "failed to unmarshal message from topic");
        return;
    }

    if (temperature.Valid()) {
        LOGD("RoomTemperatureConsumer", "got room temperature: %f", temperature.Value());
        _room->setTemperature(temperature.Value());
    } else {
        LOGE("RoomTemperatureConsumer", "got invalid temperature value from topic");
    }
}
