#include <log/log.h>

#include "valve.h"

void Valve::init(ValveConfig config)
{
    _config = config;
    _config.windowTime = 60000000; // tmp

    update();
}

void Valve::update()
{
    if (_nextUpdateTime < esp_timer_get_time()) {
        if (_relay->isEnabled()) {
            int64_t openTime = (uint64_t)_config.windowTime - _closeTime;
            if (openTime > 0) {
                _relay->changeState(false);
                _nextUpdateTime = esp_timer_get_time() + openTime;
            } else {
                _nextUpdateTime = esp_timer_get_time() + (uint64_t)_config.windowTime;
            }
        } else {
            _closeTime = (uint64_t)_config.windowTime * _closePercent / 100;
            if (_closeTime > 0) {
                _nextUpdateTime = esp_timer_get_time() + _closeTime;
                _relay->changeState(true);
            } else {
                _nextUpdateTime = esp_timer_get_time() + (uint64_t)_config.windowTime;
            }
        }
    }
}
