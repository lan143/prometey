#pragma once

#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <Json.h>
#include <cmath>
#include <list>

#include <data_mgr.h>
#include <ESPAsyncWebServer.h>

#include "boiler/boiler.h"
#include "command/command.h"
#include "command/room_command.h"
#include "config.h"
#include "defines.h"
#include "log/log.h"
#include "room/room.h"

class ControlHandler
{
public:
    ControlHandler(
        EDConfig::DataMgr<Config>* configMgr,
        std::list<Room*>* rooms,
        EDUtils::StateMgr<State>* stateMgr,
        Boiler* boiler
    ) : _configMgr(configMgr), _rooms(rooms), _stateMgr(stateMgr), _boiler(boiler) {}

    void registerRoutes(AsyncWebServer* server)
    {
        server->on("/api/control", HTTP_GET, [this](AsyncWebServerRequest* request) {
            sendControlState(request);
        });

        // Malformed JSON is rejected with 400 by AsyncCallbackJsonWebHandler before
        // this callback; parseable bodies that are not command objects get 422 here.
        auto* boilerCommandHandler = new AsyncCallbackJsonWebHandler(
            "/api/control/boiler",
            [this](AsyncWebServerRequest* request, JsonVariant& json) {
                if (!json.is<JsonObject>()) {
                    sendValidationError(request, "invalid command");
                    return;
                }

                std::string body;
                serializeJson(json, body);

                Command command;
                if (!command.unmarshalJSON(body.c_str())) {
                    LOGE("control", "cant unmarshal boiler command");
                    sendValidationError(request, "invalid command");
                    return;
                }

                if (command.getCentralHeatingMode().Valid()) {
                    const std::string mode = command.getCentralHeatingMode().Value();
                    if (mode == "off") {
                        _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_OFF);
                    } else if (mode == "heat") {
                        _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_HEAT);
                    } else if (mode == "auto") {
                        _boiler->setCentralHeatingMode(CENTRAL_HEATING_MODE_AUTO);
                    }
                    // Unknown mode strings are ignored, matching CommandConsumer.
                }

                if (command.getCentralHeatingSetPoint().Valid()) {
                    _boiler->setCentralHeatingSetPoint(command.getCentralHeatingSetPoint().Value());
                }

                if (command.getHotWaterMode().Valid()) {
                    _boiler->updateHotWaterState(command.getHotWaterMode().Value() != "off");
                }

                if (command.getHotWaterSetPoint().Valid()) {
                    _boiler->setHotWaterSetPoint(command.getHotWaterSetPoint().Value());
                }

                request->send(200, "application/json", "{}");
            }
        );
        boilerCommandHandler->setMethod(HTTP_POST);
        boilerCommandHandler->setMaxContentLength(1024);
        server->addHandler(boilerCommandHandler);

        auto* roomCommandHandler = new AsyncCallbackJsonWebHandler(
            "/api/control/room",
            [this](AsyncWebServerRequest* request, JsonVariant& json) {
                if (!json.is<JsonObject>()) {
                    sendValidationError(request, "invalid command");
                    return;
                }

                const JsonVariant idValue = json["id"];
                if (idValue.isNull() || !idValue.is<int>()) {
                    sendValidationError(request, "invalid room id");
                    return;
                }

                const int id = idValue.as<int>();
                if (id < 0 || id >= ROOMS_COUNT) {
                    sendValidationError(request, "invalid room id");
                    return;
                }

                const JsonVariant setPointValue = json["setPoint"];
                const bool hasSetPoint = !setPointValue.isNull();
                const bool hasMode = !json["mode"].isNull();
                if (!hasSetPoint && !hasMode) {
                    sendValidationError(request, "mode or setPoint is required");
                    return;
                }

                if (hasSetPoint) {
                    if (!setPointValue.is<float_t>()) {
                        sendValidationError(request, "invalid setPoint");
                        return;
                    }

                    const float_t setPoint = setPointValue.as<float_t>();
                    if (!std::isfinite(setPoint) || setPoint < 16.0f || setPoint > 32.0f) {
                        sendValidationError(request, "setPoint out of range");
                        return;
                    }
                }

                Room* target = nullptr;
                for (auto room : *_rooms) {
                    if (room->getID() == static_cast<uint8_t>(id)) {
                        target = room;
                        break;
                    }
                }

                if (target == nullptr) {
                    sendValidationError(request, "room not available");
                    return;
                }

                std::string body;
                serializeJson(json, body);

                RoomCommand command;
                if (!command.unmarshalJSON(body.c_str())) {
                    LOGE("control", "cant unmarshal room command");
                    sendValidationError(request, "invalid command");
                    return;
                }

                if (command.getMode().Valid()) {
                    target->changeActive(command.getMode().Value() != "off");
                }

                if (command.getSetPoint().Valid()) {
                    target->updateSetPoint(command.getSetPoint().Value());
                }

                request->send(200, "application/json", "{}");
            }
        );
        roomCommandHandler->setMethod(HTTP_POST);
        roomCommandHandler->setMaxContentLength(1024);
        server->addHandler(roomCommandHandler);
    }

private:
    static const char* centralHeatingModeToString(CentralHeatingMode mode)
    {
        switch (mode) {
            case CENTRAL_HEATING_MODE_HEAT:
                return "heat";
            case CENTRAL_HEATING_MODE_AUTO:
                return "auto";
            case CENTRAL_HEATING_MODE_OFF:
            default:
                return "off";
        }
    }

    static void sendValidationError(AsyncWebServerRequest* request, const char* message)
    {
        std::string payload = EDUtils::buildJson([message](JsonObject entity) {
            entity["message"] = message;
        });

        request->send(422, "application/json", payload.c_str());
    }

    void sendControlState(AsyncWebServerRequest* request)
    {
        AsyncResponseStream* response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            JsonObject boilerEntity = entity["boiler"].to<JsonObject>();
            boilerEntity["requestedMode"] = centralHeatingModeToString(_boiler->getCentralHeatingMode());
            boilerEntity["outdoorTemperature"] = _boiler->getOutdoorTemperature();

            JsonDocument stateDocument;
            const std::string statePayload = _stateMgr->getState().marshalJSON();
            if (deserializeJson(stateDocument, statePayload.c_str()) == DeserializationError::Ok) {
                JsonObject stateObject = stateDocument.as<JsonObject>();
                for (JsonPair pair : stateObject) {
                    boilerEntity[pair.key().c_str()] = pair.value();
                }
            }

            JsonArray roomsArray = entity["rooms"].to<JsonArray>();
            for (auto room : *_rooms) {
                const RoomState& roomState = room->getState();
                const uint8_t id = room->getID();

                JsonObject roomEntity = roomsArray.add<JsonObject>();
                roomEntity["id"] = id;
                roomEntity["name"] = room->getName();
                roomEntity["active"] = roomState.active;
                roomEntity["setPoint"] = roomState.setPoint;
                roomEntity["currentTemperature"] = roomState.currentTemperature;
                roomEntity["temperatureValid"] = roomState.currentTemperatureInit;
                roomEntity["valveOpening"] = room->getValveOpeningPercent();
            }
        });

        response->write(payload.c_str());
        request->send(response);
    }

    EDConfig::DataMgr<Config>* _configMgr = nullptr;
    std::list<Room*>* _rooms = nullptr;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;
    Boiler* _boiler = nullptr;
};
