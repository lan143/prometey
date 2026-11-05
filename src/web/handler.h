#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>
#include <data_mgr.h>
#include <healthcheck.h>
#include <network/network_api.h>

#include "config.h"
#include "web/backup_specs.h"
#include "web/control_handler.h"
#include "boiler/boiler_handler.h"
#include "room/api/room_handler.h"
#include "valve/api/valve_handler.h"

class Handler {
public:
    Handler(
        EDConfig::DataMgr<Config>* configMgr,
        EDNetwork::NetworkApi* networkApi,
        EDHealthCheck::HealthCheck* healthCheck,
        BoilerHandler* boilerHandler,
        RoomHandler* roomHandler,
        ValveHandler* valveHandler,
        ControlHandler* controlHandler
    ) : _configMgr(configMgr), _networkApi(networkApi),
        _healthCheck(healthCheck), _boilerHandler(boilerHandler), _roomHandler(roomHandler),
        _valveHandler(valveHandler), _controlHandler(controlHandler),
        _configFileHandler(BackupSpecs::kConfigFileHandlerConfig),
        _configBackupHandler(BackupSpecs::kBackupHandlerConfig) {
        _server = new AsyncWebServer(80);
    }

    void init();

private:
    void registerLogSettingsHandlers();

    AsyncWebServer* _server = nullptr;
    BoilerHandler* _boilerHandler = nullptr;
    EDConfig::DataMgr<Config>* _configMgr = nullptr;
    EDNetwork::NetworkApi* _networkApi = nullptr;
    EDHealthCheck::HealthCheck* _healthCheck = nullptr;
    RoomHandler* _roomHandler = nullptr;
    ValveHandler* _valveHandler = nullptr;
    ControlHandler* _controlHandler = nullptr;
    EDConfig::ConfigFileHandler _configFileHandler;
    EDConfig::ConfigBackupHandler _configBackupHandler;
};
