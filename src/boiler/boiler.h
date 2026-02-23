#pragma once

#include <ConfigMgr.h>
#include <ESPAsyncWebServer.h>
#include <discovery.h>
#include <ready.h>
#include <state/state_mgr.h>
#include <nullable.h>

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
        EDConfig::ConfigMgr<Config>* configMgr,
        EDUtils::StateMgr<State>* stateMgr
    ) : _driver(driver), _configMgr(configMgr), _stateMgr(stateMgr) {
        for (int i = 0; i < ROOMS_COUNT; i++) {
            _roomTemperatureErr[i] = EDUtils::Nullable<float_t>(false, 0.0f);
            _roomSetPoints[i] = EDUtils::Nullable<float_t>(false, 0.0f);
        }
    }

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
            _roomTemperatureErr[roomID].setValidValue(err);
        }
    }
    void updateRoomSetPoint(uint8_t roomID, float_t setPoint)
    {
        if (roomID < ROOMS_COUNT) {
            _roomSetPoints[roomID].setValidValue(setPoint);
        }
    }

    void update();

    EDHealthCheck::ReadyResult ready();

private:
    void updateAutoMode();
    void saveState();

    float_t maxTemperatureErr()
    {
        float_t err = 0.0f;
        bool init = false;

        for (int i = 0; i < ROOMS_COUNT; i++) {
            if (!init && _roomTemperatureErr[i].Valid()) {
                err = _roomTemperatureErr[i].Value();
                init = true;
            } else if (init && _roomTemperatureErr[i].Valid() && err < _roomTemperatureErr[i].Value()) {
                err = _roomTemperatureErr[i].Value();
            }
        }

        return err;
    }

    float_t maxSetPoint()
    {
        float_t setPoint = 0.0f;
        bool init = false;

        for (int i = 0; i < ROOMS_COUNT; i++) {
            if (!init && _roomSetPoints[i].Valid()) {
                setPoint = _roomSetPoints[i].Value();
                init = true;
            } else if (init && _roomSetPoints[i].Valid() && setPoint < _roomSetPoints[i].Value()) {
                setPoint = _roomSetPoints[i].Value();
            }
        }

        return setPoint;
    }

private:
    BoilerState _state;
    BoilerConfig _config;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastSaveStateTime = 0;
    uint64_t _lastAutoUpdateTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    float_t _K = 0.0f;
    float_t _kB = 0.0f;
    float_t _kP = 0.0f;
    float_t _kI = 0.0;

    EDUtils::Nullable<float_t> _roomTemperatureErr[ROOMS_COUNT];
    EDUtils::Nullable<float_t> _roomSetPoints[ROOMS_COUNT];

private:
    Driver& _driver;
    EDConfig::ConfigMgr<Config>* _configMgr = nullptr;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;
};
