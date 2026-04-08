#include <Json.h>
#include <Utils.h>
#include <esp_log.h>

#include "boiler.h"
#include "log/log.h"

void Boiler::init(
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device,
    std::string stateTopic,
    std::string commandTopic,
    BoilerConfig config
) {
    _config = config;
    _state = *_localStateMgr->getData();

    auto result = _relayMgr->addRelay(RELAY_TYPE_PCF8574, 8); // @todo: load channel and type from config
    if (result.second != ADD_RELAY_NO_ERR) {
        LOGE("boiler", "failed to init pump relay");
        return;
    }

    _pump = result.first;

    const char* chipID = EDUtils::getChipID();

    std::list<EDHA::Mode> climateModes;
    climateModes.push_back(EDHA::MODE_OFF);
    climateModes.push_back(EDHA::MODE_HEAT);
    climateModes.push_back(EDHA::MODE_AUTO);

    auto minCentralHeatingTemperature = _driver.getMinCentralHeatingTemperature();
    auto maxCentralHeatingTemperature = _driver.getMaxCentralHeatingTemperature();

    discoveryMgr->addClimate(
        device,
        "Boiler",
        "boiler",
        EDUtils::formatString("%s_boiler_prometey", chipID)
    )
        ->setCurrentTemperatureTemplate("{{ value_json.centralHeatingCurrentTemperature }}")
        ->setCurrentTemperatureTopic(stateTopic)
        ->setMinTemp(minCentralHeatingTemperature.Valid() ? minCentralHeatingTemperature.Value() : 30)
        ->setMaxTemp(maxCentralHeatingTemperature.Valid() ? maxCentralHeatingTemperature.Value() : 60)
        ->setModeCommandTemplate("{\"centralHeatingMode\": \"{{ value }}\"}")
        ->setModeCommandTopic(commandTopic)
        ->setModeStateTemplate("{{ value_json.centralHeatingMode }}")
        ->setModeStateTopic(stateTopic)
        ->setTemperatureCommandTemplate("{\"centralHeatingSetPoint\": {{ value }}}")
        ->setTemperatureCommandTopic(commandTopic)
        ->setTemperatureStateTemplate("{{ value_json.centralHeatingSetPoint }}")
        ->setTemperatureStateTopic(stateTopic)
        ->setModes(climateModes)
        ->setPayloadOff("false")
        ->setPayloadOn("true")
        ->setActionTopic(commandTopic)
        ->setActionTemplate("{{ value_json.centralHeatingState }}");

    std::list<EDHA::Mode> hotWaterModes;
    hotWaterModes.push_back(EDHA::MODE_OFF);
    hotWaterModes.push_back(EDHA::MODE_GAS);

    auto minHotWaterTemperature = _driver.getMinHotWaterTemperature();
    auto maxHotWaterTemperature = _driver.getMaxHotWaterTemperature();

    discoveryMgr->addWaterHeater(
        device,
        "Hot water",
        "hot_water",
        EDUtils::formatString("%s_hot_water_prometey", chipID)
    )
        ->setModeCommandTemplate("{\"hotWaterMode\": \"{{ value }}\" }")
        ->setModeCommandTopic(commandTopic)
        ->setModeStateTemplate("{{ value_json.hotWaterMode }}")
        ->setModeStateTopic(stateTopic)
        ->setCurrentTemperatureTemplate("{{ value_json.hotWaterCurrentTemperature }}")
        ->setCurrentTemperatureTopic(stateTopic)
        ->setMinTemp(minHotWaterTemperature.Valid() ? minHotWaterTemperature.Value() : 30)
        ->setMaxTemp(maxHotWaterTemperature.Valid() ? maxHotWaterTemperature.Value() : 60)
        ->setTemperatureCommandTemplate("{\"hotWaterSetPoint\": {{ value }} }")
        ->setTemperatureCommandTopic(commandTopic)
        ->setTemperatureStateTemplate("{{ value_json.hotWaterSetPoint }}")
        ->setTemperatureStateTopic(stateTopic)
        ->setModes(hotWaterModes)
        ->setInitial(_state.hotWaterSetPoint)
        ->setPrecision(1.0f);

    discoveryMgr->addSensor(
        device,
        "Modulation",
        "modulation",
        EDUtils::formatString("%s_modulation_prometey", chipID)
    )
        ->setStateTopic(stateTopic)
        ->setValueTemplate("{{ value_json.modulation }}")
        ->setUnitOfMeasurement("%");

    discoveryMgr->addBinarySensor(
        device,
        "Is hot water active",
        "hot_water_sensor",
        EDUtils::formatString("%s_hot_water_sensor_prometey", chipID)
    )
        ->setStateTopic(stateTopic)
        ->setValueTemplate("{{ value_json.isHotWaterActive }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false");

    discoveryMgr->addBinarySensor(
        device,
        "Is flame",
        "flame_sensor",
        EDUtils::formatString("%s_flame_sensor_prometey", chipID)
    )
        ->setDeviceClass(EDHA::deviceClassBinarySensorHeat)
        ->setStateTopic(stateTopic)
        ->setValueTemplate("{{ value_json.isFlameActive }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false");

    discoveryMgr->addBinarySensor(
        device,
        "Is fault",
        "fault_sensor",
        EDUtils::formatString("%s_fault_sensor_prometey", chipID)
    )
        ->setDeviceClass(EDHA::deviceClassBinarySensorProblem)
        ->setStateTopic(stateTopic)
        ->setValueTemplate("{{ value_json.isFault }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false");

    setCentralHeatingMode(_state.mode);
}

void Boiler::setCentralHeatingMode(CentralHeatingMode mode)
{
    _state.mode = mode;
    if (mode == CENTRAL_HEATING_MODE_OFF) {
        _driver.changeCentralHeatingState(false);
    } else if (mode == CENTRAL_HEATING_MODE_HEAT) {
        _driver.changeCentralHeatingState(true);
    }

    switch (mode) {
        case CENTRAL_HEATING_MODE_OFF:
            _mqttStateMgr->getState().setCentralHeatingMode(EDHA::MODE_OFF);
            break;
        case CENTRAL_HEATING_MODE_HEAT:
            _mqttStateMgr->getState().setCentralHeatingMode(EDHA::MODE_HEAT);
            break;
        case CENTRAL_HEATING_MODE_AUTO:
            _mqttStateMgr->getState().setCentralHeatingMode(EDHA::MODE_AUTO);
            _lastAutoUpdateTime = 0;
            _prevTime = esp_timer_get_time();
            break;
    }
}

void Boiler::updateHotWaterState(bool enabled)
{
    _driver.changeHotWaterState(enabled);
}

void Boiler::setCentralHeatingSetPoint(float_t setPoint)
{
    if (_state.mode == CENTRAL_HEATING_MODE_AUTO) { // skip update setpoint in auto mode
        return;
    }

    if (!_driver.setCentralHeatingSetPoint(setPoint)) {
        LOGE("boiler", "failed to update central heating setpoint. value: %f", setPoint);
    }
}

void Boiler::setHotWaterSetPoint(float_t setPoint)
{
    if (!_driver.setHotWaterSetPoint(setPoint)) {
        LOGE("boiler", "failed to update hot water setpoint. value: %f", setPoint);
    }
}

void Boiler::update()
{
    if ((_lastUpdateTime + 1000000) < esp_timer_get_time()) {
        if (!_driver.isBoilerOnline()) {
            LOGE("boiler", "boiler isnt online");
            _lastUpdateTime = esp_timer_get_time();
            _onlineFaultCount++;
            return;
        }

        _onlineFaultCount = 0;

        auto currentCentralHeatingTemperature = _driver.getCurrentCentralHeatingTemperature();
        if (currentCentralHeatingTemperature.Valid()) {
            _mqttStateMgr->getState().setCentralHeatingCurrentTemperature(currentCentralHeatingTemperature.Value());
        }

        auto isHotWaterEnabled = _driver.isHotWaterEnabled();
        if (isHotWaterEnabled.Valid()) {
            _mqttStateMgr->getState().setHotWaterMode(isHotWaterEnabled.Value() ? EDHA::MODE_GAS : EDHA::MODE_OFF);
        }

        auto currentHotWaterTemperature = _driver.getCurrentHotWaterTemperature();
        if (currentHotWaterTemperature.Valid()) {
            _mqttStateMgr->getState().setHotWaterCurrentTemperature(currentHotWaterTemperature.Value());
        }

        auto isHotWaterActive = _driver.isHotWaterActive();
        if (isHotWaterActive.Valid()) {
            _mqttStateMgr->getState().changeHotWaterActive(isHotWaterActive.Value());
        }

        auto isFlameActive = _driver.isFlameActive();
        if (isFlameActive.Valid()) {
            _mqttStateMgr->getState().changeFlameActive(isFlameActive.Value());
        }

        if (isFlameActive.Value() && !isHotWaterActive.Value()) {
            _pump->changeState(true);
            _lastPumpEnableTime = esp_timer_get_time();
        }

        auto errorCode = _driver.getErrorCode();
        if (errorCode.Valid()) {
            _mqttStateMgr->getState().changeFault(errorCode.Value() != 0);

            if (errorCode.Value() != 0) {
                setCentralHeatingMode(CentralHeatingMode::CENTRAL_HEATING_MODE_OFF);
            }
        }

        auto currentModulation = _driver.getCurrentModulation();
        if (currentModulation.Valid()) {
            _mqttStateMgr->getState().setModulation(currentModulation.Value());
        }

        auto centralHeatingSetPoint = _driver.getCentralHeatingSetPoint();
        if (centralHeatingSetPoint.Valid()) {
            _mqttStateMgr->getState().setCentralHeatingSetPoint(centralHeatingSetPoint.Value());
        }

        auto hotWaterSetPoint = _driver.getHotWaterSetPoint();
        if (hotWaterSetPoint.Valid()) {
            _mqttStateMgr->getState().setHotWaterSetPoint(hotWaterSetPoint.Value());
        }

        _lastUpdateTime = esp_timer_get_time();
    }

    updateAutoMode();
    disablePump();
    saveState();
}

EDHealthCheck::ReadyResult Boiler::ready()
{
    bool ready = true;
    std::string message = "";
    if (_mqttStateMgr->getState().isFault()) {
        ready = false;
        message = "boiler is in fault state";
    } else if (_onlineFaultCount >= 20) {
        ready = false;
        message = "can't connect to boiler";
    }

    return EDHealthCheck::ReadyResult(ready, message);
}

void Boiler::updateAutoMode()
{
    if (_state.mode != CENTRAL_HEATING_MODE_AUTO) {
        return;
    }

    if (_lastAutoUpdateTime == 0 || ((_lastAutoUpdateTime + 300000000) < esp_timer_get_time())) { // every 5 min
        auto demand = getRoomEnergyDemand();
        _prevTime = esp_timer_get_time();
        auto k = 1.0f; // todo: move to config
        auto Tu = 26.0f; // todo: get avg room setpoint?
        auto ku = 1.2f; // todo: move to config
        auto a = -0.21f*k - 0.06f;
        auto b = 6.04f*k + 1.98f;
        auto c = -5.06f*k + 18.06f;
        auto x = -0.2f*_state.outdoorTemperature + 5.0f;
        auto Tn = a * pow(x, 2) + b * x + c;
        auto Tk = (Tu - 20) * ku;
        auto setPoint = constrain(Tn + Tk + demand * 10.0f, 30, 80);

        LOGD(
            "boiler",
            "calculate setpoint in auto mode. Tn: %f, Tk: %f, demand: %f, setPoint: %f",
            Tn, Tk, demand, setPoint
        );

        if (setPoint > 30) {
            if (!_driver.setCentralHeatingSetPoint(setPoint)) {
                LOGE("boiler", "failed to update central heating setpoint");
                _lastAutoUpdateTime += 5000000;
                return;
            }

            if (!_driver.changeCentralHeatingState(true)) {
                LOGE("boiler", "failed to enable central heating");
                _lastAutoUpdateTime += 5000000;
                return;
            }
        } else {
            if (!_driver.setCentralHeatingSetPoint(30)) {
                LOGE("boiler", "failed to update central heating setpoint");
                _lastAutoUpdateTime += 5000000;
                return;
            }

            if (!_driver.changeCentralHeatingState(false)) {
                LOGE("boiler", "failed to disable central heating");
                _lastAutoUpdateTime += 5000000;
                return;
            }
        }

        _lastAutoUpdateTime = esp_timer_get_time();
    }
}

void Boiler::saveState()
{
    if ((_lastSaveStateTime + 60000000) < esp_timer_get_time()) {
        if (*_localStateMgr->getData() != _state) {
            _localStateMgr->setData(&_state);
            if (!_localStateMgr->store()) {
                LOGE("boiler", "failed to save boiler state");
            }
        }

        _lastSaveStateTime = esp_timer_get_time();
    }
}

void Boiler::disablePump()
{
    if (_pump->isEnabled() && (_lastPumpEnableTime + 120000000) < esp_timer_get_time()) {
        _pump->changeState(false);
    }
}
