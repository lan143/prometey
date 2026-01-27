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

#include "defines.h"
#include "config.h"
#include "boiler/boiler.h"
#include "boiler/drivers/ectocontrol_adapter_v2.h"
#include "command/command_consumer.h"
#include "network/network.h"
#include "state/state.h"
#include "state/producer.h"
#include "web/handler.h"

EDConfig::ConfigMgr<Config> configMgr(EEPROM_SIZE);
NetworkMgr networkMgr(configMgr.getConfig(), true);
EDMQTT::MQTT mqtt(configMgr.getConfig().mqtt);

ModbusClient modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;

Handler handler(&configMgr, &networkMgr, &healthCheck);

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

EctoControlAdapterV2 boilerDriver(modbus); 
Boiler boiler(boilerDriver, &stateMgr);

CommandConsumer commandConsumer(&boiler);

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
        config.boilerModbusSpeed = 19200;
        config.boilerAddress = 0x7;
    });
    configMgr.load();

    Serial2.begin(configMgr.getConfig().boilerModbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    modbus.begin();
    modbus.setTypeMB(MODBUS_RTU);
    modbus.setTimeout(200);

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

    EDHA::Device* device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    stateProducer.init(configMgr.getConfig().mqttStateTopic);

    boilerDriver.init(configMgr.getConfig().boilerAddress);
    boiler.init(&discoveryMgr, device, configMgr.getConfig().mqttStateTopic, configMgr.getConfig().mqttCommandTopic);

    commandConsumer.init(configMgr.getConfig().mqttCommandTopic);
    mqtt.subscribe(&commandConsumer);

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
}
