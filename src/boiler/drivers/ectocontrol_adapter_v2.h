#pragma once

#include <Arduino.h>
#include <iarduino_Modbus.h>

#include "boiler/driver.h"

class EctoControlAdapterV2 : public Driver
{
public:
    EctoControlAdapterV2(ModbusClient& client) : _client(client) {}
    void init(uint8_t address);

    bool isBoilerOnline() const { return _isBoilerOnline; }

    EDUtils::Nullable<uint8_t> getMinCentralHeatingTemperature() const;
    EDUtils::Nullable<uint8_t> getMaxCentralHeatingTemperature() const;
    EDUtils::Nullable<uint8_t> getMinHotWaterTemperature() const;
    EDUtils::Nullable<uint8_t> getMaxHotWaterTemperature() const;
    EDUtils::Nullable<float_t> getCentralHeatingSetPoint() const;
    EDUtils::Nullable<float_t> getCurrentCentralHeatingTemperature() const;
    EDUtils::Nullable<float_t> getCurrentHotWaterTemperature() const;
    EDUtils::Nullable<float_t> getHotWaterSetPoint() const;
    EDUtils::Nullable<float_t> getCurrentPressure() const;
    EDUtils::Nullable<float_t> getCurrentHotWaterConsumption() const;
    EDUtils::Nullable<uint16_t> getCurrentModulation() const;
    EDUtils::Nullable<bool> isFlameActive() const { return _isFlameActive; }
    EDUtils::Nullable<bool> isCentralHeatingEnabled() const { return _isCentralHeatingEnabled; };
    EDUtils::Nullable<bool> isHotWaterEnabled() const { return _isHotWaterEnabled; }
    EDUtils::Nullable<bool> isCentralHeatingActive() const { return _isCentralHeatingActive; }
    EDUtils::Nullable<bool> isHotWaterActive() const { return _isHotWaterActive; }
    EDUtils::Nullable<uint8_t> getErrorCode() const;

    bool setCentralHeatingSetPoint(float_t temperature);
    bool setHotWaterSetPoint(float_t temperature);
    bool changeCentralHeatingState(bool enabled);
    bool changeHotWaterState(bool enabled);

    void update();

private:
    bool holdingRegistersWrite(uint16_t reg, uint16_t val);

private:
    uint64_t _lastUpdateTime = 0;
    bool _isBoilerOnline = false;

    EDUtils::Nullable<bool> _isFlameActive = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isCentralHeatingEnabled = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isHotWaterEnabled = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isCentralHeatingActive = EDUtils::Nullable<bool>(false, false);
    EDUtils::Nullable<bool> _isHotWaterActive = EDUtils::Nullable<bool>(false, false);

private:
     ModbusClient& _client;
     uint8_t _address;
};
