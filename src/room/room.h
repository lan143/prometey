#pragma once

#include <Arduino.h>
#include <list>

#include "boiler/boiler.h"
#include "valve/valve.h"
#include "config.h"
#include "state.h"

class Room
{
public:
    Room(Boiler* boiler) : _boiler(boiler) {}

    void init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, RoomConfig config);
    void addValve(Valve* valve) { _valves.push_back(valve); }

    void setTemperature(float_t temperature) { _state.currentTemperature = temperature; }
    void updateSetPoint(float_t setPoint) { _state.setPoint = setPoint; }
    void changeActive(bool active) { _state.active = active; }

    uint8_t getID() { return _config.id; }

    void update();

private:
    RoomConfig _config;
    RoomState _state;
    uint64_t _lastUpdateTime = 0;

    std::list<Valve*> _valves;
    Boiler* _boiler = NULL;
};
