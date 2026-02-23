#pragma once

#include <Arduino.h>
#include <list>
#include <ConfigMgr.h>
#include <state/state_mgr.h>

#include "boiler/boiler.h"
#include "valve/valve.h"
#include "config.h"
#include "state.h"
#include "state/room_state.h"

class Room
{
public:
    Room(Boiler* boiler, EDConfig::ConfigMgr<Config>* configMgr, EDUtils::StateMgr<RoomMQTTState>* stateMgr) : _boiler(boiler), _configMgr(configMgr), _stateMgr(stateMgr) {}

    void init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, RoomConfig config);
    void addValve(Valve* valve) { _valves.push_back(valve); }

    void setTemperature(float_t temperature)
    {
        _state.currentTemperature = temperature;
        _stateMgr->getState().setCurrentTemperature(temperature);
    }

    void updateSetPoint(float_t setPoint)
    {
        _state.setPoint = setPoint;
        _boiler->updateRoomSetPoint(_config.id, setPoint);
        _stateMgr->getState().changeSetPoint(setPoint);
    }

    void changeActive(bool active)
    {
        _state.active = active;
        _stateMgr->getState().setMode(active ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
    }

    uint8_t getID() { return _config.id; }

    void update();

private:
    void calculateValvePosition();
    void saveState();

private:
    RoomConfig _config;
    RoomState _state;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastSaveStateTime = 0;

    std::list<Valve*> _valves;
    Boiler* _boiler = nullptr;
    EDConfig::ConfigMgr<Config>* _configMgr = nullptr;
    EDUtils::StateMgr<RoomMQTTState>* _stateMgr = nullptr;
};
