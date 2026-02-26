#pragma once

#include <Arduino.h>
#include <list>
#include <data_mgr.h>
#include <state/state_mgr.h>

#include "boiler/boiler.h"
#include "valve/valve.h"
#include "config.h"
#include "state.h"
#include "state/room_state.h"

class Room
{
public:
    Room(
        Boiler* boiler,
        EDConfig::DataMgr<RoomState>* localStateMgr,
        EDUtils::StateMgr<RoomMQTTState>* mqttStateMgr
    ) : _boiler(boiler), _localStateMgr(localStateMgr), _mqttStateMgr(mqttStateMgr) {}

    void init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, RoomConfig config);
    void addValve(Valve* valve) { _valves.push_back(valve); }

    void setTemperature(float_t temperature)
    {
        _state.currentTemperature = temperature;
        _mqttStateMgr->getState().setCurrentTemperature(temperature);
    }

    void updateSetPoint(float_t setPoint)
    {
        _state.setPoint = setPoint;
        _boiler->updateRoomSetPoint(_config.id, setPoint);
        _mqttStateMgr->getState().changeSetPoint(setPoint);
    }

    void changeActive(bool active);
    uint8_t getID() { return _config.id; }
    uint8_t getValveOpeningPercent() { return _valveOpeningPercent; }
    const RoomState& getState() const { return _state; }

    void update();

private:
    void calculateValvePosition();
    void saveState();

private:
    RoomConfig _config;
    RoomState _state;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastSaveStateTime = 0;
    uint8_t _valveOpeningPercent = 0;

    std::list<Valve*> _valves;
    Boiler* _boiler = nullptr;
    EDConfig::DataMgr<RoomState>* _localStateMgr = nullptr;
    EDUtils::StateMgr<RoomMQTTState>* _mqttStateMgr = nullptr;
};
