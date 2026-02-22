#pragma once

#include <ESPAsyncWebServer.h>
#include <discovery.h>
#include <ready.h>
#include <state/state_mgr.h>

#include "config.h"
#include "defines.h"
#include "driver.h"
#include "enums.h"
#include "boiler/boiler_config.h"
#include "state.h"
#include "state/state.h"

class Boiler : public EDHealthCheck::Ready
{
public:
    Boiler(
        Driver& driver,
        EDUtils::StateMgr<State>* stateMgr
    ) : _driver(driver), _stateMgr(stateMgr) {}

    void init(
        EDHA::DiscoveryMgr* discoveryMgr,
        EDHA::Device* device,
        std::string stateTopic,
        std::string commandTopic,
        BoilerConfig config
    );

    void setCentralHeatingMode(CentralHeatingMode mode);
    void updateHotWaterState(bool enabled);
    void setCentralHeatingSetPoint(float_t setPoint);
    void setHotWaterSetPoint(float_t setPoint);

    void setOutdoorTemperature(float_t temperature) { _state.outdoorTemperature = temperature; }
    void updateRoomTemperatureError(uint8_t roomID, float_t err)
    {
        if (roomID < ROOMS_COUNT) {
            _roomTemperatureErr[roomID] = err;
        }
    }
    void updateRoomSetPoint(uint8_t roomID, float_t setPoint)
    {
        if (roomID < ROOMS_COUNT) {
            _roomTemperatureErr[roomID] = setPoint;
        }
    }

    void update();

    EDHealthCheck::ReadyResult ready();

private:
    void updateAutoMode();

    float_t maxTemperatureErr()
    {
        float_t err = _roomTemperatureErr[0];

        for (int i = 1; i < ROOMS_COUNT; i++) {
            if (err < _roomTemperatureErr[i]) {
                err = _roomTemperatureErr[i];
            }
        }

        return err;
    }

    float_t maxSetPoint()
    {
        float_t setPoint = _roomSetPoints[0];

        for (int i = 1; i < ROOMS_COUNT; i++) {
            if (setPoint < _roomSetPoints[i]) {
                setPoint = _roomSetPoints[i];
            }
        }

        return setPoint;
    }

private:
    BoilerState _state;
    BoilerConfig _config;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastAutoUpdateTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    float_t _K = 0.0f;
    float_t _kB = 0.0f;
    float_t _kP = 0.0f;
    float_t _kI = 0.0;

    float_t _roomTemperatureErr[ROOMS_COUNT] = {0};
    float_t _roomSetPoints[ROOMS_COUNT] = {0};
    float_t _I = 0.0f;

private:
    Driver& _driver;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;
};
