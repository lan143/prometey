#pragma once

#include <Arduino.h>
#include <consumer.h>

#include "room/room.h"

class RoomTemperatureConsumer : public EDMQTT::Consumer
{
public:
    RoomTemperatureConsumer(
        Room* room
    ) : _room(room) {}

    using EDMQTT::Consumer::init;
    void init(std::string topic, std::string field)
    {
        EDMQTT::Consumer::init(topic.c_str());
        _field = field;
    }

    void consume(std::string payload);

private:
    Room* _room;

private:
    std::string _field;
};

