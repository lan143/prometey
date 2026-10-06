import type {
  BoilerPayload,
  BoilerSettings,
  DeviceStatus,
  EmptyObject,
  HealthResponse,
  MqttPayload,
  ReadyResponse,
  RoomPayload,
  RoomsResponse,
  Settings,
  ValvePayload,
  ValvesResponse,
} from './types';

/**
 * Client-side safety limits derived from the firmware contract.
 *
 * The firmware `strcpy`s into fixed char buffers with no length checks and
 * rejects some enum values, so pages must enforce *stricter* caps than the
 * nominal struct sizes (off-by-one) and always send the only savable enum
 * values. `null` means "no value is savable" for that field.
 */
export const LIMITS = {
  mqtt: {
    /** host must be 1..63 chars. */
    hostMin: 1,
    hostMax: 63,
    /** login/password may be empty but must be present. */
    loginMax: 31,
    passwordMax: 31,
    /** HA discovery prefix must be 1..63 chars. */
    haDiscoveryPrefixMin: 1,
    haDiscoveryPrefixMax: 63,
    /** state/command topics must be 1..63 chars or the device crashes. */
    topicMin: 1,
    topicMax: 63,
  },
  boiler: {
    /** outdoorSensorMqttTopic is strcpy'd into char[64] with no check. */
    topicMax: 63,
    /** outdoorSensorMqttField is strcpy'd into char[16] with no check. */
    fieldMax: 15,
    /** Only ECTOControlV2 can be saved; server rejects 0. */
    savableDrivers: [1],
    /** 0 = no select, 1 = MQTT. Only MQTT (1) can be saved; server rejects 0. */
    savableOutdoorSensors: [1],
  },
  room: {
    count: 8,
    idMin: 0,
    idMax: 7,
    /** name is strcpy'd into char[32] with no check. */
    nameMax: 31,
    /** topics are strcpy'd into char[64] with no check. */
    topicMax: 63,
    /** temperature field is strcpy'd into char[16] with no check. */
    temperatureFieldMax: 15,
    /** Only MQTT (1) passes validation, even for disabled rooms. */
    savableTemperatureSensorTypes: [1],
    pidMin: 0,
  },
  valve: {
    count: 9,
    idMin: 0,
    idMax: 8,
    channelMin: 0,
    channelMax: 15,
    roomIdMin: 0,
    roomIdMax: 7,
    fullTravelTimeMin: 0,
    fullTravelTimeMax: 600000,
    windowTimeMin: 0,
    windowTimeMax: 600000,
    /** Only PCF8574 (1) passes validation; 0 = no select is rejected. */
    savableTypes: [1],
  },
} as const;

/** Failure side of every API call. */
export interface ApiFailure {
  ok: false;
  /** HTTP status when a response was received; absent for network failures. */
  status?: number;
  message: string;
}

/** Result of every API call. */
export type ApiResult<T> = { ok: true; data: T } | ApiFailure;

/** Result of a mutating call; the device replies `{}` on success. */
export type ActionResult = ApiResult<EmptyObject>;

const EMPTY_CONFIG_MESSAGE =
  'Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)';
const EMPTY_BODY_MESSAGE = 'Device returned an empty response.';
const NETWORK_MESSAGE =
  'Could not reach the device. Check that you are connected to its network and try again.';

const EMPTY_OBJECT: EmptyObject = {};

function networkFailure(): ApiFailure {
  return { ok: false, message: NETWORK_MESSAGE };
}

function messageFromBody(text: string): string | undefined {
  try {
    const parsed: unknown = JSON.parse(text);
    if (parsed && typeof parsed === 'object' && 'message' in parsed) {
      const value = (parsed as { message?: unknown }).message;
      if (typeof value === 'string' && value) {
        return value;
      }
    }
  } catch {
    // Not JSON; caller falls back to a generic message.
  }
  return undefined;
}

async function failureFromResponse(res: Response): Promise<ApiFailure> {
  let message = `Request failed (HTTP ${res.status}).`;
  try {
    const text = await res.text();
    if (text) {
      message = messageFromBody(text) ?? message;
    }
  } catch {
    // Keep the generic message.
  }
  return { ok: false, status: res.status, message };
}

/** GET a JSON endpoint. `emptyMessage` is used for empty/unparseable 200s. */
async function getJson<T>(
  path: string,
  emptyMessage: string,
): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(path, { headers: { Accept: 'application/json' } });
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text: string;
  try {
    text = await res.text();
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (!text.trim()) {
    return { ok: false, status: res.status, message: emptyMessage };
  }

  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: res.status, message: emptyMessage };
  }
}

/** Send a mutating request; a 200 is success even with an empty body. */
async function send(
  path: string,
  init: RequestInit,
): Promise<ActionResult> {
  let res: Response;
  try {
    res = await fetch(path, init);
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text = '';
  try {
    text = await res.text();
  } catch {
    return { ok: true, data: EMPTY_OBJECT };
  }

  if (!text.trim()) {
    return { ok: true, data: EMPTY_OBJECT };
  }

  try {
    const parsed = JSON.parse(text) as unknown;
    return {
      ok: true,
      data:
        parsed && typeof parsed === 'object'
          ? (parsed as EmptyObject)
          : EMPTY_OBJECT,
    };
  } catch {
    return { ok: true, data: EMPTY_OBJECT };
  }
}

function sendForm(path: string, body: URLSearchParams): Promise<ActionResult> {
  return send(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}

function sendJson(path: string, body: unknown): Promise<ActionResult> {
  return send(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

// --- runtime guards ---------------------------------------------------------
// These throw before a request can reach the device with a payload that would
// overflow a firmware buffer, be silently malformed, or crash the device.

function requireString(
  value: unknown,
  field: string,
  max: number,
  allowEmpty = false,
): string {
  if (typeof value !== 'string') {
    throw new Error(`${field} is required.`);
  }
  if (!allowEmpty && value.length === 0) {
    throw new Error(`${field} must not be empty.`);
  }
  if (value.length > max) {
    throw new Error(`${field} must be at most ${max} characters.`);
  }
  return value;
}

function requireNumber(
  value: unknown,
  field: string,
  min: number,
  max: number,
): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`${field} must be a number.`);
  }
  if (value < min || value > max) {
    throw new Error(`${field} must be between ${min} and ${max}.`);
  }
  return value;
}

function requireBoolean(value: unknown, field: string): boolean {
  if (typeof value !== 'boolean') {
    throw new Error(`${field} must be true or false.`);
  }
  return value;
}

// --- reads ------------------------------------------------------------------

/** GET /api/settings */
export function getSettings(): Promise<ApiResult<Settings>> {
  return getJson<Settings>('/api/settings', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/settings/boiler */
export function getBoilerSettings(): Promise<ApiResult<BoilerSettings>> {
  return getJson<BoilerSettings>('/api/settings/boiler', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/settings/rooms */
export function getRooms(): Promise<ApiResult<RoomsResponse>> {
  return getJson<RoomsResponse>('/api/settings/rooms', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/settings/valves */
export function getValves(): Promise<ApiResult<ValvesResponse>> {
  return getJson<ValvesResponse>('/api/settings/valves', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/status */
export function getStatus(): Promise<ApiResult<DeviceStatus>> {
  return getJson<DeviceStatus>('/api/status', EMPTY_BODY_MESSAGE);
}

/** GET /healthcheck/healty (misspelled path and key intentionally). */
export function getHealth(): Promise<ApiResult<HealthResponse>> {
  return getJson<HealthResponse>('/healthcheck/healty', EMPTY_BODY_MESSAGE);
}

/**
 * GET /healthcheck/ready. Returns HTTP 500 with `{ready:false,message}` while
 * the device is not ready; that surfaces here as `ok:false` with the reason.
 */
export function getReady(): Promise<ApiResult<ReadyResponse>> {
  return getJson<ReadyResponse>('/healthcheck/ready', EMPTY_BODY_MESSAGE);
}

/**
 * GET /api/config — download the device's raw `/config.bin`.
 *
 * The bytes are the raw `Config` struct plus a 2-byte little-endian CRC16
 * trailer. They are intentionally opaque to the client: never parse or
 * size-check them here, because the binary layout changes with the firmware
 * version. HTTP 404 with no body means the device has no saved config yet.
 */
export async function downloadConfig(): Promise<ApiResult<Uint8Array>> {
  let res: Response;
  try {
    res = await fetch('/api/config', {
      headers: { Accept: 'application/octet-stream' },
    });
  } catch {
    return networkFailure();
  }

  if (res.status === 404) {
    return {
      ok: false,
      status: 404,
      message: 'The device has no saved config yet (no /config.bin on flash).',
    };
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let bytes: Uint8Array;
  try {
    bytes = new Uint8Array(await res.arrayBuffer());
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (bytes.byteLength === 0) {
    return {
      ok: false,
      status: res.status,
      message: 'Device returned an empty config file.',
    };
  }

  return { ok: true, data: bytes };
}

/**
 * GET /api/config/backup — download a STORE zip of every persisted device
 * file (`config.bin`, `boiler.bin`, `room_0.bin`..`room_7.bin`; only files
 * present on flash are included). The archive is intentionally opaque to the
 * client: never parse or size-check it here, because the member layouts change
 * with the firmware version. HTTP 404 means the device has no saved files yet.
 */
export async function downloadBackup(): Promise<ApiResult<Uint8Array>> {
  let res: Response;
  try {
    res = await fetch('/api/config/backup', {
      headers: { Accept: 'application/zip' },
    });
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    if (res.status === 404) {
      let message = 'Device has no config files yet.';
      try {
        const text = await res.text();
        if (text) {
          message = messageFromBody(text) ?? message;
        }
      } catch {
        // Keep the fallback message.
      }
      return { ok: false, status: 404, message };
    }
    return failureFromResponse(res);
  }

  let bytes: Uint8Array;
  try {
    bytes = new Uint8Array(await res.arrayBuffer());
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (bytes.byteLength === 0) {
    return {
      ok: false,
      status: res.status,
      message: 'Device returned an empty archive.',
    };
  }

  return { ok: true, data: bytes };
}

// --- writes -----------------------------------------------------------------

/**
 * POST /api/settings/mqtt — applies after reboot.
 *
 * Always sends all eight parameters. The firmware dereferences
 * `stateTopic`, `commandTopic` and `mqttIsHADiscovery` without presence
 * checks, so missing values would crash the device; invalid input throws
 * client-side instead of being sent.
 */
export function postMqtt(payload: MqttPayload): Promise<ActionResult> {
  const host = requireString(payload.host, 'MQTT host', LIMITS.mqtt.hostMax);
  const port = requireNumber(payload.port, 'MQTT port', 1, 65535);
  const login = requireString(
    payload.login,
    'MQTT login',
    LIMITS.mqtt.loginMax,
    true,
  );
  const password = requireString(
    payload.password,
    'MQTT password',
    LIMITS.mqtt.passwordMax,
    true,
  );
  const haDiscoveryPrefix = requireString(
    payload.haDiscoveryPrefix,
    'HA discovery prefix',
    LIMITS.mqtt.haDiscoveryPrefixMax,
  );
  const mqttIsHADiscovery = requireBoolean(
    payload.mqttIsHADiscovery,
    'HA discovery flag',
  );
  const stateTopic = requireString(
    payload.stateTopic,
    'State topic',
    LIMITS.mqtt.topicMax,
  );
  const commandTopic = requireString(
    payload.commandTopic,
    'Command topic',
    LIMITS.mqtt.topicMax,
  );

  const body = new URLSearchParams();
  body.set('host', host);
  body.set('port', String(port));
  body.set('login', login);
  body.set('password', password);
  body.set('haDiscoveryPrefix', haDiscoveryPrefix);
  body.set('mqttIsHADiscovery', mqttIsHADiscovery ? 'true' : 'false');
  body.set('stateTopic', stateTopic);
  body.set('commandTopic', commandTopic);
  return sendForm('/api/settings/mqtt', body);
}

/**
 * POST /api/settings/boiler/update — applies after reboot.
 *
 * The firmware rejects driver=0 ("No select") and outdoorSensor=0 ("No")
 * with HTTP 422, so this function requires driver=1 (ECTOControlV2) and
 * outdoorSensor=1 (MQTT) before sending. MQTT topic and field are required.
 */
export function postBoilerUpdate(payload: BoilerPayload): Promise<ActionResult> {
  const driver = requireNumber(payload.driver, 'Boiler driver', 0, 1);
  const modbusAddress = requireNumber(
    payload.modbusAddress,
    'Modbus address',
    0,
    255,
  );
  const modbusSpeed = requireNumber(payload.modbusSpeed, 'Modbus speed', 0, 1_000_000);
  const k = requireNumber(payload.K, 'Weather curve K', -1_000_000, 1_000_000);
  const b = requireNumber(payload.B, 'Weather curve B', -1_000_000, 1_000_000);
  const p = requireNumber(payload.P, 'Weather curve P', -1_000_000, 1_000_000);
  const i = requireNumber(payload.I, 'Weather curve I', -1_000_000, 1_000_000);
  const minSetPoint = requireNumber(payload.minSetPoint, 'Minimum setpoint', 30, 80);
  if (driver !== 1) {
    throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');
  }

  const outdoorSensor = requireNumber(
    payload.outdoorSensor,
    'Outdoor sensor',
    0,
    1,
  );

  if (outdoorSensor !== 1) {
    throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');
  }

  const topic = requireString(
    payload.outdoorSensorMqttTopic ?? '',
    'Outdoor sensor topic',
    LIMITS.boiler.topicMax,
    true,
  );
  const field = requireString(
    payload.outdoorSensorMqttField ?? '',
    'Outdoor sensor field',
    LIMITS.boiler.fieldMax,
    true,
  );

  if (outdoorSensor === 1 && topic.length === 0) {
    throw new Error('Outdoor sensor topic is required when MQTT is selected.');
  }
  if (outdoorSensor === 1 && field.length === 0) {
    throw new Error('Outdoor sensor field is required when MQTT is selected.');
  }

  const body = new URLSearchParams();
  body.set('driver', String(driver));
  body.set('modbusAddress', String(modbusAddress));
  body.set('modbusSpeed', String(modbusSpeed));
  body.set('K', String(k));
  body.set('B', String(b));
  body.set('P', String(p));
  body.set('I', String(i));
  body.set('minSetPoint', String(minSetPoint));
  body.set('outdoorSensor', String(outdoorSensor));
  body.set('outdoorSensorMqttTopic', topic);
  body.set('outdoorSensorMqttField', field);
  return sendForm('/api/settings/boiler/update', body);
}

/**
 * POST /api/settings/room — raw JSON, whole-entry replace at `rooms[id]`.
 *
 * Every field is always serialized because omitted fields reset to defaults.
 * `temperatureSensorType` must be MQTT (1): the firmware rejects 0 even for
 * disabled rooms. Applies after reboot.
 */
export function postRoom(payload: RoomPayload): Promise<ActionResult> {
  const id = requireNumber(payload.id, 'Room id', LIMITS.room.idMin, LIMITS.room.idMax);
  const enabled = requireBoolean(payload.enabled, 'Room enabled');
  const temperatureSensorType = requireNumber(
    payload.temperatureSensorType,
    'Temperature sensor type',
    1,
    1,
  );
  const name = requireString(payload.name, 'Room name', LIMITS.room.nameMax);
  const mqttCommandTopic = requireString(
    payload.mqttCommandTopic,
    'Room command topic',
    LIMITS.room.topicMax,
  );
  const mqttStateTopic = requireString(
    payload.mqttStateTopic,
    'Room state topic',
    LIMITS.room.topicMax,
  );
  const mqttTemperatureSensorTopic = requireString(
    payload.mqttTemperatureSensorTopic,
    'Temperature topic',
    LIMITS.room.topicMax,
  );
  const mqttTemperatureSensorField = requireString(
    payload.mqttTemperatureSensorField,
    'Temperature field',
    LIMITS.room.temperatureFieldMax,
  );
  const kP = requireNumber(payload.kP, 'Room kP', LIMITS.room.pidMin, 1_000_000);
  const kI = requireNumber(payload.kI, 'Room kI', LIMITS.room.pidMin, 1_000_000);
  const kD = requireNumber(payload.kD, 'Room kD', LIMITS.room.pidMin, 1_000_000);

  return sendJson('/api/settings/room', {
    id,
    enabled,
    temperatureSensorType,
    name,
    mqttCommandTopic,
    mqttStateTopic,
    mqttTemperatureSensorTopic,
    mqttTemperatureSensorField,
    kP,
    kI,
    kD,
  });
}

/**
 * POST /api/settings/valve — raw JSON, whole-entry replace at `valves[id]`.
 *
 * `type` must be PCF8574 (1): the firmware rejects 0. Applies after reboot.
 */
export function postValve(payload: ValvePayload): Promise<ActionResult> {
  const id = requireNumber(payload.id, 'Valve id', LIMITS.valve.idMin, LIMITS.valve.idMax);
  const enabled = requireBoolean(payload.enabled, 'Valve enabled');
  const type = requireNumber(payload.type, 'Valve type', 1, 1);
  const channel = requireNumber(
    payload.channel,
    'Valve channel',
    LIMITS.valve.channelMin,
    LIMITS.valve.channelMax,
  );
  const fullTravelTime = requireNumber(
    payload.fullTravelTime,
    'Full travel time',
    LIMITS.valve.fullTravelTimeMin,
    LIMITS.valve.fullTravelTimeMax,
  );
  const windowTime = requireNumber(
    payload.windowTime,
    'Window time',
    LIMITS.valve.windowTimeMin,
    LIMITS.valve.windowTimeMax,
  );
  const roomID = requireNumber(
    payload.roomID,
    'Room id',
    LIMITS.valve.roomIdMin,
    LIMITS.valve.roomIdMax,
  );

  return sendJson('/api/settings/valve', {
    id,
    enabled,
    type,
    channel,
    fullTravelTime,
    windowTime,
    roomID,
  });
}

/**
 * POST /api/config — replace `/config.bin` with a raw config file.
 *
 * The firmware streams the body straight to flash, so it must be the raw file
 * bytes with `Content-Type: application/octet-stream` (no multipart, no
 * urlencoded wrapper). On success the device replies `{}` and then reboots
 * immediately, so the caller must show the reboot-recovery overlay.
 */
export function uploadConfig(data: Uint8Array): Promise<ActionResult> {
  if (data.byteLength === 0) {
    throw new Error('Cannot upload an empty config file.');
  }

  // Copy into a fresh ArrayBuffer so the request body is a plain BufferSource
  // rather than a view over a possibly larger/shared underlying buffer.
  const body = new ArrayBuffer(data.byteLength);
  new Uint8Array(body).set(data);

  return send('/api/config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    body,
  });
}

/**
 * POST /api/config/backup — replace the device's persisted files with a raw
 * STORE zip archive.
 *
 * The firmware parses the zip strictly (STORE-only, no data descriptors/zip64/
 * encryption), whitelists members, and validates each member's size, config
 * version byte, zip CRC32 and ed-config CRC16 before committing anything. The
 * body must be the raw archive bytes with `Content-Type:
 * application/octet-stream` (no multipart). Validation is all-or-nothing: a
 * rejected archive changes nothing and never reboots. On success the device
 * replies `{}` and then reboots immediately, so the caller must show the
 * reboot-recovery overlay.
 */
export function uploadBackup(data: Uint8Array): Promise<ActionResult> {
  if (data.byteLength === 0) {
    throw new Error('Cannot upload an empty archive.');
  }

  // Copy into a fresh ArrayBuffer so the request body is a plain BufferSource
  // rather than a view over a possibly larger/shared underlying buffer.
  const body = new ArrayBuffer(data.byteLength);
  new Uint8Array(body).set(data);

  return send('/api/config/backup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    body,
  });
}

/** DELETE /api/boiler/state — the device deletes /boiler.bin and reboots. */
export function deleteBoilerState(): Promise<ActionResult> {
  return send('/api/boiler/state', { method: 'DELETE' });
}

/** DELETE /api/rooms/state — the device deletes /room_<i>.bin and reboots. */
export function deleteRoomsState(): Promise<ActionResult> {
  return send('/api/rooms/state', { method: 'DELETE' });
}

/** POST /api/reboot — the device replies `{}` then restarts. */
export function reboot(): Promise<ActionResult> {
  return send('/api/reboot', { method: 'POST' });
}
