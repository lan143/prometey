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

struct RoomStatus {
    bool active = false;
    bool ready = false;
    float_t err = 0.0f;      // room setPoint - currentTemperature
    float_t opening = 0.0f;  // logical PID valve opening, 0-100

    RoomStatus() {}
    RoomStatus(bool isActive, bool isReady, float_t error, float_t valveOpening)
        : active(isActive), ready(isReady), err(error), opening(valveOpening) {}
};

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
            _roomsStatus[i] = EDUtils::Nullable<RoomStatus>(false, RoomStatus());
        }
    }

    void init(
        EDHA::DiscoveryMgr* discoveryMgr,
        EDHA::Device* device,
        std::string stateTopic,
        std::string commandTopic,
        BoilerConfig config
    );

    bool isCentralHeatingEnabled() const
    {
        auto isCentralHeatingEnabled = _driver.isCentralHeatingEnabled();

        return isCentralHeatingEnabled.Valid() ? isCentralHeatingEnabled.Value() : false;
    }

    void setCentralHeatingMode(CentralHeatingMode mode);
    void updateHotWaterState(bool enabled);
    void setCentralHeatingSetPoint(float_t setPoint);
    void setHotWaterSetPoint(float_t setPoint);

    void setOutdoorTemperature(float_t temperature) { _state.outdoorTemperature = temperature; }
    void updateRoomStatus(uint8_t roomID, const RoomStatus& status)
    {
        if (roomID < ROOMS_COUNT) {
            _roomsStatus[roomID].setValidValue(status);
        }
    }
    
    void update();

    EDHealthCheck::ReadyResult ready();

private:
    void updateAutoMode();
    void saveState();
    void disablePump();

private:
    BoilerState _state;
    BoilerConfig _config;
    uint64_t _lastUpdateTime = 0;
    uint64_t _lastSaveStateTime = 0;
    uint64_t _lastAutoUpdateTime = 0;
    uint64_t _lastPumpEnableTime = 0;
    uint64_t _onlineFaultCount = 0;

private:
    uint64_t _prevTime = 0;
    bool _interlockOn = true;
    uint8_t _noDemandTicks = 0;
    uint64_t _lastChDisableTime = 0;

    EDUtils::Nullable<RoomStatus> _roomsStatus[ROOMS_COUNT];

private:
    Driver& _driver;
    RelayMgr* _relayMgr = nullptr;
    Relay* _pump = nullptr;
    EDConfig::DataMgr<BoilerState>* _localStateMgr = nullptr;
    EDUtils::StateMgr<State>* _mqttStateMgr = nullptr;
};
