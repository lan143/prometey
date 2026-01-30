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
        EDUtils::formatString("%s_room_%d_prometey", config.id, chipID)
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
}

void Room::update()
{
    if (!_state.active) {
        return;
    }

    if ((_lastUpdateTime + 1800000) < millis()) { // loop every 30 minutes
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

        _boiler->updateRoomTemperatureError(err);

        _lastUpdateTime = millis();
    }
}
