# AGENTS.md — Prometey

## Project

Prometey is Arduino firmware for ESP32 controlling a water underfloor-heating system:
up to 8 rooms with motorized valves and PID regulation, an ECTOControl V2 boiler over
RS485/Modbus RTU, relays (pump etc.) via two PCF8574 I2C expanders, and MQTT +
Home Assistant discovery integration. Target hardware is the Kincony KC868-A16 board
(PlatformIO board profile `esp32dev`, W5500 Ethernet).

## Build & Deploy

PlatformIO only (no CMake/Make). There are no unit tests in the repo — compilation is
the primary local gate.

- Compile: `pio run -e kc868a16`
- Flash over USB: `pio run -e kc868a16 -t upload`
- Upload web UI to LittleFS: `pio run -e kc868a16 -t uploadfs` (contents of `data/`)
- Serial monitor: `pio device monitor` (115200 baud)
- OTA: `pio run -e kc868a16_ota -t upload` (espota to `upload_port` from platformio.ini)
- `env:kc868a16_dev` is currently broken (it extends nonexistent `env:kc868a2`). Do not
  "fix" it as a side effect of other work; raise it explicitly if it matters.

Changes touching timing, storage layout or MQTT topics cannot be fully validated
without hardware; say so plainly in the final report.

## Layout

- `platformio.ini` — envs: `kc868a16` (production), `kc868a16_dev` (broken), `kc868a16_ota`
- `src/main.cpp` — composition root: global objects + `setup()`/`loop()`; all wiring lives here
- `src/config.h` — root `Config` struct persisted to LittleFS (`/config.bin`); `CURRENT_VERSION`
- `src/defines.h` — pins, counts (`ROOMS_COUNT`, `VALVES_COUNT`), device identity
- `src/boiler/` — Boiler domain + `Driver` abstraction (`drivers/ectocontrol_adapter_v2` = Modbus impl)
- `src/room/` — Room domain (PID kP/kI/kD), `config.h`/`state.h`/`enums.h`, `api/` for web handlers
- `src/valve/` — Valve bound to a relay channel; `setOpening()` maps logical 0-100% to physical 70-100% of the 60 s window (`VALVE_MIN_PHYSICAL_OPENING` in `defines.h` — below ~70% the valve passes no heat)
- `src/relay/` — `RelayMgr` over two PCF8574 (I2C addresses 0x24/0x25, Wire on pins 4/5)
- `src/command/`, `src/consumers/` — MQTT command/state consumers
- `src/state/` — device & room state producers published to MQTT
- `src/migration/` — boot-time migration of legacy raw binaries (v2 `/config.bin`, pre-autoTrim `/boiler.bin`)
- `src/web/` — ESPAsyncWebServer JSON API (`/api/settings`, `/api/status`, `/api/wifi/list`, `/api/reboot`, …)
- `data/` — web control panel served from LittleFS (bootstrap + jquery, static files)
- `frontend/` — Preact SPA sources (Vite + TypeScript; Boiler page includes a live weather-curve SVG chart that mirrors the firmware formula); `cd frontend && npm run build` regenerates `data/` (`emptyOutDir` also deletes any untracked `data/*.bin` fixtures — back them up first). Network tab embeds `edn-network-ui` web components via `file:../../ed-network/frontend` dependency.

## Architecture

- Single-threaded cooperative Arduino loop. `setup()` constructs globals and wires
  dependencies; `loop()` calls `*.loop()`/`*.update()` on network, discovery, OTA,
  healthcheck, state, boiler driver, boiler, rooms, valves, loggers. Never block the
  loop: no `delay()`, no long synchronous I/O.
- Author's `ed-*` libraries (git deps from github.com/lan143): ed-mqtt
  (`EDMQTT::Consumer`, `mqtt.subscribe()`), ed-config (`EDConfig::DataMgr<T>` +
  `StorageLittleFS<T>` persisting raw structs), ed-utils (`EDUtils::StateMgr<T>` +
  producers, `Nullable`, `formatString`, `buildJson`, `LOGx`), ed-ha (`EDHA::DiscoveryMgr`
  → HA MQTT discovery), ed-healthcheck (`Ready` interface, `registerService()`),
  ed-network (`EDNetwork::NetworkMgr` + `EDNetwork::NetworkApi` — REST endpoints for Wi-Fi/AP
  settings, scan and status; its `frontend/` package provides the `edn-network-ui` web
  components used by the Network tab; the library targets the
  ESP32Async/ESPAsyncWebServer fork and core ≥2.0.17 `ETHClass` API
  (`linkSpeed()`/`fullDuplex()`)). When their APIs are unclear, read the fetched sources under
  `.pio/libdeps/` instead of guessing.
- Domain object lifecycle everywhere: constructor takes injected deps (pointers/refs) →
  `init(config…)` → periodic `update()` → `ready()` for healthcheck.
- Boiler AUTO mode (`Boiler::updateAutoMode()`, 5-min cadence): quadratic weather curve scaled by config `K` (`a=-0.21K-0.06, b=6.04K+1.98, c=-5.06K+18.06, x=-0.2·Tout+5`) plus parallel offset `B`, plus a PI trim on the mean error of working rooms (`P` = proportional gain, `I` = integral gain per second; the integral persists in `BoilerState.autoTrim`; trim clamped ±10 °C). The setpoint is clamped to `[BoilerConfig.minSetPoint, 80]` in AUTO mode — `minSetPoint` (default 50) is the non-condensing-boiler floor — while the manual setpoint path is clamped to a fixed `[30, 80]` and HA discovery climate `minTemp` is the driver-declared minimum with fallback 30. CH interlock: central heating is disabled after 2 consecutive ticks with no working room demanding heat (room error > 0.2 °C) and re-enabled on demand no earlier than 10 min after disable. Rooms keep computing PID and report `RoomStatus` to the boiler while CH is off; valves fail safe to 100% while CH is disabled; the MQTT/HA `valveOpening` sensor reports the logical PID value, not the fail-safe actuation value.
- Persistence: config and state live as **raw binary structs** in LittleFS
  (`/config.bin`, `/boiler.bin`, `/room_<i>.bin`). Renaming, reordering or re-typing
  struct fields breaks stored data: bump `CURRENT_VERSION` in `src/config.h` and handle
  migration/defaults (the v2→v3 bump has a boot-time migration in `src/migration/`:
  legacy files are detected by exact size + CRC16 before `DataMgr::load()` and
  re-applied after its default reset). Config structs use fixed `char[]` arrays —
  fill them with `snprintf`/`strcpy` like existing code, never `std::string` assignment.
- Messaging: state publishes via `StateMgr<T>` + producer to MQTT (`prometey/<chip>/state`,
  per-room topics from `RoomConfig`); commands arrive on `prometey/<chip>/set` and room
  command topics; HTTP JSON API under `/api/*` serves the local web UI in `data/`.
- Timing: use `esp_timer_get_time()` (µs, 64-bit) and stored `_last*Time` fields as
  existing modules do — `millis()` is not used for long uptimes.

## HTTP API

ESPAsyncWebServer on port 80, no authentication (LAN-only device; the web UI in
`data/` and raw config are served without credentials). Static files: LittleFS root
at `/` (default `index.html`) — which also serves **`/config.bin`**, the raw config
binary containing Wi-Fi/MQTT credentials. JSON responses use `application/json`.

Common semantics for all mutating endpoints: `200` with `{}` on success, `422` with
`{"message": "…"}` on validation error, `500` with `{"message": "…"}` if LittleFS
store fails. MQTT/room/valve/boiler config changes are persisted immediately but only take
effect after `POST /api/reboot` (the UI does this automatically). Wi-Fi/network
settings are owned by ed-network's `NetworkApi` (`/api/network/settings`): persisted
via its `onSettingsChanged` callback into `Config.network` + LittleFS and applied live
via `applyConfig()` — no reboot needed; success replies 200 with the updated settings
JSON (not `{}`), validation errors 400 `{"error": "…"}`, a failed store 500
`{"error": "settings rejected by controller"}`.

```
GET    /api/settings       → {mqttHost, mqttPort, mqttLogin, mqttPassword,
                              mqttIsHADiscovery, mqttHADiscoveryPrefix,
                              mqttCommandTopic, mqttStateTopic}
GET    /api/network/settings  → ed-network NetworkApi: {isAPMode, wifiAPSSID, wifiAPHasPassword,
                             wifiSSID, hasWifiPassword, hasWifiAPPassword} — plaintext passwords
                             are never returned
POST   /api/network/settings  → ed-network NetworkApi: JSON body (or urlencoded args), ≤2 KB;
                             patch keys (all optional, omitted = keep, empty string = clear):
                             wifiSSID(≤32), wifiPassword(≤64), wifiAPSSID(≤32),
                             wifiAPPassword(≥8 when wifiAPHasPassword=true), isAPMode,
                             wifiAPHasPassword; wifiSSID required when !isAPMode, wifiAPSSID
                             required when isAPMode; 200 with refreshed settings, applies live
                             (applyConfig), no reboot
GET    /api/network/status    → {mode("ethernet"|"wifi"|"wifi_ap"), connected, wifiConnected,
                             ethernetConnected, fallbackAP, ssid/rssi/ip/mac (present when the
                             Wi-Fi STA is connected), ap:{ssid, ip, stations} (AP mode),
                             eth:{ip, mac, linkUp, speed(mbps), duplex(1=full)}}
POST   /api/settings/mqtt  → urlencoded body: host, port, login, password,
                             haDiscoveryPrefix are hasParam-checked; stateTopic,
                             commandTopic, mqttIsHADiscovery("true"/"false") are read
                             WITHOUT hasParam — missing stateTopic/commandTopic
                             null-deref crashes the device. Reboot to apply
GET    /api/status         → {freeHeap, uptime, lastResetReason}
GET    /api/config         → raw /config.bin download (application/octet-stream,
                             Content-Disposition attachment); HTTP 404 when
                             /config.bin is absent
POST   /api/config         → raw /config.bin body (application/octet-stream, NO
                             multipart/urlencoded); firmware validates
                             size == sizeof(Config)+2, version byte == CURRENT_VERSION
                             and the CRC16 trailer, then atomically replaces
                             /config.bin; replies {} and REBOOTS the device immediately
GET    /api/config/backup  → STORE zip of existing /config.bin, /boiler.bin,
                             /room_<i>.bin (flat member names); 404 JSON when none;
                             attachment name prometey-config.zip
POST   /api/config/backup  → raw zip body (application/octet-stream, ≤16 KB, no
                             multipart); strict STORE-only parse; whitelisted members
                             validated (size, config version byte, CRC32, ed-config
                             CRC16); all-or-nothing commit to temp files then atomic
                             renames; replies {} and REBOOTS on success
POST   /api/reboot         → replies {}, then ESP.restart()
GET    /api/wifi/list      → ed-network NetworkApi: 200 {networks:[{ssid, rssi, channel,
                             encrypted}]} or 500 {"error": "scan failed"}

GET    /api/settings/boiler        → {driver, modbusAddress, modbusSpeed, K, B, P, I,
                                      minSetPoint, outdoorSensor, outdoorSensorMqttTopic,
                                      outdoorSensorMqttField}
POST   /api/settings/boiler/update → urlencoded body: driver (0=no_select,
                                     1=ECTOControlV2 → modbusAddress, modbusSpeed
                                     required), weather-curve floats K, B, P, I
                                     required, minSetPoint required (30..80, floor for
                                     AUTO-mode CH setpoint writes; manual writes use a
                                     fixed [30, 80]), outdoorSensor
                                     (0=no_select, 1=MQTT → outdoorSensorMqttTopic,
                                     outdoorSensorMqttField required)
DELETE /api/boiler/state           → removes /boiler.bin from LittleFS, reboots

GET  /api/settings/rooms   → {rooms:[{id, enabled, temperatureSensorType, name,
                           mqttCommandTopic, mqttStateTopic,
                           mqttTemperatureSensorTopic, mqttTemperatureSensorField,
                           kP, kI, kD, I, prevError, prevTime,
                           valveOpeningPercent}]} — runtime PID fields appear only
                           for rooms instantiated at setup()
POST /api/settings/room    → raw JSON body (not urlencoded; parsed via the chunked
                             upload callback, single-chunk assumed): id(0..7),
                             enabled, temperatureSensorType (1=MQTT; then
                             mqttTemperatureSensorTopic ≤64 required,
                             mqttTemperatureSensorField ≤16), name(≤32),
                             mqttCommandTopic(≤64), mqttStateTopic(≤64),
                             kP/kI/kD ≥ 0. Replaces the ENTIRE RoomConfig at
                             rooms[id]; omitted optional fields reset to defaults.
                             Enabling/disabling rooms needs reboot (init in setup)
DELETE /api/rooms/state    → removes all /room_<i>.bin files, reboots

GET  /api/settings/valves  → {valves:[{enabled, type, channel, fullTravelTime,
                           windowTime, roomID}]}
POST /api/settings/valve   → raw JSON body: id(0..8), enabled, type (1=PCF8574 →
                             channel 0..15 required), fullTravelTime, windowTime
                             (ms), roomID(0..7); same whole-entry-replace and
                             reboot semantics as rooms

GET /healthcheck/healty → {"healty":true}  (note: path and key are misspelled in
                          ed-healthcheck — "healty"; preserve the typo when calling)
GET /healthcheck/ready  → {"ready":bool, "message":…}; HTTP 200 when ready,
                          500 otherwise (aggregates EDHealthCheck::Ready services)
```

Enum codes used in API payloads (see `src/boiler/enums.h`, `src/room/enums.h`,
`src/relay/enum.h`): `BoilerDriver` 0=NO_SELECT 1=ECTOCONTROLV2;
`BoilerOutdoorSensor` 0=NO_SELECT 1=MQTT;
`RoomTemperatureSensorType` 0=NONE 1=MQTT; `RelayType` 0=NONE 1=PCF8574.

## Conventions

- Headers: `#pragma once`. Classes `PascalCase`, methods/variables `camelCase`, private
  members `_camelCase`, macros/constants `SCREAMING_SNAKE`.
- Logging: `LOGD/LOGI/LOGW/LOGE(tag, fmt, …)` from ed-utils `log/log.h`; short module tag
  (`"main"`, `"setup"`, …).
- Allocation happens in `setup()` only (`new` for rooms/valves/state managers into
  `std::list`s); never `new` in `loop()`.
- New inbound MQTT feature: subclass `EDMQTT::Consumer`, `init(topic)`,
  `mqtt.subscribe(&consumer)` in `setup()`. New periodic MQTT state: producer +
  `StateMgr<T>`. New HTTP endpoint: handler in `src/web/`.
- Comments, identifiers and commit messages are in English, imperative subject line
  ("Implement …", "Fix …", "Change …").
- No lint/format config exists — match the style of the file you edit.

## Gotchas

- `src/command/сommand_consumer.cpp` starts with a **Cyrillic "с"**. Copy the name from
  `ls`; typing a Latin one breaks the build.
- In `platformio.ini`, `build_flags =` in an extending env **replaces** the parent list
  (no append semantics); keep that in mind when adding envs.
- Build runs with `-Wshadow` and `CORE_DEBUG_LEVEL=5`; new warnings are failures.
- `setup()` default-config lambda sets `config->rooms[0].id` inside the loop (looks like
  a pre-existing bug for `rooms[i]`). Do not silently change behavior in unrelated work.
- OTA password `somestrongpassword` is hardcoded (`main.cpp`, `platformio.ini`) and the
  remote log host `192.168.1.2:5555` is hardcoded and marked `// tmp`. Never add real
  credentials to the repo.
- `.pio/`, `.vscode/` generated files and `.DS_Store` are gitignored; don't commit them.

## Definition of Done

- `pio run -e kc868a16` passes with no new warnings.
- Web/`data/` changes: note that `-t uploadfs` is required to take effect on device,
  and that uploading the filesystem **erases all of LittleFS — `/config.bin`,
  `/boiler.bin` and every `/room_<i>.bin`** — so take a full backup first (Backup tab →
  Download full backup, `GET /api/config/backup`).
- Any flash/OTA/Home-Assistant-visible behavior needs real hardware — report what was
  and was not verified.
