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

    uint8_t getMinCentralHeatingTemperature() const;
    uint8_t getMaxCentralHeatingTemperature() const;
    uint8_t getMinHotWaterTemperature() const;
    uint8_t getMaxHotWaterTemperature() const;
    float_t getCentralHeatingSetPoint() const;
    float_t getCurrentCentralHeatingTemperature() const;
    float_t getCurrentHotWaterTemperature() const;
    float_t getHotWaterSetPoint() const;
    float_t getCurrentPressure() const;
    float_t getCurrentHotWaterConsumption() const;
    uint16_t getCurrentModulation() const;
    bool isFlameActive() const { return _isFlameActive; }
    bool isCentralHeatingEnabled() const { return _isCentralHeatingEnabled; };
    bool isHotWaterEnabled() const { return _isHotWaterEnabled; }
    bool isCentralHeatingActive() const { return _isCentralHeatingActive; }
    bool isHotWaterActive() const { return _isHotWaterActive; }
    uint8_t getErrorCode() const;

    bool setCentralHeatingSetPoint(float_t temperature);
    bool setHotWaterSetPoint(float_t temperature);
    bool changeCentralHeatingState(bool enabled);
    bool changeHotWaterState(bool enabled);

    void update();

private:
    bool holdingRegistersWrite(uint16_t reg, uint16_t val);

private:
    uint64_t _lastUpdateTime = 0;
    bool _isFlameActive = false;
    bool _isCentralHeatingEnabled = false;
    bool _isHotWaterEnabled = false;
    bool _isCentralHeatingActive = false;
    bool _isHotWaterActive = false;
    bool _isBoilerOnline = false;

private:
     ModbusClient& _client;
     uint8_t _address;
};
