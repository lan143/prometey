#include <esp_log.h>

#include "room_producer.h"

bool RoomStateProducer::publish(RoomMQTTState* state)
{
    ESP_LOGD("RoomStateProducer", "try to produce state");

    if (!_mqtt->isConnected()) {
        ESP_LOGE("RoomStateProducer", "failed to produce message - mqtt isnt connected");
        return false;
    }

    std::string payload = state->marshalJSON();
    return _mqtt->publish(_topic, payload.c_str(), false);
}
