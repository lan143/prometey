#include <esp_log.h>

#include "room_producer.h"
#include "log/log.h"

bool RoomStateProducer::publish(RoomMQTTState* state)
{
    LOGD("RoomStateProducer", "try to produce state");

    if (!_mqtt->isConnected()) {
        LOGE("RoomStateProducer", "failed to produce message - mqtt isnt connected");
        return false;
    }

    std::string payload = state->marshalJSON();
    return _mqtt->publish(_topic, payload.c_str(), false);
}
