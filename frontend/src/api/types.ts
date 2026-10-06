/**
 * Response and request shapes for the Prometey device HTTP API.
 *
 * These mirror the firmware contracts in `src/web/handler.cpp` (and the
 * boiler/room/valve config structs). GET response interfaces match the JSON
 * the device actually emits; request payload interfaces are always the *full*
 * set of fields because the firmware replaces whole config entries.
 */

/** GET /api/settings */
export interface Settings {
  mqttHost: string;
  mqttPort: number;
  mqttLogin: string;
  mqttPassword: string;
  mqttIsHADiscovery: boolean;
  mqttHADiscoveryPrefix: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
}

/** GET /api/status */
export interface DeviceStatus {
  freeHeap: number;
  uptime: number;
  lastResetReason: string;
}

/** GET /api/settings/boiler */
export interface BoilerSettings {
  driver: number;
  modbusAddress: number;
  modbusSpeed: number;
  K: number;
  B: number;
  P: number;
  I: number;
  minSetPoint: number;
  outdoorSensor: number;
  outdoorSensorMqttTopic: string;
  outdoorSensorMqttField: string;
}

/** One entry of GET /api/settings/rooms. */
export interface RoomSettings {
  id: number;
  enabled: boolean;
  temperatureSensorType: number;
  name: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
  mqttTemperatureSensorTopic: string;
  mqttTemperatureSensorField: string;
  kP: number;
  kI: number;
  kD: number;
  // Runtime PID state, present only when the room was instantiated at boot.
  I?: number;
  prevError?: number;
  prevTime?: number;
  valveOpeningPercent?: number;
}

/** GET /api/settings/rooms */
export interface RoomsResponse {
  rooms: RoomSettings[];
}

/** One entry of GET /api/settings/valves. Array index is the valve id. */
export interface ValveSettings {
  enabled: boolean;
  type: number;
  channel: number;
  fullTravelTime: number;
  windowTime: number;
  roomID: number;
}

/** GET /api/settings/valves */
export interface ValvesResponse {
  valves: ValveSettings[];
}

/** GET /healthcheck/healty (misspelled intentionally by the firmware lib). */
export interface HealthResponse {
  healty: boolean;
}

/** GET /healthcheck/ready */
export interface ReadyResponse {
  ready: boolean;
  message: string;
}

/**
 * POST /api/settings/mqtt.
 *
 * All eight fields are mandatory at runtime: the firmware reads
 * `stateTopic`, `commandTopic` and `mqttIsHADiscovery` without presence checks
 * and crashes if any is absent, so the client always sends them.
 */
export interface MqttPayload {
  host: string;
  port: number;
  login: string;
  password: string;
  haDiscoveryPrefix: string;
  mqttIsHADiscovery: boolean;
  stateTopic: string;
  commandTopic: string;
}

/** POST /api/settings/boiler/update — every field is always sent. */
export interface BoilerPayload {
  driver: number;
  modbusAddress: number;
  modbusSpeed: number;
  K: number;
  B: number;
  P: number;
  I: number;
  minSetPoint: number;
  outdoorSensor: number;
  outdoorSensorMqttTopic: string;
  outdoorSensorMqttField: string;
}

/** POST /api/settings/room (raw JSON) — whole-entry replace. */
export interface RoomPayload {
  id: number;
  enabled: boolean;
  temperatureSensorType: number;
  name: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
  mqttTemperatureSensorTopic: string;
  mqttTemperatureSensorField: string;
  kP: number;
  kI: number;
  kD: number;
}

/** POST /api/settings/valve (raw JSON) — whole-entry replace. */
export interface ValvePayload {
  id: number;
  enabled: boolean;
  type: number;
  channel: number;
  fullTravelTime: number;
  windowTime: number;
  roomID: number;
}

/** Successful response data for mutating endpoints (the device replies `{}`). */
export type EmptyObject = Record<string, never>;
