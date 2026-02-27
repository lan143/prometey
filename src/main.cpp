#include <Arduino.h>
#include <ArduinoOTA.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <discovery.h>
#include <iarduino_Modbus.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <state/state_mgr.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>
#include <log/log.h>

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

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDMQTT::MQTT mqtt;

ModbusClient modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

EctoControlAdapterV2 boilerDriver(modbus);

EDConfig::DataMgr<BoilerState> boilerStateMgr(new EDConfig::StorageLittleFS<BoilerState>("/boiler.bin"));
Boiler boiler(
    boilerDriver,
    &boilerStateMgr,
    &stateMgr
);
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

bool inited = false;

void initRooms()
{
    for (int i = 0; i < ROOMS_COUNT; i++) {
        auto roomConfig = configMgr.getData()->rooms[i];
        LOGD("main", "room[%d] enabled=%d, mqttStateTopic='%s', mqttCommandTopic='%s'", i, roomConfig.enabled, roomConfig.mqttStateTopic, roomConfig.mqttCommandTopic);

        if (roomConfig.enabled) {
            auto roomStateProducer = new RoomStateProducer(&mqtt);
            roomStateProducer->init(roomConfig.mqttStateTopic);

            auto mqttRoomStateMgr = new EDUtils::StateMgr<RoomMQTTState>(roomStateProducer);
            roomStateMgrs.push_back(mqttRoomStateMgr);

            auto localRoomStateMgr = new EDConfig::DataMgr<RoomState>(new EDConfig::StorageLittleFS<RoomState>(EDUtils::formatString("/room_%d.bin", i)));
            localRoomStateMgr->load();

            auto room = new Room(
                &boiler,
                localRoomStateMgr,
                mqttRoomStateMgr
            );
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
        auto valveConfig = configMgr.getData()->valves[i];
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

    LOGI("setup", "Prometey");
    LOGI("setup", "start");

    LOGI("setup", "littlefs begin");
    if (!LittleFS.begin(true)) {
        LOGE("setup", "failed to init littlefs");
        return;
    }

    configMgr.setDefault([](Config* config) {
        snprintf(config->network.wifiAPSSID, WIFI_SSID_LEN, "Prometey_%s", EDUtils::getMacAddress().c_str());
        snprintf(config->mqttStateTopic, MQTT_TOPIC_LEN, "prometey/%s/state", EDUtils::getChipID());
        snprintf(config->mqttCommandTopic, MQTT_TOPIC_LEN, "prometey/%s/set", EDUtils::getChipID());
        snprintf(config->mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");

        for (int i = 0; i < ROOMS_COUNT; i++) {
            config->rooms[0].id = i;
        }
    });

    LOGI("setup", "load config");
    configMgr.load();

    // tmp
    EDUtils::LogConfig networkConfig;
    strcpy(networkConfig.host, "192.168.1.2");
    networkConfig.port = 5555;
    strcpy(networkConfig.uri, "/_bulk");

    networkLogger.init(networkConfig, CONTROLLER_NAME, EDUtils::formatString("Prometey_%s", EDUtils::getMacAddress().c_str()));

    LOGI("setup", "init modbus");
    Serial2.begin(configMgr.getData()->boiler.modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    modbus.begin();
    modbus.setTypeMB(MODBUS_RTU);
    modbus.setTimeout(200);

    LOGI("setup", "init i2c");
    Wire.begin(4, 5);
    Wire.setClock(100000);

    LOGI("setup", "init PCF8574");
    mos1.begin();
    mos2.begin();

    LOGI("setup", "init network");
    networkMgr.init(configMgr.getData()->network, true, ETH_ADDR, -1, ETH_MDC_PIN, ETH_MDIO_PIN, ETH_TYPE, ETH_CLK_MODE);

    LOGI("setup", "init OTA");
    ArduinoOTA.setPassword("somestrongpassword");
    ArduinoOTA.begin();

    LOGI("setup", "mqtt init");
    mqtt.init(configMgr.getData()->mqtt);
    networkMgr.OnConnect([&](bool isConnected) {
        networkLogger.enable(isConnected);

        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    LOGI("setup", "api handler init");
    handler.init();

    LOGI("setup", "discoveryMgr init");
    discoveryMgr.init(
        configMgr.getData()->mqttHADiscoveryPrefix,
        configMgr.getData()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    LOGI("setup", "create HA device");
    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    LOGI("setup", "state producer init");
    stateProducer.init(configMgr.getData()->mqttStateTopic);

    LOGI("setup", "init boiler");
    boilerDriver.init(configMgr.getData()->boiler.modbusAddress);
    boilerStateMgr.load();
    boiler.init(
        &discoveryMgr,
        device,
        configMgr.getData()->mqttStateTopic,
        configMgr.getData()->mqttCommandTopic,
        configMgr.getData()->boiler
    );
    healthCheck.registerService(&boiler);

    LOGI("setup", "command consumer init");
    commandConsumer.init(configMgr.getData()->mqttCommandTopic);
    mqtt.subscribe(&commandConsumer);

    LOGI("setup", "outdoor temperature consumer init");
    outdoorTemperatureConsumer.init(configMgr.getData()->boiler.outdoorSensorMqttTopic, configMgr.getData()->boiler.outdoorSensorMqttField);
    mqtt.subscribe(&outdoorTemperatureConsumer);

    LOGI("setup", "init rooms");
    initRooms();
    LOGI("setup", "init valves");
    initValves();

    inited = true;
    LOGI("setup", "complete");
}

void loop()
{
    if (!inited) {
        return;
    }

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

    networkLogger.update();
}
