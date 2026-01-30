#include "valve.h"

void Valve::init(ValveConfig config)
{
    _config = config;
    _closePercent = 0;

    _closeTime = _config.windowTime * _closePercent / 100;
    if (_closeTime > 0) {
        _nextUpdateTime = millis() + _closeTime;
        _driver->changeState(true);
    } else {
        _nextUpdateTime = millis() + _config.windowTime;
    }
}

void Valve::update()
{
    if (_nextUpdateTime < millis()) {
        if (_driver->isClosing()) {
            _driver->changeState(false);
            _nextUpdateTime = _config.windowTime - _closeTime;
            _closeTime = 0;
        } else {
            _closeTime = _config.windowTime * _closePercent / 100;
            if (_closeTime > 0) {
                _nextUpdateTime = millis() + _closeTime;
                _driver->changeState(true);
            } else {
                _nextUpdateTime = millis() + _config.windowTime;
            }
        }
    }
}
