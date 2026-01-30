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

#include "defines.h"
#include "config.h"
#include "boiler/boiler.h"
#include "boiler/drivers/ectocontrol_adapter_v2.h"
#include "command/command_consumer.h"
#include "consumers/outdoor_temperature_consumer.h"
#include "consumers/room_command_consumer.h"
#include "consumers/room_temperature_consumer.h"
#include "network/network.h"
#include "room/room.h"
#include "state/state.h"
#include "state/producer.h"
#include "valve/valve.h"
#include "valve/driver.h"
#include "valve/drivers/PCF8574_valve.h"
#include "web/handler.h"

EDConfig::ConfigMgr<Config> configMgr(EEPROM_SIZE);
NetworkMgr networkMgr(configMgr.getConfig(), true);
EDMQTT::MQTT mqtt(configMgr.getConfig().mqtt);

ModbusClient modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

Handler handler(&configMgr, &networkMgr, &healthCheck);

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

EctoControlAdapterV2 boilerDriver(modbus); 
Boiler boiler(boilerDriver, &stateMgr);
OutdoorTemperatureConsumer outdoorTemperatureConsumer(&boiler);

CommandConsumer commandConsumer(&boiler);

PCF8574 mos1(0x24);
PCF8574 mos2(0x25);

std::list<Room*> rooms;
std::list<Valve*> valves;

void initRooms()
{
    for (int i = 0; i < 10; i++) {
        auto roomConfig = configMgr.getConfig().rooms[i];
        if (roomConfig.enabled) {
            auto room = new Room(&boiler);
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
    for (int i = 0; i < 12; i++) {
        auto valveConfig = configMgr.getConfig().valves[i];
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

    ESP_LOGI("setup", "Prometey");
    ESP_LOGI("setup", "start");

    SPIFFS.begin(true);

    configMgr.setDefault([](Config& config) {
        snprintf(config.wifiAPSSID, WIFI_SSID_LEN, "Prometey_%s", EDUtils::getMacAddress().c_str());
        snprintf(config.mqttStateTopic, MQTT_TOPIC_LEN, "prometey/%s/state", EDUtils::getChipID());
        snprintf(config.mqttCommandTopic, MQTT_TOPIC_LEN, "prometey/%s/set", EDUtils::getChipID());;
        snprintf(config.mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");

        config.boiler.driver = BOILER_DRIVER_ECTOCONTROLV2;
        config.boiler.modbusSpeed = 19200;
        config.boiler.modbusAddress = 0x7;
        config.boiler.K = 1;
        config.boiler.B = 25;
        config.boiler.outdoorSensor = BOILER_OUTDOOR_SENSOR_MQTT;
        snprintf(config.boiler.outdoorSensorMqttTopic, 128, "bernoulli/0xa83a95ffc9ec/state");
        snprintf(config.boiler.outdoorSensorMqttField, 64, "temperature");
    });
    configMgr.load();

    Serial2.begin(configMgr.getConfig().boiler.modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    modbus.begin();
    modbus.setTypeMB(MODBUS_RTU);
    modbus.setTimeout(200);

    Wire.begin(4, 5);
    Wire.setClock(100000);

    mos1.begin();
    mos2.begin();
    //mos2.write(7, LOW); 

    networkMgr.init();

    ArduinoOTA.setPassword("somestrongpassword");
    ArduinoOTA.begin();

    mqtt.init();
    networkMgr.OnConnect([&](bool isConnected) {
        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    handler.init();

    discoveryMgr.init(
        configMgr.getConfig().mqttHADiscoveryPrefix,
        configMgr.getConfig().mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    stateProducer.init(configMgr.getConfig().mqttStateTopic);

    boilerDriver.init(configMgr.getConfig().boiler.modbusAddress);
    boiler.init(
        &discoveryMgr,
        device,
        configMgr.getConfig().mqttStateTopic,
        configMgr.getConfig().mqttCommandTopic,
        configMgr.getConfig().boiler.K,
        configMgr.getConfig().boiler.B
    );
    healthCheck.registerService(&boiler);

    commandConsumer.init(configMgr.getConfig().mqttCommandTopic);
    mqtt.subscribe(&commandConsumer);

    outdoorTemperatureConsumer.init(configMgr.getConfig().boiler.outdoorSensorMqttTopic, configMgr.getConfig().boiler.outdoorSensorMqttField);
    mqtt.subscribe(&outdoorTemperatureConsumer);

    initRooms();
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
}
