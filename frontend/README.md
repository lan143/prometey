# Prometey frontend

Single-page Preact + TypeScript web panel for the Prometey ESP32 underfloor-heating
controller. The production build is written straight into the repository's `data/`
folder, which PlatformIO uploads to the device's LittleFS partition.

## Build

```sh
cd frontend
npm install
npm run build          # typecheck + vite build -> ../data
```

The build is destructive: `vite` uses `emptyOutDir: true` and `outDir: ../data`, so the
old `data/` contents are replaced. Then flash the filesystem:

```sh
pio run -e kc868a16 -t uploadfs
```

`pio run -e kc868a16 -t upload` only flashes firmware, not the web assets.

Other scripts:

- `npm run dev` — Vite dev server for layout work (no device proxy; open the device
  origin for real API calls).
- `npm run typecheck` — `tsc --noEmit`.

## Architecture

- Preact SPA, no client-side router. A single `index.html` plus hashed assets under
  `/assets/` are served verbatim by the firmware's `serveStatic("/", LittleFS, "/")`.
- Device API is same-origin under `/api/*` and `/healthcheck/*`. The frontend must never
  emit files at those paths — Vite's asset directory stays `/assets/`.
- `src/api/` holds the typed client for every device endpoint, including the firmware's
  known quirks (see below). Pages consume it; there is no state library.

## Pages

Each tab is a self-contained page under `src/pages/`; only the active tab is mounted, so
timers are torn down when the user navigates away.

- **Status** — device info (Wi-Fi state, free heap, humanized uptime, last reset reason)
  refreshed every 10 s, health/ready banners, a confirmed reboot action, and the
  deliberately honest Wi-Fi scan (the device route is a stub). After a reboot it polls
  `/healthcheck/healty` every 2 s for up to two minutes and then offers a panel reload.
  `GET /healthcheck/ready` returning HTTP 500 with a message is treated as the normal
  "not ready" state, not an error.
- **Wi-Fi & MQTT** — both forms prefilled from `GET /api/settings`, inline validation
  against `LIMITS`, reveal toggles for passwords, and all eight MQTT parameters always
  sent. Empty state/command topics are blocked inline because the firmware crashes
  without them. Every save shows the reboot-required notice.
- **Boiler** — driver/Modbus/weather-curve/outdoor-sensor form (saving requires driver
  ECTOControlV2 and outdoor sensor MQTT; "No select"/"No" are shown but rejected with
  HTTP 422) plus the destructive
  "delete `/boiler.bin`" action, which reboots the device by itself.
- **Rooms** — shows only the **enabled** rooms, but cards are still addressed by their
  original array position (the slot index, not the stored id); the editor normalizes
  the stored id on save, the temperature-sensor type is MQTT-only, and the editor
  always submits every field because the firmware replaces the whole entry. Adding
  writes into the lowest free slot (the first with `enabled:false`) and deleting only
  sets `enabled:false` while keeping the stored config — there is no per-entry delete
  endpoint, and both actions need a reboot. Each room editor also manages the valves
  bound to that room (the same whole-entry replace via `POST /api/settings/valve`:
  add uses the lowest free valve slot, edit keeps `roomID`/`enabled`/`type` fixed, and
  delete sets `enabled:false`). Runtime PID/valve values are shown only when the room
  was instantiated at boot. Empty factory fields are prefilled with suggested defaults
  (with a warning) so the required fields validate. The reset button deletes all
  `/room_*.bin` files and reboots the device.
- **Backup** — the primary flow downloads a full-backup zip (`prometey-config.zip`)
  containing every persisted file the device has: `config.bin`, `boiler.bin` and
  `room_0.bin`..`room_7.bin` (absent files are omitted). The fallback "Download
  config.bin only" button still fetches the raw `/config.bin`. Restore accepts a `.zip`
  full backup or a single `.bin` config (dispatched by file extension) and is capped at
  16 KB. For a `.zip`, the device parses it strictly (STORE-only, no data
  descriptors/zip64/encryption) and validates every member's exact size, config version
  byte, zip CRC32 and ed-config CRC16 **before committing anything** — validation is
  all-or-nothing, so a rejected archive leaves the device untouched. A successful
  restore replaces the files atomically and reboots the device immediately, so the
  shared reboot-recovery overlay is shown afterwards. The downloaded files are opaque
  to the browser (no client-side parsing or size hardcoding) and contain plaintext
  Wi-Fi/MQTT credentials, so they must be stored safely. Note that uploading the web UI
  itself (`pio run -e kc868a16 -t uploadfs`) erases LittleFS — `config.bin`,
  `boiler.bin` and all `room_*.bin` are gone — so download the full backup zip first.


## Hard constraints

- **No external resources.** The browser talks to a device with no internet access.
  No CDN scripts, web fonts, prefetch/preconnect hints, or remote images. Only bundled
  assets are referenced from `index.html`.
- **Size budget.** The LittleFS data partition is 1,441,792 bytes; keep the whole
  `data/` output well under 500 KB. Do not add heavy dependencies.
- **Device is memory-constrained.** Poll status at a modest interval (>= 5 s) and avoid
  large simultaneous requests.
- **4 KB JSON quirk.** `/api/settings/rooms` and `/api/settings/valves` serialize into a
  fixed 4 KB buffer. If it overflows the device returns HTTP 200 with an **empty body**.
  The client detects this and reports that names/topics are too long.
- **Off-by-one string caps.** The firmware `strcpy`s into `char[32]`/`char[64]`/`char[16]`
  buffers without length checks, so the client enforces stricter limits
  (`name <= 31`, topics `<= 63`, temperature field `<= 15`). See `src/api/client.ts`.
- **MQTT settings crash.** `POST /api/settings/mqtt` reads `stateTopic`, `commandTopic`
  and `mqttIsHADiscovery` without presence checks and crashes if any is missing. The
  client always sends all 8 fields.
- **Raw config endpoint.** `GET /api/config` returns the raw `/config.bin` bytes
  (`Content-Type: application/octet-stream`, `Content-Disposition: attachment`) and
  HTTP 404 when no config exists yet. `POST /api/config` takes the raw file bytes with
  `Content-Type: application/octet-stream` — **no multipart and no urlencoded wrapper** —
  and the device validates size/version/CRC16 before replacing the file and rebooting.
  Never parse the config bytes in the frontend or hardcode their length.
- **Config changes require a reboot.** Wi-Fi/MQTT/boiler/room/valve writes are persisted
  immediately but only take effect after `POST /api/reboot`. The UI shows a
  reboot-required notice after every save; the Status tab offers the reboot button, and
  `DELETE /api/boiler/state` / `DELETE /api/rooms/state` reboot the device on their own.

## Known device-quirk endpoints

- `GET /api/wifi/list` is registered but its handler is a commented-out stub and never
  responds. The client calls it through an `AbortController` timeout and surfaces a
  distinct "not implemented on device" result.
- `GET /healthcheck/healty` and its `healty` JSON key are misspelled in the firmware
  library on purpose; do not "correct" them.
