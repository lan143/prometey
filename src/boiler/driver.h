#pragma once

#include <Arduino.h>
#include <nullable.h>

class Driver
{
public:
    virtual bool isBoilerOnline() const = 0;

    virtual EDUtils::Nullable<uint8_t> getMinCentralHeatingTemperature() const = 0;
    virtual EDUtils::Nullable<uint8_t> getMaxCentralHeatingTemperature() const = 0;
    virtual EDUtils::Nullable<uint8_t> getMinHotWaterTemperature() const = 0;
    virtual EDUtils::Nullable<uint8_t> getMaxHotWaterTemperature() const = 0;
    virtual EDUtils::Nullable<float_t> getCentralHeatingSetPoint() const = 0;
    virtual EDUtils::Nullable<float_t> getCurrentCentralHeatingTemperature() const = 0;
    virtual EDUtils::Nullable<float_t> getCurrentHotWaterTemperature() const = 0;
    virtual EDUtils::Nullable<float_t> getHotWaterSetPoint() const = 0;
    virtual EDUtils::Nullable<float_t> getCurrentPressure() const = 0;
    virtual EDUtils::Nullable<float_t> getCurrentHotWaterConsumption() const = 0;
    virtual EDUtils::Nullable<uint16_t> getCurrentModulation() const = 0;
    virtual EDUtils::Nullable<bool> isFlameActive() const = 0;
    virtual EDUtils::Nullable<bool> isCentralHeatingEnabled() const = 0;
    virtual EDUtils::Nullable<bool> isHotWaterEnabled() const = 0;
    virtual EDUtils::Nullable<bool> isCentralHeatingActive() const = 0;
    virtual EDUtils::Nullable<bool> isHotWaterActive() const = 0;
    virtual EDUtils::Nullable<uint8_t> getErrorCode() const = 0;

    virtual bool setCentralHeatingSetPoint(float_t temperature) = 0;
    virtual bool setHotWaterSetPoint(float_t temperature) = 0;
    virtual bool changeCentralHeatingState(bool enabled) = 0;
    virtual bool changeHotWaterState(bool enabled) = 0;

    virtual void update() = 0;
};