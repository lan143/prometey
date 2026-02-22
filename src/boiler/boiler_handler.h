#pragma once

#include <ConfigMgr.h>
#include <ESPAsyncWebServer.h>
#include <Json.h>
#include <Utils.h>

#include "config.h"

class BoilerHandler
{
public:
    BoilerHandler(EDConfig::ConfigMgr<Config>* configMgr) : _configMgr(configMgr) {}

    void registerHandlers(AsyncWebServer* server)
    {
        server->on("/api/settings/boiler/update", HTTP_POST, [this](AsyncWebServerRequest *request) {
            if (!request->hasParam("driver", true)) {
                request->send(422, "application/json", "{\"message\": \"not present driver in request\"}");
                return;
            }

            const AsyncWebParameter* driverParam = request->getParam("driver", true);

            int driverTmp;
            if (EDUtils::str2int(&driverTmp, driverParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect driver\"}");
                return;
            }

            BoilerDriver driver = (BoilerDriver)driverTmp;
            switch (driver) {
                case BOILER_DRIVER_NO_SELECT:
                    request->send(422, "application/json", "{\"message\": \"You must select driver\"}");
                    return;
                case BOILER_DRIVER_ECTOCONTROLV2:
                    if (!request->hasParam("modbusAddress", true)
                        || !request->hasParam("modbusSpeed", true)) {
                        request->send(422, "application/json", "{\"message\": \"You must specify modbus address and speed\"}");
                        return;
                    }
                    break;
                default:
                    request->send(422, "application/json", "{\"message\": \"Incorrect driver\"}");
                    return;
            }

            if (!request->hasParam("K", true)
                || !request->hasParam("B", true)
                || !request->hasParam("P", true)
                || !request->hasParam("I", true)) {
                request->send(422, "application/json", "{\"message\": \"You must specify K, B, P and I coefficients\"}");
                return;
            }

            if (!request->hasParam("outdoorSensor", true)) {
                request->send(422, "application/json", "{\"message\": \"not present outdoorSensor in request\"}");
                return;
            }

            const AsyncWebParameter* outdoorSensorParam = request->getParam("outdoorSensor", true);

            int outdoorSensorTmp;
            if (EDUtils::str2int(&outdoorSensorTmp, outdoorSensorParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect outdoor sensor type\"}");
                return;
            }

            BoilerOutdoorSensor outdoorSensor = (BoilerOutdoorSensor)outdoorSensorTmp;
            switch (outdoorSensor) {
                case BOILER_OUTDOOR_SENSOR_NO_SELECT:
                    request->send(422, "application/json", "{\"message\": \"You must select outdoor sensor type\"}");
                    return;
                case BOILER_OUTDOOR_SENSOR_MQTT:
                    if (!request->hasParam("outdoorSensorMqttTopic", true)
                        || !request->hasParam("outdoorSensorMqttField", true)) {
                        request->send(422, "application/json", "{\"message\": \"You must specify mqtt topic and field\"}");
                        return;
                    }
                    break;
                default:
                    request->send(422, "application/json", "{\"message\": \"Incorrect outdoor sensor type\"}");
                    return;
            }

            BoilerConfig& config = _configMgr->getConfig()->boiler;
            config.driver = driver;

            if (driver == BOILER_DRIVER_ECTOCONTROLV2) {
                const AsyncWebParameter* modbusAddressParam = request->getParam("modbusAddress", true);
                const AsyncWebParameter* modbusSpeedParam = request->getParam("modbusSpeed", true);

                int modbusAddress;
                if (EDUtils::str2int(&modbusAddress, modbusAddressParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
                    request->send(422, "application/json", "{\"message\": \"Incorrect modbus address\"}");
                    return;
                }

                int modbusSpeed;
                if (EDUtils::str2int(&modbusSpeed, modbusSpeedParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
                    request->send(422, "application/json", "{\"message\": \"Incorrect modbus speed\"}");
                    return;
                }

                config.modbusAddress = modbusAddress;
                config.modbusSpeed = modbusSpeed;
            }

            const AsyncWebParameter* kParam = request->getParam("K", true);
            const AsyncWebParameter* bParam = request->getParam("B", true);
            const AsyncWebParameter* pParam = request->getParam("P", true);
            const AsyncWebParameter* iParam = request->getParam("I", true);

            float_t K;
            if (EDUtils::str2float(&K, kParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect K value\"}");
                return;
            }

            float_t B;
            if (EDUtils::str2float(&B, bParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect B value\"}");
                return;
            }

            float_t P;
            if (EDUtils::str2float(&P, pParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect P value\"}");
                return;
            }

            float_t I;
            if (EDUtils::str2float(&I, iParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
                request->send(422, "application/json", "{\"message\": \"Incorrect I value\"}");
                return;
            }

            config.K = K;
            config.B = B;
            config.P = P;
            config.I = I;

            if (outdoorSensor == BOILER_OUTDOOR_SENSOR_MQTT) {
                const AsyncWebParameter* outdoorSensorMqttTopicParam = request->getParam("outdoorSensorMqttTopic", true);
                const AsyncWebParameter* outdoorSensorMqttFieldParam = request->getParam("outdoorSensorMqttField", true);

                strcpy(config.outdoorSensorMqttTopic, outdoorSensorMqttTopicParam->value().c_str());
                strcpy(config.outdoorSensorMqttField, outdoorSensorMqttFieldParam->value().c_str());

                ESP_LOGD("handler", "outdoorSensorMqttTopic: %s, outdoorSensorMqttField: %s", config.outdoorSensorMqttTopic, config.outdoorSensorMqttField);
            }

            if (_configMgr->store()) {
                request->send(200, "application/json", "{}");
            } else {
                request->send(500, "application/json", "{\"message\": \"Failed to update config\"}");
            }
        });

        server->on("/api/settings/boiler", HTTP_GET, [this](AsyncWebServerRequest *request) {
            AsyncResponseStream *response = request->beginResponseStream("application/json");
            auto& config = _configMgr->getConfig()->boiler;

            std::string payload = EDUtils::buildJson([config](JsonObject entity) {
                entity["driver"] = config.driver;
                entity["modbusAddress"] = config.modbusAddress;
                entity["modbusSpeed"] = config.modbusSpeed;
                entity["K"] = config.K;
                entity["B"] = config.B;
                entity["P"] = config.P;
                entity["I"] = config.I;
                entity["outdoorSensor"] = config.outdoorSensor;
                entity["outdoorSensorMqttTopic"] = config.outdoorSensorMqttTopic;
                entity["outdoorSensorMqttField"] = config.outdoorSensorMqttField;
            });

            response->write(payload.c_str());
            request->send(response);
        });
    }

private:
    EDConfig::ConfigMgr<Config>* _configMgr = nullptr;
};
