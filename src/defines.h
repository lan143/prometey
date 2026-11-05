#pragma once

#include <ETH.h>

#define SERIAL_SPEED 115200

#define ETH_ADDR        0
#define ETH_POWER_PIN  -1
#define ETH_MDC_PIN    23
#define ETH_MDIO_PIN  18
#define ETH_TYPE      ETH_PHY_LAN8720
#define ETH_CLK_MODE  ETH_CLOCK_GPIO17_OUT

#define RELAY_WARM_FLOOR 2
#define RELAY_UNKNOW 15

#define RS485RX  16
#define RS485TX  13

#define EEPROM_SIZE 6000

#define VALVE_MIN_PHYSICAL_OPENING 70

#ifndef CONTROLLER_NAME
#define CONTROLLER_NAME "Prometey"
#endif

// scripts/ota_env.py injects PROMETHEY_OTA_AUTH from the untracked .env for
// the kc868a16_ota env. Keep the legacy default when building without .env.
#ifndef PROMETHEY_OTA_AUTH
#define PROMETHEY_OTA_AUTH "somestrongpassword"
#endif

#define ROOMS_COUNT 8
#define VALVES_COUNT 9

const char deviceName[] = CONTROLLER_NAME;
const char deviceModel[] = "KC868-A16";
const char deviceManufacturer[] = "Kincony";
const char deviceHWVersion[] = "1.0.0";

#ifndef PROMETEY_FW_VERSION
#define PROMETEY_FW_VERSION "unknown"
#endif

const char deviceFWVersion[] = PROMETEY_FW_VERSION;
