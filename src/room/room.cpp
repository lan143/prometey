#include <Utils.h>

#include "room.h"

void Room::init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, RoomConfig config)
{
    _config = config;
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
        EDUtils::formatString("%svalveOpening", config.name),
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
    if (!_state.active || _state.currentTemperature == 0.0f) {
        return;
    }

    if (_lastUpdateTime == 0 || (_lastUpdateTime + 1800000) < millis()) { // loop every 30 minutes
        auto now = (float_t)millis() / 1000.0f;
        auto dt = now - _state.prevTime;
        _state.prevTime = now;

        auto err = _state.setPoint - _state.currentTemperature;
        auto P = err * _config.kP;
        _state.I = constrain(_state.I+err*dt*_config.kI, 0, 100);
        auto D = ((err - _state.prevErr) / dt) * _config.kD;
        _state.prevErr = err;

        auto valvePercent = constrain(int(P+_state.I+D), 0, 100);
        for (auto valve : _valves) {
            valve->setOpening(valvePercent);
        }

        _stateMgr->getState().setValveOpening(valvePercent);
        _boiler->updateRoomTemperatureError(_config.id, err);

        _lastUpdateTime = millis();
    }
}
