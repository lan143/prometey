#pragma once

#include <data_mgr.h>
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
#include "relay/relay_mgr.h"
#include "state.h"
#include "state/state.h"

class Boiler : public EDHealthCheck::Ready
{
public:
    Boiler(
        Driver& driver,
        RelayMgr* relayMgr,
        EDConfig::DataMgr<BoilerState>* localStateMgr,
        EDUtils::StateMgr<State>* mqttStateMgr
    ) : _driver(driver), _relayMgr(relayMgr), _localStateMgr(localStateMgr), _mqttStateMgr(mqttStateMgr) {
        for (int i = 0; i < ROOMS_COUNT; i++) {
            _roomsEnergyDemand[i] = EDUtils::Nullable<float_t>(false, 0.0f);
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
    void updateRoomEnergyDemand(uint8_t roomID, float_t demand)
    {
        if (roomID < ROOMS_COUNT) {
            _roomsEnergyDemand[roomID].setValidValue(demand);
        }
    }
    
    void update();

    EDHealthCheck::ReadyResult ready();

private:
    void updateAutoMode();
    void saveState();
    void disablePump();

    float_t getRoomEnergyDemand()
    {
        float_t val = 0.0f;
        uint8_t count = 0;

        for (int i = 0; i < ROOMS_COUNT; i++) {
            if (_roomsEnergyDemand[i].Valid() && _roomsEnergyDemand[i].Value() > 0.0f) {
                val += _roomsEnergyDemand[i].Value();
                count++;
            }
        }

        if (count == 0) {
            return 0.0f;
        }

        return val / count;
    }

private:
    BoilerState _state;
    BoilerConfig _config;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastSaveStateTime = 0;
    uint64_t _lastAutoUpdateTime = 0;
    uint64_t _lastPumpEnableTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    float_t _K = 0.0f;
    float_t _kB = 0.0f;
    float_t _kP = 0.0f;
    float_t _kI = 0.0;

    EDUtils::Nullable<float_t> _roomsEnergyDemand[ROOMS_COUNT];
    uint64_t _prevTime = 0;

private:
    Driver& _driver;
    RelayMgr* _relayMgr = nullptr;
    Relay* _pump = nullptr;
    EDConfig::DataMgr<BoilerState>* _localStateMgr = nullptr;
    EDUtils::StateMgr<State>* _mqttStateMgr = nullptr;
};
