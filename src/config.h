#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "defines.h"
#include "boiler/boiler_config.h"
#include "boiler/state.h"
#include "room/config.h"
#include "room/state.h"
#include "valve/config.h"

#define CURRENT_VERSION 2

#define HOST_LEN 64
#define MQTT_DEFAULT_PORT 1883

#define MQTT_TOPIC_LEN 64

struct Config
{
    uint8_t version = CURRENT_VERSION;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttCommandTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStateTopic[MQTT_TOPIC_LEN] = {0};

    BoilerConfig boiler;
    RoomConfig rooms[ROOMS_COUNT] = {};
    ValveConfig valves[VALVES_COUNT] = {};
};
