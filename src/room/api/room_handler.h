#pragma once

#include <ConfigMgr.h>
#include <ESPAsyncWebServer.h>
#include <Json.h>
#include <Utils.h>

#include "config.h"
#include "room/api/update_room_request.h"

class RoomHandler
{
public:
    RoomHandler(EDConfig::ConfigMgr<Config>* configMgr, std::list<Room*>* rooms) : _configMgr(configMgr), _rooms(rooms) {}

    void registerHandlers(AsyncWebServer* server)
    {
        server->on("/api/settings/rooms", HTTP_GET, [this](AsyncWebServerRequest *request) {
            AsyncResponseStream *response = request->beginResponseStream("application/json");
            auto& config = _configMgr->getConfig()->rooms;
            auto& rooms = _rooms;

            std::string payload = EDUtils::buildJson([config, rooms](JsonObject entity) {
                for (int i = 0; i < ROOMS_COUNT; i++) {
                    entity["rooms"][i]["id"] = config[i].id;
                    entity["rooms"][i]["enabled"] = config[i].enabled;
                    entity["rooms"][i]["temperatureSensorType"] = config[i].temperatureSensorType;
                    entity["rooms"][i]["name"] = config[i].name;
                    entity["rooms"][i]["mqttCommandTopic"] = config[i].mqttCommandTopic;
                    entity["rooms"][i]["mqttStateTopic"] = config[i].mqttStateTopic;
                    entity["rooms"][i]["mqttTemperatureSensorTopic"] = config[i].mqttTemperatureSensorTopic;
                    entity["rooms"][i]["mqttTemperatureSensorField"] = config[i].mqttTemperatureSensorField;
                    entity["rooms"][i]["kP"] = config[i].kP;
                    entity["rooms"][i]["kI"] = config[i].kI;
                    entity["rooms"][i]["kD"] = config[i].kD;

                    for (auto room : *rooms) {
                        if (room->getID() == config[i].id) {
                            entity["rooms"][i]["I"] = room->getState().I;
                            entity["rooms"][i]["prevError"] = room->getState().prevErr;
                            entity["rooms"][i]["prevTime"] = room->getState().prevTime;
                            entity["rooms"][i]["valveOpeningPercent"] = room->getValveOpeningPercent();
                            break;
                        }
                    }
                }
            });

            response->write(payload.c_str());
            request->send(response);
        });

        server->on("/api/settings/room", HTTP_POST, [](AsyncWebServerRequest *request) {}, NULL, [this](AsyncWebServerRequest * request, uint8_t *data, size_t len, size_t index, size_t total) {
            AsyncResponseStream *response = request->beginResponseStream("application/json");

            UpdateRoomRequest req;
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

            _configMgr->getConfig()->rooms[req.getRoomID()] = req.asConfig();
            if (_configMgr->store()) {
                request->send(200, "application/json", "{}");
            } else {
                request->send(500, "application/json", "{\"message\": \"failed to store config\"}");
            }
        });
    }

private:
    EDConfig::ConfigMgr<Config>* _configMgr = nullptr;
    std::list<Room*>* _rooms;
};
