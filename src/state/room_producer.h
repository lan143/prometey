#pragma once

#include <Arduino.h>
#include <mqtt.h>
#include <producer.h>
#include <state/state_producer.h>
#include "room_state.h"

class RoomStateProducer : public EDMQTT::Producer, public EDUtils::StateProducer<RoomMQTTState>
{
public:
    RoomStateProducer(EDMQTT::MQTT* mqtt) : Producer(mqtt) {}

    bool publish(RoomMQTTState* state);
};
