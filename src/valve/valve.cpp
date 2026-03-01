#include "valve.h"

void Valve::init(ValveConfig config)
{
    _config = config;
    _config.windowTime = 20000000; // tmp
    _closePercent = 0;

    _closeTime = _config.windowTime * _closePercent / 100;
    if (_closeTime > 0) {
        _nextUpdateTime = esp_timer_get_time() + _closeTime;
        _relay->changeState(true);
    } else {
        _nextUpdateTime = esp_timer_get_time() + _config.windowTime;
    }
}

void Valve::update()
{
    if (_nextUpdateTime < esp_timer_get_time()) {
        if (_relay->isEnabled()) {
            _relay->changeState(false);
            _nextUpdateTime = esp_timer_get_time() + (_config.windowTime - _closeTime);
            _closeTime = 0;
        } else {
            _closeTime = _config.windowTime * _closePercent / 100;
            if (_closeTime > 0) {
                _nextUpdateTime = esp_timer_get_time() + _closeTime;
                _relay->changeState(true);
            } else {
                _nextUpdateTime = esp_timer_get_time() + _config.windowTime;
            }
        }
    }
}
