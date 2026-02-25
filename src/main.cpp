#include <Arduino.h>
#include <ArduinoOTA.h>
#include <SPIFFS.h>
#include <ConfigMgr.h>
#include <esp_log.h>
#include <discovery.h>
#include <iarduino_Modbus.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <state/state_mgr.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>

#include "defines.h"
#include "config.h"
#include "boiler/boiler.h"
#include "boiler/boiler_handler.h"
#include "boiler/drivers/ectocontrol_adapter_v2.h"
#include "command/command_consumer.h"
#include "consumers/outdoor_temperature_consumer.h"
#include "consumers/room_command_consumer.h"
#include "consumers/room_temperature_consumer.h"
#include "room/api/room_handler.h"
#include "room/room.h"
#include "state/room_producer.h"
#include "state/room_state.h"
#include "state/state.h"
#include "state/producer.h"
#include "valve/api/valve_handler.h"
#include "valve/valve.h"
#include "valve/driver.h"
#include "valve/drivers/PCF8574_valve.h"
#include "web/handler.h"

EDConfig::ConfigMgr<Config> configMgr(EEPROM_SIZE);
EDNetwork::NetworkMgr networkMgr;
EDMQTT::MQTT mqtt;

ModbusClient modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

EctoControlAdapterV2 boilerDriver(modbus); 
Boiler boiler(boilerDriver, &configMgr, &stateMgr);
OutdoorTemperatureConsumer outdoorTemperatureConsumer(&boiler);

CommandConsumer commandConsumer(&boiler);

std::list<Room*> rooms;
std::list<EDUtils::StateMgr<RoomMQTTState>*> roomStateMgrs;
std::list<Valve*> valves;

BoilerHandler boilerHandler(&configMgr);
RoomHandler roomHandler(&configMgr, &rooms);
ValveHandler valveHandler(&configMgr);
Handler handler(&configMgr, &networkMgr, &healthCheck, &boilerHandler, &roomHandler, &valveHandler);

PCF8574 mos1(0x24);
PCF8574 mos2(0x25);

void initRooms()
{
    for (int i = 0; i < ROOMS_COUNT; i++) {
        auto roomConfig = configMgr.getConfig()->rooms[i];
        ESP_LOGD("main", "room[%d] enabled=%d, mqttStateTopic='%s', mqttCommandTopic='%s'", i, roomConfig.enabled, roomConfig.mqttStateTopic, roomConfig.mqttCommandTopic);

        if (roomConfig.enabled) {
            auto roomStateProducer = new RoomStateProducer(&mqtt);
            roomStateProducer->init(roomConfig.mqttStateTopic);

            auto roomStateMgr = new EDUtils::StateMgr<RoomMQTTState>(roomStateProducer);
            roomStateMgrs.push_back(roomStateMgr);

            auto room = new Room(&boiler, &configMgr, roomStateMgr);
            room->init(&discoveryMgr, device, roomConfig);
            rooms.push_back(room);

            auto roomCommandConsumer = new RoomCommandConsumer(room);
            roomCommandConsumer->init(roomConfig.mqttCommandTopic);
            mqtt.subscribe(roomCommandConsumer);

            if (roomConfig.temperatureSensorType == ROOM_TEMPERATURE_SENSOR_TYPE_MQTT) {
                auto roomTemperatureConsumer = new RoomTemperatureConsumer(room);
                roomTemperatureConsumer->init(roomConfig.mqttTemperatureSensorTopic, roomConfig.mqttTemperatureSensorField);
                mqtt.subscribe(roomTemperatureConsumer);
            }
        }
    }
}

void initValves()
{
    for (int i = 0; i < VALVES_COUNT; i++) {
        auto valveConfig = configMgr.getConfig()->valves[i];
        if (valveConfig.enabled) {
            ValveDriver* driver = nullptr;
            switch (valveConfig.type) {
                case VALVE_TYPE_PCF8574:
                    driver = new PCF8574ValveDriver(valveConfig.channel < 8 ? &mos2 : &mos1);
                    static_cast<PCF8574ValveDriver*>(driver)->init(valveConfig.channel % 8);
                    break;
                default:
                    continue;
            }

            auto valve = new Valve(driver);
            valve->init(valveConfig);

            for (auto room : rooms) {
                if (room->getID() == valveConfig.roomID) {
                    room->addValve(valve);
                }
            }

            valves.push_back(valve);
        }
    }
}

void setup()
{
    randomSeed(micros());

    Serial.begin(SERIAL_SPEED);

    esp_log_level_set("*", ESP_LOG_VERBOSE);
    ESP_LOGI("setup", "Prometey");
    ESP_LOGI("setup", "start");

    ESP_LOGI("setup", "spiffs begin");
    SPIFFS.begin(true);

    configMgr.setDefault([](Config* config) {
        snprintf(config->wifiAPSSID, WIFI_SSID_LEN, "Prometey_%s", EDUtils::getMacAddress().c_str());
        snprintf(config->mqttStateTopic, MQTT_TOPIC_LEN, "prometey/%s/state", EDUtils::getChipID());
        snprintf(config->mqttCommandTopic, MQTT_TOPIC_LEN, "prometey/%s/set", EDUtils::getChipID());
        snprintf(config->mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");

        for (int i = 0; i < ROOMS_COUNT; i++) {
            config->rooms[0].id = i;
        }
    });

    ESP_LOGI("setup", "load config");
    configMgr.load();

    ESP_LOGI("setup", "init modbus");
    Serial2.begin(configMgr.getConfig()->boiler.modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    modbus.begin();
    modbus.setTypeMB(MODBUS_RTU);
    modbus.setTimeout(200);

    ESP_LOGI("setup", "init i2c");
    Wire.begin(4, 5);
    Wire.setClock(100000);

    ESP_LOGI("setup", "init PCF8574");
    mos1.begin();
    mos2.begin();

    ESP_LOGI("setup", "init network");
    networkMgr.init(configMgr.getConfig()->asNetworkConfig(), true, ETH_ADDR, -1, ETH_MDC_PIN, ETH_MDIO_PIN, ETH_TYPE, ETH_CLK_MODE);

    ESP_LOGI("setup", "init OTA");
    ArduinoOTA.setPassword("somestrongpassword");
    ArduinoOTA.begin();

    ESP_LOGI("setup", "mqtt init");
    mqtt.init(configMgr.getConfig()->mqtt);
    networkMgr.OnConnect([&](bool isConnected) {
        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    ESP_LOGI("setup", "api handler init");
    handler.init();

    ESP_LOGI("setup", "discoveryMgr init");
    discoveryMgr.init(
        configMgr.getConfig()->mqttHADiscoveryPrefix,
        configMgr.getConfig()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    ESP_LOGI("setup", "create HA device");
    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    ESP_LOGI("setup", "state producer init");
    stateProducer.init(configMgr.getConfig()->mqttStateTopic);

    ESP_LOGI("setup", "init boiler");
    boilerDriver.init(configMgr.getConfig()->boiler.modbusAddress);
    boiler.init(
        &discoveryMgr,
        device,
        configMgr.getConfig()->mqttStateTopic,
        configMgr.getConfig()->mqttCommandTopic,
        configMgr.getConfig()->boiler
    );
    healthCheck.registerService(&boiler);

    ESP_LOGI("setup", "command consumer init");
    commandConsumer.init(configMgr.getConfig()->mqttCommandTopic);
    mqtt.subscribe(&commandConsumer);

    ESP_LOGI("setup", "outdoor temperature consumer init");
    outdoorTemperatureConsumer.init(configMgr.getConfig()->boiler.outdoorSensorMqttTopic, configMgr.getConfig()->boiler.outdoorSensorMqttField);
    mqtt.subscribe(&outdoorTemperatureConsumer);

    ESP_LOGI("setup", "init rooms");
    initRooms();
    ESP_LOGI("setup", "init valves");
    initValves();

    ESP_LOGI("setup", "complete");
}

void loop()
{
    networkMgr.loop();
    discoveryMgr.loop();
    ArduinoOTA.handle();
    healthCheck.loop();
    stateMgr.loop();
    boilerDriver.update();
    boiler.update();

    for (auto room : rooms) {
        room->update();
    }

    for (auto valve : valves) {
        valve->update();
    }

    for (auto roomStateMgr : roomStateMgrs) {
        roomStateMgr->loop();
    }
}
