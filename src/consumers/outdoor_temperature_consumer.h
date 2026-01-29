#pragma once

#include <Arduino.h>
#include <consumer.h>

#include "boiler/boiler.h"

class OutdoorTemperatureConsumer : public EDMQTT::Consumer
{
public:
    OutdoorTemperatureConsumer(
        Boiler* boiler
    ) : _boiler(boiler) {}

    using EDMQTT::Consumer::init;
    void init(std::string topic, std::string field)
    {
        EDMQTT::Consumer::init(topic.c_str());
        _field = field;
    }

    void consume(std::string payload);

private:
    Boiler* _boiler;

private:
    std::string _field;
};
