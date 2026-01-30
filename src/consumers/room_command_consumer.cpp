#include "room_command_consumer.h"
#include "command/room_command.h"

void RoomCommandConsumer::consume(std::string payload)
{
    ESP_LOGD("room_command_consumer", "handle");

    RoomCommand command;
    if (!command.unmarshalJSON(payload.c_str())) {
        ESP_LOGE("room_command_consumer", "cant unmarshal command");
        return;
    }

    if (command.getMode().Valid()) {
        _room->changeActive(command.getMode().Value() != "off");
    }

    if (command.getSetPoint().Valid()) {
        _room->updateSetPoint(command.getSetPoint().Value());
    }
}
