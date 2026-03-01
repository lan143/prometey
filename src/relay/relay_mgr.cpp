#include "relay_mgr.h"

std::pair<Relay*, AddRelayErr> RelayMgr::addRelay(RelayType type, uint8_t channel)
{
    Relay* relay = nullptr;
    switch (type) {
        case RELAY_TYPE_PCF8574:
            relay = new RelayPCF8574(channel < 8 ? _mos2 : _mos1);
            static_cast<RelayPCF8574*>(relay)->init(channel % 8);
            _relaysPCF8574.push_back(static_cast<RelayPCF8574*>(relay)); // @todo: check if channel is used by another relay
            break;
        default:
            return std::make_pair(nullptr, ADD_RELAY_UNSUPPORTED_RELAY_TYPE);
    }

    return std::make_pair(relay, ADD_RELAY_NO_ERR);
}
