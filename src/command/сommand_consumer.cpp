#include <Arduino.h>
#include <esp_log.h>

#include "command_consumer.h"
#include "command.h"

void CommandConsumer::consume(std::string payload)
{
    ESP_LOGD("command_consumer", "handle");

    Command command;
    if (!command.unmarshalJSON(payload.c_str())) {
        ESP_LOGE("command_consumer", "cant unmarshal command");
        return;
    }

    if (command.getCentralHeatingMode().Valid()) {
        _boiler->updateCentralHeatingState(command.getCentralHeatingMode().Value() != "off");
    }

    if (command.getCentralHeatingSetPoint().Valid()) {
        _boiler->setCentralHeatingSetPoint(command.getCentralHeatingSetPoint().Value());
    }

    if (command.getHotWaterMode().Valid()) {
        _boiler->updateHotWaterState(command.getHotWaterMode().Value() != "off");
    }

    if (command.getHotWaterSetPoint().Valid()) {
        _boiler->setHotWaterSetPoint(command.getHotWaterSetPoint().Value());
    }
}
