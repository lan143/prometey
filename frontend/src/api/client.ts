import type {
  BoilerPayload,
  BoilerSettings,
  ControlBoilerCommand,
  ControlRoomCommand,
  ControlSnapshot,
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

function requireOneOf<T extends string>(
  value: unknown,
  field: string,
  allowed: ReadonlyArray<T>,
): T {
  if (typeof value !== 'string' || !(allowed as ReadonlyArray<string>).includes(value)) {
    throw new Error(`${field} must be one of: ${allowed.join(', ')}.`);
  }
  return value as T;
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

/** GET /api/control — live boiler and instantiated-room state. */
export function getControl(): Promise<ApiResult<ControlSnapshot>> {
  return getJson<ControlSnapshot>('/api/control', EMPTY_BODY_MESSAGE);
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
 * outdoorSensor=1 (MQTT) before sending. MQTT topic is required; the field is
 * optional and an empty field means the whole payload is parsed as a float.
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
    payload.mqttTemperatureSensorField.trim(),
    'Temperature field',
    LIMITS.room.temperatureFieldMax,
    true,
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
 * POST /api/control/boiler — applies live (no reboot).
 *
 * Every field is optional, but at least one must be present. Manual CH
 * setpoints are ignored by the firmware while the mode is AUTO and are clamped
 * to [30, 80]. The DHW setpoint range is driver-defined, so only finiteness is
 * enforced here and the firmware is the authority.
 */
export function postControlBoiler(
  payload: ControlBoilerCommand,
): Promise<ActionResult> {
  const body: ControlBoilerCommand = {};

  if (payload.centralHeatingMode !== undefined) {
    body.centralHeatingMode = requireOneOf(
      payload.centralHeatingMode,
      'Central heating mode',
      ['off', 'heat', 'auto'] as const,
    );
  }

  if (payload.centralHeatingSetPoint !== undefined) {
    body.centralHeatingSetPoint = requireNumber(
      payload.centralHeatingSetPoint,
      'Central heating setpoint',
      30,
      80,
    );
  }

  if (payload.hotWaterMode !== undefined) {
    body.hotWaterMode = requireOneOf(
      payload.hotWaterMode,
      'Hot water mode',
      ['off', 'gas'] as const,
    );
  }

  if (payload.hotWaterSetPoint !== undefined) {
    body.hotWaterSetPoint = requireNumber(
      payload.hotWaterSetPoint,
      'Hot water setpoint',
      -1_000_000,
      1_000_000,
    );
  }

  if (Object.keys(body).length === 0) {
    throw new Error('At least one boiler command field is required.');
  }

  return sendJson('/api/control/boiler', body);
}

/**
 * POST /api/control/room — applies live (no reboot).
 *
 * `mode: "off"` disables the room; any accepted non-off mode enables it. At
 * least one of `mode`/`setPoint` is required. Setpoints are clamped to [16, 32]
 * by the firmware.
 */
export function postControlRoom(
  payload: ControlRoomCommand,
): Promise<ActionResult> {
  const id = requireNumber(payload.id, 'Room id', LIMITS.room.idMin, LIMITS.room.idMax);
  if (!Number.isInteger(id)) {
    throw new Error('Room id must be an integer.');
  }

  const body: ControlRoomCommand = { id };

  if (payload.mode !== undefined) {
    body.mode = requireOneOf(payload.mode, 'Room mode', ['off', 'heat'] as const);
  }

  if (payload.setPoint !== undefined) {
    body.setPoint = requireNumber(payload.setPoint, 'Room setpoint', 16, 32);
  }

  if (payload.mode === undefined && payload.setPoint === undefined) {
    throw new Error('Room mode or setpoint is required.');
  }

  return sendJson('/api/control/room', body);
}

/** POST /api/reboot — the device replies `{}` then restarts. */
export function reboot(): Promise<ActionResult> {
  return send('/api/reboot', { method: 'POST' });
}
