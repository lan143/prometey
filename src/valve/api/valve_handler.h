#pragma once

#include <data_mgr.h>
#include <ESPAsyncWebServer.h>
#include <Json.h>
#include <Utils.h>

#include "config.h"
#include "valve/api/update_valve_request.h"

class ValveHandler
{
public:
    ValveHandler(EDConfig::DataMgr<Config>* configMgr) : _configMgr(configMgr) {}

    void registerHandlers(AsyncWebServer* server)
    {
        server->on("/api/settings/valves", HTTP_GET, [this](AsyncWebServerRequest *request) {
            AsyncResponseStream *response = request->beginResponseStream("application/json");
            auto& config = _configMgr->getData()->valves;

            std::string payload = EDUtils::buildJson([config](JsonObject entity) {
                for (int i = 0; i < VALVES_COUNT; i++) {
                    entity["valves"][i]["enabled"] = config[i].enabled;
                    entity["valves"][i]["type"] = (uint8_t)config[i].type;
                    entity["valves"][i]["channel"] = config[i].channel;
                    entity["valves"][i]["fullTravelTime"] = config[i].fullTravelTime;
                    entity["valves"][i]["windowTime"] = config[i].windowTime;
                    entity["valves"][i]["roomID"] = config[i].roomID;
                }
            });

            response->write(payload.c_str());
            request->send(response);
        });

        server->on("/api/settings/valve", HTTP_POST, [](AsyncWebServerRequest *request) {}, NULL, [this](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
            AsyncResponseStream *response = request->beginResponseStream("application/json");

            UpdateValveRequest req;
            if (!req.unmarshalJSON((const char*)data)) {
                request->send(422, "application/json", "{\"message\": \"failed to unmarshal request\"}");
                return;
            }

            auto validateResult = req.validate();
            if (!validateResult.valid) {
                std::string payload = EDUtils::buildJson([validateResult](JsonObject entity) {
                    entity["message"] = validateResult.message;
                });

                response->write(payload.c_str());
                response->setCode(422);
                request->send(response);
                return;
            }

            _configMgr->getData()->valves[req.getID()] = req.asConfig();
            if (_configMgr->store()) {
                request->send(200, "application/json", "{}");
            } else {
                request->send(500, "application/json", "{\"message\": \"failed to store config\"}");
            }
        });
    }

private:
    EDConfig::DataMgr<Config>* _configMgr = nullptr;
};
