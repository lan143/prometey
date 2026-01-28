#pragma once

#include <Arduino.h>

class Driver
{
public:
    virtual bool isBoilerOnline() const = 0;

    virtual uint8_t getMinCentralHeatingTemperature() const = 0;
    virtual uint8_t getMaxCentralHeatingTemperature() const = 0;
    virtual uint8_t getMinHotWaterTemperature() const = 0;
    virtual uint8_t getMaxHotWaterTemperature() const = 0;
    virtual float_t getCentralHeatingSetPoint() const = 0;
    virtual float_t getCurrentCentralHeatingTemperature() const = 0;
    virtual float_t getCurrentHotWaterTemperature() const = 0;
    virtual float_t getHotWaterSetPoint() const = 0;
    virtual float_t getCurrentPressure() const = 0;
    virtual float_t getCurrentHotWaterConsumption() const = 0;
    virtual uint16_t getCurrentModulation() const = 0;
    virtual bool isFlameActive() const = 0;
    virtual bool isCentralHeatingEnabled() const = 0;
    virtual bool isHotWaterEnabled() const = 0;
    virtual bool isCentralHeatingActive() const = 0;
    virtual bool isHotWaterActive() const = 0;
    virtual uint8_t getErrorCode() const = 0;

    virtual bool setCentralHeatingSetPoint(float_t temperature) = 0;
    virtual bool setHotWaterSetPoint(float_t temperature) = 0;
    virtual bool changeCentralHeatingState(bool enabled) = 0;
    virtual bool changeHotWaterState(bool enabled) = 0;

    virtual void update() = 0;
};