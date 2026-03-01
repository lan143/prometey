#pragma once

#include <Arduino.h>
#include <list>

#include "enum.h"
#include "relay.h"
#include "relay_PCF8574.h"

enum AddRelayErr : uint8_t
{
    ADD_RELAY_NO_ERR,
    ADD_RELAY_ERR_CHANNEL_IS_USED,
    ADD_RELAY_UNSUPPORTED_RELAY_TYPE
};

class RelayMgr
{
public:
    RelayMgr(PCF8574* mos1, PCF8574* mos2) : _mos1(mos1), _mos2(mos2) {}

    std::pair<Relay*, AddRelayErr> addRelay(RelayType type, uint8_t channel);

private:
    PCF8574* _mos1;
    PCF8574* _mos2;

    std::list<RelayPCF8574*> _relaysPCF8574;
};
