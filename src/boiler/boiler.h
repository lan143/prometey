#pragma once

#include <discovery.h>
#include <ready.h>
#include <state/state_mgr.h>

#include "driver.h"
#include "enums.h"
#include "state.h"
#include "state/state.h"

class Boiler : public EDHealthCheck::Ready
{
public:
    Boiler(Driver& driver, EDUtils::StateMgr<State>* stateMgr) : _driver(driver), _stateMgr(stateMgr) {}
    void init(
        EDHA::DiscoveryMgr* discoveryMgr,
        EDHA::Device* device,
        std::string stateTopic,
        std::string commandTopic,
        float_t K,
        float_t B
    );

    void setCentralHeatingMode(CentralHeatingMode mode);
    void updateHotWaterState(bool enabled);
    void setCentralHeatingSetPoint(float_t setPoint);
    void setHotWaterSetPoint(float_t setPoint);

    void setOutdoorTemperature(float_t temperature) { _state.outdoorTemperature = temperature; }
    void updateRoomTemperatureError(float_t err)
    {
        if (_state.maxRoomTemperatureErr < err) { // todo: rewrite this because the maximum error will not change downwards
            _state.maxRoomTemperatureErr = err;
        }
    }

    void update();

    EDHealthCheck::ReadyResult ready();

private:
    void updateAutoMode();

private:
    BoilerState _state;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastAutoUpdateTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    float_t _K = 0.0f;
    float_t _kB = 0.0f;

private:
    Driver& _driver;
    EDUtils::StateMgr<State>* _stateMgr;
};
