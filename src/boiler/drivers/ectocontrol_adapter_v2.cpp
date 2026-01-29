#include <esp_log.h>

#include "ectocontrol_adapter_v2.h"

void EctoControlAdapterV2::init(uint8_t address)
{
    _address = address;

    holdingRegistersWrite(0x0030, 0); // adapter is connected to boiler directly
}

EDUtils::Nullable<uint8_t> EctoControlAdapterV2::getMinCentralHeatingTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0014);
    if (result == -1) {
        return EDUtils::Nullable<uint8_t>(false, 0);
    }

    return EDUtils::Nullable<uint8_t>(true, result);
}

EDUtils::Nullable<uint8_t> EctoControlAdapterV2::getMaxCentralHeatingTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0015);
    if (result == -1) {
        return EDUtils::Nullable<uint8_t>(false, 0);
    }

    return EDUtils::Nullable<uint8_t>(true, result);
}

EDUtils::Nullable<uint8_t> EctoControlAdapterV2::getMinHotWaterTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0016);
    if (result == -1) {
        return EDUtils::Nullable<uint8_t>(false, 0);
    }

    return EDUtils::Nullable<uint8_t>(true, result);
}

EDUtils::Nullable<uint8_t> EctoControlAdapterV2::getMaxHotWaterTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0017);
    if (result == -1) {
        return EDUtils::Nullable<uint8_t>(false, 0);
    }

    return EDUtils::Nullable<uint8_t>(true, result);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getCurrentCentralHeatingTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0018);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, (float_t)result / 10.0f);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getCurrentHotWaterTemperature() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0019);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, (float_t)result / 10.0f);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getHotWaterSetPoint() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0037);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, result);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getCentralHeatingSetPoint() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0031);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, (float_t)result / 10.0f);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getCurrentPressure() const
{
    auto result = _client.holdingRegisterRead(_address, 0x001A);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, (float_t)result / 10.0f);
}

EDUtils::Nullable<float_t> EctoControlAdapterV2::getCurrentHotWaterConsumption() const
{
    auto result = _client.holdingRegisterRead(_address, 0x001B);
    if (result == -1) {
        return EDUtils::Nullable<float_t>(false, 0);
    }

    return EDUtils::Nullable<float_t>(true, (float_t)result / 10.0f);
}

EDUtils::Nullable<uint16_t> EctoControlAdapterV2::getCurrentModulation() const
{
    auto result = _client.holdingRegisterRead(_address, 0x001C);
    if (result == -1) {
        return EDUtils::Nullable<uint16_t>(false, 0);
    }

    return EDUtils::Nullable<uint16_t>(true, result);
}

EDUtils::Nullable<uint8_t> EctoControlAdapterV2::getErrorCode() const
{
    auto result = _client.holdingRegisterRead(_address, 0x0023);
    if (result == -1) {
        return EDUtils::Nullable<uint8_t>(false, 0);
    }

    return EDUtils::Nullable<uint8_t>(true, result);
}

bool EctoControlAdapterV2::setCentralHeatingSetPoint(float_t temperature)
{
    return holdingRegistersWrite(0x0031, uint16_t(temperature * 10));

}

bool EctoControlAdapterV2::setHotWaterSetPoint(float_t temperature)
{
    return holdingRegistersWrite(0x0037, temperature);
}

bool EctoControlAdapterV2::changeCentralHeatingState(bool enabled)
{
    uint16_t val = 0;
    if (enabled) {
        val |= 0x1;
    }

    if (_isHotWaterEnabled.Valid() && _isHotWaterEnabled.Value()) {
        val |= 0x2;
    }

    return holdingRegistersWrite(0x0039, val);
}

bool EctoControlAdapterV2::changeHotWaterState(bool enabled)
{
    uint16_t val = 0;
    if (_isCentralHeatingEnabled.Valid() && _isCentralHeatingEnabled.Value()) {
        val |= 0x1;
    }

    if (enabled) {
        val |= 0x2;
    }

    return holdingRegistersWrite(0x0039, val);
}

void EctoControlAdapterV2::update()
{
    if ((_lastUpdateTime + 500) < millis()) {
        auto val = _client.holdingRegisterRead(_address, 0x0010);
        if (val == -1) {
            _isBoilerOnline = false;
            _lastUpdateTime = millis();
            return;
        }

        _isBoilerOnline = val & 0x800;
        if (!_isBoilerOnline) {
            _lastUpdateTime = millis();
            return;
        }
        
        val = _client.holdingRegisterRead(_address, 0x001D);
        if (val == -1) {
            _isBoilerOnline = false;
            _lastUpdateTime = millis();
            return;
        }

        _isFlameActive.setValidValue(val & 0x1);
        _isCentralHeatingActive.setValidValue(val & 0x2);
        _isHotWaterActive.setValidValue(val & 0x4);

        val = _client.holdingRegisterRead(_address, 0x0039);
        if (val == -1) {
            _isBoilerOnline = false;
            _lastUpdateTime = millis();
            return;
        }

        _isCentralHeatingEnabled.setValidValue(val & 0x1);
        _isHotWaterEnabled.setValidValue(val & 0x2);

        _isBoilerOnline = true;
        _lastUpdateTime = millis();
    }
}

bool EctoControlAdapterV2::holdingRegistersWrite(uint16_t reg, uint16_t val)
{
     if (!_client.beginTransmission(_address, HOLDING_REGISTERS, reg, 1)) {
        return false;
    }

    if (!_client.write(val)) {
        return false;
    }

    return _client.endTransmission();
}
