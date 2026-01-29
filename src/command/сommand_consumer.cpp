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
        if (command.getCentralHeatingMode().Value() == "off") {
            _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_OFF);
        } else if (command.getCentralHeatingMode().Value() == "heat") {
            _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_HEAT);
        } else if (command.getCentralHeatingMode().Value() == "auto") {
            _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_AUTO);
        }
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
