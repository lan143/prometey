#include <esp_log.h>

#include "producer.h"
#include "log/log.h"

bool StateProducer::publish(State* state)
{
    LOGD("StateProducer", "try to produce state");

    if (!_mqtt->isConnected()) {
        LOGE("StateProducer", "failed to produce message - mqtt isnt connected");
        return false;
    }

    std::string payload = state->marshalJSON();
    return _mqtt->publish(_topic, payload.c_str(), false);
}
