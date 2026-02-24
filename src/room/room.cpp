#include <Utils.h>

#include "room.h"

void Room::init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, RoomConfig config)
{
    _config = config;
    _state = _configMgr->getConfig()->roomStates[config.id];
    _state.prevTime = 0; // for correct pid algo work after restart

    const char* chipID = EDUtils::getChipID();

    std::list<EDHA::Mode> climateModes;
    climateModes.push_back(EDHA::MODE_OFF);
    climateModes.push_back(EDHA::MODE_HEAT);
    climateModes.push_back(EDHA::MODE_AUTO);

    discoveryMgr->addClimate(
        device,
        EDUtils::formatString("Climate %s", config.name),
        "climate",
        EDUtils::formatString("%d_room_%s_prometey", config.id, chipID)
    )
        ->setCurrentTemperatureTemplate("{{ value_json.currentTemperature }}")
        ->setCurrentTemperatureTopic(config.mqttStateTopic)
        ->setMinTemp(16)
        ->setMaxTemp(32)
        ->setModeCommandTemplate("{\"mode\": \"{{ value }}\"}")
        ->setModeCommandTopic(config.mqttCommandTopic)
        ->setModeStateTemplate("{{ value_json.mode }}")
        ->setModeStateTopic(config.mqttStateTopic)
        ->setTemperatureCommandTemplate("{\"setPoint\": {{ value }}}")
        ->setTemperatureCommandTopic(config.mqttCommandTopic)
        ->setTemperatureStateTemplate("{{ value_json.setPoint }}")
        ->setTemperatureStateTopic(config.mqttStateTopic)
        ->setModes(climateModes)
        ->setPayloadOff("false")
        ->setPayloadOn("true");

    discoveryMgr->addSensor(
        device,
        EDUtils::formatString("%s valve opening", config.name),
        EDUtils::formatString("%dvalveOpening", config.id),
        EDUtils::formatString("%d_room_valve_opening_%s_prometey", config.id, chipID)
    )
        ->setStateTopic(config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.valveOpening }}")
        ->setUnitOfMeasurement("%");

    _stateMgr->getState().setMode(_state.active ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
    _stateMgr->getState().setValveOpening(100.0f);
    _stateMgr->getState().changeSetPoint(_state.setPoint);
    _boiler->updateRoomSetPoint(_config.id, _state.setPoint);
}

void Room::update()
{
    calculateValvePosition();
    saveState();
}

void Room::calculateValvePosition()
{
    if (!_state.active || _state.currentTemperature == 0.0f) {
        if (_valveOpeningPercent != 100.0f) {
            _valveOpeningPercent = 100.0f;
            for (auto valve : _valves) {
                valve->setOpening(_valveOpeningPercent);
            }

            _stateMgr->getState().setValveOpening(_valveOpeningPercent);
        }

        return;
    }

    if (_lastUpdateTime == 0 || ((_lastUpdateTime + 300000000) < esp_timer_get_time())) { // loop every 5 minutes
        auto now = (float_t)esp_timer_get_time() / 1000000.0f;
        auto dt = now - _state.prevTime;
        _state.prevTime = now;

        auto err = _state.setPoint - _state.currentTemperature;
        auto P = err * _config.kP;
        _state.I = constrain(_state.I+err*dt*_config.kI, 0, 100);
        auto D = ((err - _state.prevErr) / dt) * _config.kD;
        _state.prevErr = err;

        _valveOpeningPercent = constrain(int(P+_state.I+D), 0, 100);
        for (auto valve : _valves) {
            valve->setOpening(_valveOpeningPercent);
        }

        _stateMgr->getState().setValveOpening(_valveOpeningPercent);

        if (_valveOpeningPercent == 100 || _valveOpeningPercent == 0) {
            _boiler->updateRoomTemperatureError(_config.id, err);
        } else {
            _boiler->updateRoomTemperatureError(_config.id, 0);
        }

        _lastUpdateTime = esp_timer_get_time();
    }
}

void Room::saveState()
{
    if ((_lastSaveStateTime + 60000000 + _config.id * 1000000) < esp_timer_get_time()) {
        if (_configMgr->getConfig()->roomStates[_config.id] != _state) {
            _configMgr->getConfig()->roomStates[_config.id] = _state;

            if (!_configMgr->store()) {
                ESP_LOGE("room", "failed to save state");
            }
        }

        _lastSaveStateTime = esp_timer_get_time();
    }
}

void Room::changeActive(bool active)
{
    if (active && !_state.active) {
        _state.prevTime = esp_timer_get_time();
    }

    _state.active = active;
    _stateMgr->getState().setMode(active ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
}