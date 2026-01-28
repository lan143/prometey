#include <esp_log.h>

#include "producer.h"

bool StateProducer::publish(State* state)
{
    ESP_LOGD("StateProducer", "try to produce state");

    if (!_mqtt->isConnected()) {
        ESP_LOGE("StateProducer", "failed to produce message - mqtt isnt connected");
        return false;
    }

    std::string payload = state->marshalJSON();
    return _mqtt->publish(_topic, payload.c_str(), false);
}
