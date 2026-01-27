#include <Utils.h>

#include "boiler.h"

void Boiler::init(EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, std::string stateTopic, std::string commandTopic)
{
    const char* chipID = EDUtils::getChipID();

    std::list<EDHA::Mode> climateModes;
    climateModes.push_back(EDHA::MODE_OFF);
    climateModes.push_back(EDHA::MODE_HEAT);

    discoveryMgr->addClimate(
        device,
        "Climate",
        "climate",
        EDUtils::formatString("%s_boiler_prometey", chipID)
    )
        ->setCurrentTemperatureTemplate("{{ value_json.centralHeatingCurrentTemperature }}")
        ->setCurrentTemperatureTopic(stateTopic)
        ->setMinTemp(_driver.getMinCentralHeatingTemperature())
        ->setMaxTemp(_driver.getMaxCentralHeatingTemperature())
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
        ->setMinTemp(_driver.getMinHotWaterTemperature())
        ->setMaxTemp(_driver.getMaxHotWaterTemperature())
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
        return;
    }

    _state.centralHeatingSetPoint = setPoint;
    _stateMgr->getState().setCentralHeatingSetPoint(_state.centralHeatingSetPoint);
}

void Boiler::setHotWaterSetPoint(float_t setPoint)
{
    if (!_driver.setHotWaterSetPoint(setPoint)) {
        return;
    }

    _state.hotWaterSetPoint = setPoint;
    _stateMgr->getState().setHotWaterSetPoint(_state.hotWaterSetPoint);
}

void Boiler::update()
{
    if ((_lastUpdateTime + 1000) < millis()) {
        if (!_driver.isBoilerOnline()) {
            _lastUpdateTime = millis();
            return;
        }

        auto state = _stateMgr->getState();
        state.setCentralHeatingMode(_driver.isCentralHeatingEnabled() ? EDHA::MODE_HEAT : EDHA::MODE_OFF);
        state.setCentralHeatingCurrentTemperature(_driver.getCurrentCentralHeatingTemperature());
        state.setHotWaterMode(_driver.isHotWaterEnabled() ? EDHA::MODE_GAS : EDHA::MODE_OFF);
        state.setHotWaterCurrentTemperature(_driver.getCurrentHotWaterTemperature());
        state.changeHotWaterActive(_driver.isHotWaterEnabled());
        state.changeFlameActive(_driver.isFlameActive());
        state.changeFault(_driver.getErrorCode() != 0);
        state.setModulation(_driver.getCurrentModulation());
        

        _lastUpdateTime = millis();
    }
}
