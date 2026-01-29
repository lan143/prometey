#pragma once

#include <discovery.h>
#include <ready.h>
#include <state/state_mgr.h>

#include "driver.h"
#include "mode.h"
#include "state.h"
#include "state/state.h"

class Boiler : public EDHealthCheck::Ready
{
public:
    Boiler(Driver& driver, EDUtils::StateMgr<State>* stateMgr) : _driver(driver), _stateMgr(stateMgr) {}
    void init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, std::string stateTopic, std::string commandTopic);

    void setCentralHeatingMode(CentralHeatingMode mode);
    void updateHotWaterState(bool enabled);
    void setCentralHeatingSetPoint(float_t setPoint);
    void setHotWaterSetPoint(float_t setPoint);

    void setOutdoorTemperature(float_t temperature);

    void update();

    EDHealthCheck::ReadyResult ready();

private:
    BoilerState _state;
    uint64_t _lastUpdateTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    Driver& _driver;
    EDUtils::StateMgr<State>* _stateMgr;
};
