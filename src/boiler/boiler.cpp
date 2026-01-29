#include <Utils.h>
#include <esp_log.h>

#include "boiler.h"

void Boiler::init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, std::string stateTopic, std::string commandTopic)
{
    const char* chipID = EDUtils::getChipID();

    std::list<EDHA::Mode> climateModes;
    climateModes.push_back(EDHA::MODE_OFF);
    climateModes.push_back(EDHA::MODE_HEAT);

    auto minCentralHeatingTemperature = _driver.getMinCentralHeatingTemperature();
    auto maxCentralHeatingTemperature = _driver.getMaxCentralHeatingTemperature();

    discoveryMgr->addClimate(
        device,
        "Climate",
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
}

void Boiler::updateCentralHeatingState(bool enabled)
{
    _driver.changeCentralHeatingState(enabled);
}

void Boiler::updateHotWaterState(bool enabled)
{
    _driver.changeHotWaterState(enabled);
}

void Boiler::setCentralHeatingSetPoint(float_t setPoint)
{
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
        auto isCentralHeatingEnabled = _driver.isCentralHeatingEnabled();
        if (isCentralHeatingEnabled.Valid()) {
            _stateMgr->getState().setCentralHeatingMode(isCentralHeatingEnabled.Value() ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
        }

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
