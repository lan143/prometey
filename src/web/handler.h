#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <ESPAsyncWebServer.h>
#include <ConfigMgr.h>
#include <healthcheck.h>

#include "config.h"
#include "boiler/boiler_handler.h"
#include "network/network.h"
#include "room/api/room_handler.h"
#include "valve/api/valve_handler.h"

class Handler {
public:
    Handler(
        EDConfig::ConfigMgr<Config>* configMgr,
        NetworkMgr* networkMgr,
        EDHealthCheck::HealthCheck* healthCheck,
        BoilerHandler* boilerHandler,
        RoomHandler* roomHandler,
        ValveHandler* valveHandler
    ) : _configMgr(configMgr), _networkMgr(networkMgr),
        _healthCheck(healthCheck), _boilerHandler(boilerHandler), _roomHandler(roomHandler),
        _valveHandler(valveHandler) {
        _server = new AsyncWebServer(80);
    }

    void init();

private:
    AsyncWebServer* _server = nullptr;
    BoilerHandler* _boilerHandler = nullptr;
    EDConfig::ConfigMgr<Config>* _configMgr = nullptr;
    NetworkMgr* _networkMgr = nullptr;
    EDHealthCheck::HealthCheck* _healthCheck = nullptr;
    RoomHandler* _roomHandler = nullptr;
    ValveHandler* _valveHandler = nullptr;
};
