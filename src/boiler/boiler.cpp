#include <Json.h>
#include <Utils.h>
#include <esp_log.h>

#include "boiler.h"

void Boiler::init(
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device,
    std::string stateTopic,
    std::string commandTopic,
    BoilerConfig config
) {
    _config = config;

    const char* chipID = EDUtils::getChipID();

    std::list<EDHA::Mode> climateModes;
    climateModes.push_back(EDHA::MODE_OFF);
    climateModes.push_back(EDHA::MODE_HEAT);
    climateModes.push_back(EDHA::MODE_AUTO);

    auto minCentralHeatingTemperature = _driver.getMinCentralHeatingTemperature();
    auto maxCentralHeatingTemperature = _driver.getMaxCentralHeatingTemperature();

    discoveryMgr->addClimate(
        device,
        "boiler",
        "climate",
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

    setCentralHeatingMode(CENTRAL_HEATING_MODE_AUTO); // tmp
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
            _stateMgr->getState().setCentralHeatingMode(EDHA::MODE_OFF);
            break;
        case CENTRAL_HEATING_MODE_HEAT:
            _stateMgr->getState().setCentralHeatingMode(EDHA::MODE_HEAT);
            break;
        case CENTRAL_HEATING_MODE_AUTO:
            _stateMgr->getState().setCentralHeatingMode(EDHA::MODE_AUTO);
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
        ESP_LOGE("boiler", "failed to update central heating setpoint. value: %f", setPoint);
    }
}

void Boiler::setHotWaterSetPoint(float_t setPoint)
{
    if (!_driver.setHotWaterSetPoint(setPoint)) {
        ESP_LOGE("boiler", "failed to update hot water setpoint. value: %f", setPoint);
    }
}

void Boiler::update()
{
    if ((_lastUpdateTime + 1000) < millis()) {
        if (!_driver.isBoilerOnline()) {
            ESP_LOGE("boiler", "boiler isnt online");
            _lastUpdateTime = millis();
            _onlineFaultCount++;
            return;
        }

        _onlineFaultCount = 0;
        /*auto isCentralHeatingEnabled = _driver.isCentralHeatingEnabled();
        if (isCentralHeatingEnabled.Valid()) {
            _stateMgr->getState().setCentralHeatingMode(isCentralHeatingEnabled.Value() ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
        }*/

        auto currentCentralHeatingTemperature = _driver.getCurrentCentralHeatingTemperature();
        if (currentCentralHeatingTemperature.Valid()) {
            _stateMgr->getState().setCentralHeatingCurrentTemperature(currentCentralHeatingTemperature.Value());
        }

        auto isHotWaterEnabled = _driver.isHotWaterEnabled();
        if (isHotWaterEnabled.Valid()) {
            _stateMgr->getState().setHotWaterMode(isHotWaterEnabled.Value() ? EDHA::MODE_GAS : EDHA::MODE_OFF);
        }

        auto currentHotWaterTemperature = _driver.getCurrentHotWaterTemperature();
        if (currentHotWaterTemperature.Valid()) {
            _stateMgr->getState().setHotWaterCurrentTemperature(currentHotWaterTemperature.Value());
        }

        auto isHotWaterActive = _driver.isHotWaterActive();
        if (isHotWaterActive.Valid()) {
            _stateMgr->getState().changeHotWaterActive(isHotWaterActive.Value());
        }

        auto isFlameActive = _driver.isFlameActive();
        if (isFlameActive.Valid()) {
            _stateMgr->getState().changeFlameActive(isFlameActive.Value());
        }

        auto errorCode = _driver.getErrorCode();
        if (errorCode.Valid()) {
            _stateMgr->getState().changeFault(errorCode.Value() != 0);
        }

        auto currentModulation = _driver.getCurrentModulation();
        if (currentModulation.Valid()) {
            _stateMgr->getState().setModulation(currentModulation.Value());
        }

        auto centralHeatingSetPoint = _driver.getCentralHeatingSetPoint();
        if (centralHeatingSetPoint.Valid()) {
            _stateMgr->getState().setCentralHeatingSetPoint(centralHeatingSetPoint.Value());
        }

        auto hotWaterSetPoint = _driver.getHotWaterSetPoint();
        if (hotWaterSetPoint.Valid()) {
            _stateMgr->getState().setHotWaterSetPoint(hotWaterSetPoint.Value());
        }

        _lastUpdateTime = millis();
    }

    updateAutoMode();
}

EDHealthCheck::ReadyResult Boiler::ready()
{
    bool ready = true;
    std::string message = "";
    if (_stateMgr->getState().isFault()) {
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

    if (_lastAutoUpdateTime == 0 || (_lastAutoUpdateTime + 1200000) < millis()) {
        auto dt = ((float_t)millis() - (float_t)_lastAutoUpdateTime) / 1000.0f;
        auto err = maxTemperatureErr();
        auto maxSP = maxSetPoint();
        if (maxSP == 0.0f) {
            maxSP = 25;
        }

        auto setPoint = _config.K * (maxSP - _state.outdoorTemperature) + _config.B;
        setPoint += _config.P * err;
        _I = _I+err*dt*_config.I;
        setPoint = constrain(setPoint + _I, 30, 70);

        if (setPoint > 30) {
            if (!_driver.setCentralHeatingSetPoint(setPoint)) {
                ESP_LOGE("boiler", "failed to update central heating setpoint");
                _lastAutoUpdateTime += 5000;
                return;
            }

            if (!_driver.changeCentralHeatingState(true)) {
                ESP_LOGE("boiler", "failed to enable central heating");
                _lastAutoUpdateTime += 5000;
                return;
            }
        } else {
            if (!_driver.setCentralHeatingSetPoint(30)) {
                ESP_LOGE("boiler", "failed to update central heating setpoint");
                _lastAutoUpdateTime += 5000;
                return;
            }

            if (!_driver.changeCentralHeatingState(false)) {
                ESP_LOGE("boiler", "failed to disable central heating");
                _lastAutoUpdateTime += 5000;
                return;
            }
        }

        _lastAutoUpdateTime = millis();
    }
}
