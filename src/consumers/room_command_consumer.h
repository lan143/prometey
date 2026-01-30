#pragma once

#include <Arduino.h>
#include <consumer.h>

#include "room/room.h"

class RoomCommandConsumer : public EDMQTT::Consumer
{
public:
    RoomCommandConsumer(Room* room) : _room(room) {}

    void consume(std::string payload);

private:
    Room* _room = nullptr;
};
