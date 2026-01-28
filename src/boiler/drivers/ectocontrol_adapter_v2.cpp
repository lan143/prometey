#include <esp_log.h>

#include "ectocontrol_adapter_v2.h"

void EctoControlAdapterV2::init(uint8_t address)
{
    _address = address;

    holdingRegistersWrite(0x0030, 0); // adapter is connected to boiler directly
}

uint8_t EctoControlAdapterV2::getMinCentralHeatingTemperature() const
{
    return _client.holdingRegisterRead(_address, 0x0014);
}

uint8_t EctoControlAdapterV2::getMaxCentralHeatingTemperature() const
{
    return _client.holdingRegisterRead(_address, 0x0015);
}

uint8_t EctoControlAdapterV2::getMinHotWaterTemperature() const
{
    return _client.holdingRegisterRead(_address, 0x0016);
}

uint8_t EctoControlAdapterV2::getMaxHotWaterTemperature() const
{
    return _client.holdingRegisterRead(_address, 0x0017);
}

float_t EctoControlAdapterV2::getCurrentCentralHeatingTemperature() const
{
    float_t val = (float_t)_client.holdingRegisterRead(_address, 0x0018);

    return val / 10;
}

float_t EctoControlAdapterV2::getCurrentHotWaterTemperature() const
{
    float_t val = (float_t)_client.holdingRegisterRead(_address, 0x0019);

    return val / 10;
}

float_t EctoControlAdapterV2::getHotWaterSetPoint() const
{
    return _client.holdingRegisterRead(_address, 0x0037);
}

float_t EctoControlAdapterV2::getCentralHeatingSetPoint() const
{
    auto val = _client.holdingRegisterRead(_address, 0x0031);
    if (val == -1) {
        return 1;
    }

    return (float_t)val / 10.0f;
}

float_t EctoControlAdapterV2::getCurrentPressure() const
{
   float_t val = (float_t)_client.holdingRegisterRead(_address, 0x001A);

    return val / 10;
}

float_t EctoControlAdapterV2::getCurrentHotWaterConsumption() const
{
   float_t val = (float_t)_client.holdingRegisterRead(_address, 0x001B);

    return val / 10;
}

uint16_t EctoControlAdapterV2::getCurrentModulation() const
{
    return _client.holdingRegisterRead(_address, 0x001C);
}

uint8_t EctoControlAdapterV2::getErrorCode() const
{
    return _client.holdingRegisterRead(_address, 0x0023);
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

    if (_isHotWaterEnabled) {
        val |= 0x2;
    }

    return holdingRegistersWrite(0x0039, val);
}

bool EctoControlAdapterV2::changeHotWaterState(bool enabled)
{
    uint16_t val = 0;
    if (_isCentralHeatingEnabled) {
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

        _isFlameActive = val & 0x1;
        _isCentralHeatingActive = val & 0x2;
        _isHotWaterActive = val & 0x4;

        val = _client.holdingRegisterRead(_address, 0x0039);
        if (val == -1) {
            _isBoilerOnline = false;
            _lastUpdateTime = millis();
            return;
        }

        _isCentralHeatingEnabled = val & 0x1;
        _isHotWaterEnabled = val & 0x2;

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
