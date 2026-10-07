import { useCallback, useEffect, useState } from 'preact/hooks';
import { Fragment } from 'preact';
import {
  getRooms,
  getValves,
  postRoom,
  LIMITS,
} from '../api/client';
import type { RoomPayload, RoomSettings, ValveSettings } from '../api/types';
import { Banner } from '../components/Banner';
import { Button, DangerButton } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';
import { NeedsRebootNotice } from '../components/NeedsRebootNotice';
import { RoomValves } from '../components/RoomValves';
import { Select } from '../components/Select';

interface RoomForm {
  enabled: boolean;
  name: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
  mqttTemperatureSensorTopic: string;
  mqttTemperatureSensorField: string;
  kP: string;
  kI: string;
  kD: string;
}

interface RoomErrors {
  name?: string;
  mqttCommandTopic?: string;
  mqttStateTopic?: string;
  mqttTemperatureSensorTopic?: string;
  mqttTemperatureSensorField?: string;
  kP?: string;
  kI?: string;
  kD?: string;
}

function parseNumber(raw: string): number | null {
  if (raw.trim() === '') {
    return null;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}

function validateRoom(form: RoomForm): RoomErrors {
  const errors: RoomErrors = {};

  if (form.name.trim().length === 0) {
    errors.name = 'Name is required.';
  } else if (form.name.length > LIMITS.room.nameMax) {
    errors.name = `At most ${LIMITS.room.nameMax} characters.`;
  }

  const topics: ReadonlyArray<
    [keyof RoomErrors, string, string, number]
  > = [
    [
      'mqttCommandTopic',
      form.mqttCommandTopic,
      'Command topic',
      LIMITS.room.topicMax,
    ],
    ['mqttStateTopic', form.mqttStateTopic, 'State topic', LIMITS.room.topicMax],
    [
      'mqttTemperatureSensorTopic',
      form.mqttTemperatureSensorTopic,
      'Temperature topic',
      LIMITS.room.topicMax,
    ],
  ];
  for (const [key, raw, label, max] of topics) {
    if (raw.trim().length === 0) {
      errors[key] = `${label} is required.`;
    } else if (raw.length > max) {
      errors[key] = `At most ${max} characters.`;
    }
  }

  // Optional: empty means the firmware parses the whole MQTT payload as a float.
  if (form.mqttTemperatureSensorField.trim().length > LIMITS.room.temperatureFieldMax) {
    errors.mqttTemperatureSensorField = `At most ${LIMITS.room.temperatureFieldMax} characters.`;
  }

  const pid: ReadonlyArray<[keyof RoomErrors, string, string]> = [
    ['kP', form.kP, 'kP'],
    ['kI', form.kI, 'kI'],
    ['kD', form.kD, 'kD'],
  ];
  for (const [key, raw, label] of pid) {
    const value = parseNumber(raw);
    if (value === null || value < LIMITS.room.pidMin || value > 1_000_000) {
      errors[key] = `${label} must be a number greater than or equal to ${LIMITS.room.pidMin} and at most 1000000.`;
    }
  }

  return errors;
}

interface BuiltForm {
  form: RoomForm;
  usedPlaceholders: boolean;
}

function formFromRoom(room: RoomSettings, slot: number): BuiltForm {
  const name = room.name || `Room ${slot + 1}`;
  const mqttCommandTopic =
    room.mqttCommandTopic || `prometey/room${slot}/set`;
  const mqttStateTopic =
    room.mqttStateTopic || `prometey/room${slot}/state`;
  const mqttTemperatureSensorTopic =
    room.mqttTemperatureSensorTopic || `prometey/room${slot}/temperature`;
  const mqttTemperatureSensorField = room.mqttTemperatureSensorField;

  const usedPlaceholders =
    (room.name || '').trim().length === 0 ||
    (room.mqttCommandTopic || '').trim().length === 0 ||
    (room.mqttStateTopic || '').trim().length === 0 ||
    (room.mqttTemperatureSensorTopic || '').trim().length === 0;

  return {
    usedPlaceholders,
    form: {
      enabled: room.enabled,
      name,
      mqttCommandTopic,
      mqttStateTopic,
      mqttTemperatureSensorTopic,
      mqttTemperatureSensorField,
      kP: String(room.kP),
      kI: String(room.kI),
      kD: String(room.kD),
    },
  };
}

/**
 * Suggested defaults for an empty factory entry. The firmware's own defaults are
 * all-zero, which is technically valid but useless for a heating loop; these are
 * only a starting point and are labelled as such in the add form.
 */
function suggestedRoomForm(slot: number): RoomForm {
  return {
    enabled: true,
    name: `Room ${slot + 1}`,
    mqttCommandTopic: `prometey/room${slot}/set`,
    mqttStateTopic: `prometey/room${slot}/state`,
    mqttTemperatureSensorTopic: `prometey/room${slot}/temperature`,
    mqttTemperatureSensorField: '',
    kP: '1',
    kI: '0.01',
    kD: '0',
  };
}

/**
 * Whole-entry payload from a stored room. Required fields must always be sent
 * because the firmware replaces `rooms[id]` wholesale; `temperatureSensorType`
 * is fixed to MQTT (1) since the firmware rejects 0 even for disabled rooms.
 */
function payloadFromRoom(
  room: RoomSettings,
  slot: number,
  enabled: boolean,
): RoomPayload {
  return {
    id: slot,
    enabled,
    temperatureSensorType: LIMITS.room.savableTemperatureSensorTypes[0],
    name: room.name,
    mqttCommandTopic: room.mqttCommandTopic,
    mqttStateTopic: room.mqttStateTopic,
    mqttTemperatureSensorTopic: room.mqttTemperatureSensorTopic,
    mqttTemperatureSensorField: room.mqttTemperatureSensorField,
    kP: room.kP,
    kI: room.kI,
    kD: room.kD,
  };
}

interface RoomCardProps {
  slot: number;
  room: RoomSettings;
  valves: ValveSettings[] | null;
  valvesError: string | null;
  onRetryValves: () => void;
  onValveSaved: (id: number, updated: ValveSettings) => void;
  onSaved: (slot: number, updated: RoomSettings) => void;
  onDeleted: (slot: number) => void;
}

function RoomCard({
  slot,
  room,
  valves,
  valvesError,
  onRetryValves,
  onValveSaved,
  onSaved,
  onDeleted,
}: RoomCardProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<RoomForm>(() => formFromRoom(room, slot).form);
  const [usedPlaceholders, setUsedPlaceholders] = useState(false);
  const [errors, setErrors] = useState<RoomErrors>({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const update = (patch: Partial<RoomForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleToggle = () => {
    if (!open) {
      const built = formFromRoom(room, slot);
      setForm(built.form);
      setUsedPlaceholders(built.usedPlaceholders);
      setErrors({});
      setNotice(null);
      setSaveError(null);
    }
    setOpen((current) => !current);
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const nextErrors = validateRoom(form);
    setErrors(nextErrors);
    setNotice(null);
    setSaveError(null);
    if (hasErrors(nextErrors)) {
      return;
    }

    setSaving(true);
    try {
      const result = await postRoom({
        id: slot,
        enabled: form.enabled,
        temperatureSensorType: LIMITS.room.savableTemperatureSensorTypes[0],
        name: form.name,
        mqttCommandTopic: form.mqttCommandTopic,
        mqttStateTopic: form.mqttStateTopic,
        mqttTemperatureSensorTopic: form.mqttTemperatureSensorTopic,
        mqttTemperatureSensorField: form.mqttTemperatureSensorField,
        kP: Number(form.kP),
        kI: Number(form.kI),
        kD: Number(form.kD),
      });
      setSaving(false);
      if (result.ok) {
        setNotice('Room saved to flash.');
        setUsedPlaceholders(false);
        onSaved(slot, {
          ...room,
          id: slot,
          enabled: form.enabled,
          name: form.name,
          mqttCommandTopic: form.mqttCommandTopic,
          mqttStateTopic: form.mqttStateTopic,
          mqttTemperatureSensorTopic: form.mqttTemperatureSensorTopic,
          mqttTemperatureSensorField: form.mqttTemperatureSensorField,
          kP: Number(form.kP),
          kI: Number(form.kI),
          kD: Number(form.kD),
        });
      } else {
        setSaveError(result.message);
      }
    } catch (error) {
      setSaving(false);
      setSaveError(error instanceof Error ? error.message : String(error));
    }
  };

  // "Delete" is really "disable": there is no per-entry delete endpoint, so the
  // whole stored entry is re-posted with enabled=false.
  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Delete room "${room.name || `slot ${slot}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`,
    );
    if (!confirmed) {
      return;
    }
    setDeleteError(null);
    setDeleting(true);
    try {
      const result = await postRoom(payloadFromRoom(room, slot, false));
      setDeleting(false);
      if (result.ok) {
        onDeleted(slot);
      } else {
        setDeleteError(result.message);
      }
    } catch (error) {
      setDeleting(false);
      setDeleteError(error instanceof Error ? error.message : String(error));
    }
  };

  const runtime: Array<[string, string]> = [];
  if (room.I !== undefined) {
    runtime.push(['PID I (runtime)', String(room.I)]);
  }
  if (room.prevError !== undefined) {
    runtime.push(['prevError (runtime)', String(room.prevError)]);
  }
  if (room.valveOpeningPercent !== undefined) {
    runtime.push(['Valve opening', `${room.valveOpeningPercent}%`]);
  }
  if (room.prevTime !== undefined) {
    runtime.push(['prevTime (raw)', String(room.prevTime)]);
  }

  const boundValveCount = valves
    ? valves.filter((valve) => valve.enabled && valve.roomID === slot).length
    : null;

  return (
    <Card class="room-card">
      <div class="card-header">
        <h3>
          {room.name || `Room ${slot + 1}`}{' '}
          <span class="badge badge-slot">slot {slot}</span>
        </h3>
        {boundValveCount !== null ? (
          <span class="muted">
            {boundValveCount} valve{boundValveCount === 1 ? '' : 's'} bound
          </span>
        ) : null}
      </div>

      {room.id !== slot ? (
        <Banner
          kind="info"
          message={`Stored id is ${room.id} but this entry sits in slot ${slot}; saving rewrites slot ${slot} and normalizes the id.`}
        />
      ) : null}

      <dl class="kv">
        {room.id !== slot ? (
          <>
            <dt>Stored id</dt>
            <dd>{room.id}</dd>
          </>
        ) : null}
        <dt>Command topic</dt>
        <dd>{room.mqttCommandTopic || <span class="muted">(empty)</span>}</dd>
        <dt>State topic</dt>
        <dd>{room.mqttStateTopic || <span class="muted">(empty)</span>}</dd>
        <dt>Temperature topic</dt>
        <dd>
          {room.mqttTemperatureSensorTopic || (
            <span class="muted">(empty)</span>
          )}
        </dd>
        <dt>Temperature field</dt>
        <dd>
          {room.mqttTemperatureSensorField || (
            <span class="muted">(empty)</span>
          )}
        </dd>
        <dt>kP / kI / kD</dt>
        <dd>
          {room.kP} / {room.kI} / {room.kD}
        </dd>
        {runtime.map(([label, value]) => (
          <Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <div class="form-actions">
        <Button onClick={handleToggle} disabled={saving || deleting}>{open ? 'Close editor' : 'Edit room'}</Button>
        <DangerButton onClick={() => void handleDelete()} disabled={deleting || saving}>
          {deleting ? 'Deleting\u2026' : 'Delete room'}
        </DangerButton>
      </div>

      {deleteError ? (
        <Banner
          kind="error"
          message={deleteError}
          onClose={() => setDeleteError(null)}
        />
      ) : null}

      {open ? (
        <div class="room-editor">
          <form onSubmit={handleSubmit}>
            {usedPlaceholders ? (
              <Banner
                kind="info"
                message="This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."
              />
            ) : null}

            <Field
              label="Room id"
              value={slot}
              disabled
              help="Fixed slot index; the device writes to this position."
            />
            <Select
              label="Temperature sensor type"
              value={LIMITS.room.savableTemperatureSensorTypes[0]}
              disabled
              options={[{ value: '1', label: 'MQTT (1)' }]}
              help="Only MQTT is accepted by the firmware, even for disabled rooms."
            />
            <Field
              label="Name"
              value={form.name}
              onInput={(value) => update({ name: value })}
              maxLength={LIMITS.room.nameMax}
              error={errors.name}
              autoComplete="off"
            />
            <Field
              label="Command topic"
              value={form.mqttCommandTopic}
              onInput={(value) => update({ mqttCommandTopic: value })}
              maxLength={LIMITS.room.topicMax}
              error={errors.mqttCommandTopic}
              autoComplete="off"
            />
            <Field
              label="State topic"
              value={form.mqttStateTopic}
              onInput={(value) => update({ mqttStateTopic: value })}
              maxLength={LIMITS.room.topicMax}
              error={errors.mqttStateTopic}
              autoComplete="off"
            />
            <Field
              label="Temperature topic"
              value={form.mqttTemperatureSensorTopic}
              onInput={(value) => update({ mqttTemperatureSensorTopic: value })}
              maxLength={LIMITS.room.topicMax}
              error={errors.mqttTemperatureSensorTopic}
              autoComplete="off"
            />
            <Field
              label="Temperature field"
              value={form.mqttTemperatureSensorField}
              onInput={(value) => update({ mqttTemperatureSensorField: value })}
              placeholder="value"
              maxLength={LIMITS.room.temperatureFieldMax}
              error={errors.mqttTemperatureSensorField}
              help="Optional; leave empty if the message payload is a bare number (parsed as float, not JSON)."
              autoComplete="off"
            />
            <Field
              label="kP"
              value={form.kP}
              onInput={(value) => update({ kP: value })}
              type="number"
              min={LIMITS.room.pidMin}
              step={0.1}
              error={errors.kP}
            />
            <Field
              label="kI"
              value={form.kI}
              onInput={(value) => update({ kI: value })}
              type="number"
              min={LIMITS.room.pidMin}
              step={0.1}
              error={errors.kI}
            />
            <Field
              label="kD"
              value={form.kD}
              onInput={(value) => update({ kD: value })}
              type="number"
              min={LIMITS.room.pidMin}
              step={0.1}
              error={errors.kD}
            />

            {notice ? (
              <Banner kind="success" message={notice} onClose={() => setNotice(null)} />
            ) : null}
            {saveError ? (
              <Banner
                kind="error"
                message={saveError}
                onClose={() => setSaveError(null)}
              />
            ) : null}

            <NeedsRebootNotice />

            <div class="form-actions">
              <Button type="submit" variant="primary" disabled={saving || deleting}>
                {saving ? 'Saving\u2026' : `Save room ${slot}`}
              </Button>
            </div>
          </form>

          <RoomValves
            roomSlot={slot}
            valves={valves}
            valvesError={valvesError}
            onRetry={onRetryValves}
            onSaved={onValveSaved}
          />
        </div>
      ) : null}
    </Card>
  );
}

interface AddRoomFormProps {
  freeSlot: number;
  onAdded: (slot: number, room: RoomSettings) => void;
  onCancel: () => void;
}

function AddRoomForm({ freeSlot, onAdded, onCancel }: AddRoomFormProps) {
  const [form, setForm] = useState<RoomForm>(() => suggestedRoomForm(freeSlot));
  const [errors, setErrors] = useState<RoomErrors>({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const update = (patch: Partial<RoomForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const nextErrors = validateRoom(form);
    setErrors(nextErrors);
    setSaveError(null);
    if (hasErrors(nextErrors)) {
      return;
    }

    const kP = Number(form.kP);
    const kI = Number(form.kI);
    const kD = Number(form.kD);

    setSaving(true);
    try {
      const result = await postRoom({
        id: freeSlot,
        enabled: true,
        temperatureSensorType: LIMITS.room.savableTemperatureSensorTypes[0],
        name: form.name,
        mqttCommandTopic: form.mqttCommandTopic,
        mqttStateTopic: form.mqttStateTopic,
        mqttTemperatureSensorTopic: form.mqttTemperatureSensorTopic,
        mqttTemperatureSensorField: form.mqttTemperatureSensorField,
        kP,
        kI,
        kD,
      });
      setSaving(false);
      if (result.ok) {
        onAdded(freeSlot, {
          id: freeSlot,
          enabled: true,
          temperatureSensorType: LIMITS.room.savableTemperatureSensorTypes[0],
          name: form.name,
          mqttCommandTopic: form.mqttCommandTopic,
          mqttStateTopic: form.mqttStateTopic,
          mqttTemperatureSensorTopic: form.mqttTemperatureSensorTopic,
          mqttTemperatureSensorField: form.mqttTemperatureSensorField,
          kP,
          kI,
          kD,
        });
      } else {
        setSaveError(result.message);
      }
    } catch (error) {
      setSaving(false);
      setSaveError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Banner
        kind="info"
        message={`Suggested defaults for slot ${freeSlot} are prefilled. Review and adjust before adding.`}
      />
      <Field
        label="Room id"
        value={freeSlot}
        disabled
        help="Lowest free slot; the device writes to this position."
      />
      <Field
        label="Name"
        value={form.name}
        onInput={(value) => update({ name: value })}
        maxLength={LIMITS.room.nameMax}
        error={errors.name}
        autoComplete="off"
      />
      <Field
        label="Command topic"
        value={form.mqttCommandTopic}
        onInput={(value) => update({ mqttCommandTopic: value })}
        maxLength={LIMITS.room.topicMax}
        error={errors.mqttCommandTopic}
        autoComplete="off"
      />
      <Field
        label="State topic"
        value={form.mqttStateTopic}
        onInput={(value) => update({ mqttStateTopic: value })}
        maxLength={LIMITS.room.topicMax}
        error={errors.mqttStateTopic}
        autoComplete="off"
      />
      <Field
        label="Temperature topic"
        value={form.mqttTemperatureSensorTopic}
        onInput={(value) => update({ mqttTemperatureSensorTopic: value })}
        maxLength={LIMITS.room.topicMax}
        error={errors.mqttTemperatureSensorTopic}
        autoComplete="off"
      />
      <Field
        label="Temperature field"
        value={form.mqttTemperatureSensorField}
        onInput={(value) => update({ mqttTemperatureSensorField: value })}
        placeholder="value"
        maxLength={LIMITS.room.temperatureFieldMax}
        error={errors.mqttTemperatureSensorField}
        help="Optional; leave empty if the message payload is a bare number (parsed as float, not JSON)."
        autoComplete="off"
      />
      <Field
        label="kP"
        value={form.kP}
        onInput={(value) => update({ kP: value })}
        type="number"
        min={LIMITS.room.pidMin}
        step={0.1}
        error={errors.kP}
        help="Suggested starting value."
      />
      <Field
        label="kI"
        value={form.kI}
        onInput={(value) => update({ kI: value })}
        type="number"
        min={LIMITS.room.pidMin}
        step={0.01}
        error={errors.kI}
        help="Suggested starting value."
      />
      <Field
        label="kD"
        value={form.kD}
        onInput={(value) => update({ kD: value })}
        type="number"
        min={LIMITS.room.pidMin}
        step={0.1}
        error={errors.kD}
        help="Suggested starting value."
      />

      {saveError ? (
        <Banner kind="error" message={saveError} onClose={() => setSaveError(null)} />
      ) : null}

      <NeedsRebootNotice />

      <div class="form-actions">
        <Button type="submit" variant="primary" disabled={saving}>
          {saving ? 'Adding\u2026' : `Add room ${freeSlot}`}
        </Button>
        <Button onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export function RoomsPage() {
  const [rooms, setRooms] = useState<RoomSettings[] | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [valves, setValves] = useState<ValveSettings[] | null>(null);
  const [valvesError, setValvesError] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getRooms();
    if (result.ok) {
      if (!Array.isArray(result.data.rooms)) {
        setLoadError('Device returned an unexpected rooms payload.');
      } else {
        setRooms(result.data.rooms);
      }
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  const loadValves = useCallback(async () => {
    setValvesError(null);
    const result = await getValves();
    if (result.ok) {
      if (!Array.isArray(result.data.valves)) {
        setValvesError('Device returned an unexpected valves payload.');
      } else {
        setValves(result.data.valves);
      }
    } else {
      setValvesError(result.message);
    }
  }, []);

  useEffect(() => {
    void load();
    void loadValves();
  }, [load, loadValves]);

  const handleSaved = useCallback((slot: number, updated: RoomSettings) => {
    setRooms((current) =>
      current
        ? current.map((room, index) => (index === slot ? updated : room))
        : current,
    );
  }, []);

  const handleValveSaved = useCallback(
    (id: number, updated: ValveSettings) => {
      setValves((current) =>
        current
          ? current.map((valve, index) => (index === id ? updated : valve))
          : current,
      );
    },
    [],
  );

  const handleAdded = useCallback((slot: number, added: RoomSettings) => {
    setRooms((current) =>
      current
        ? current.map((room, index) => (index === slot ? added : room))
        : current,
    );
    setAddOpen(false);
    setFeedback('Room added. Reboot to apply.');
  }, []);

  const handleDeleted = useCallback((slot: number) => {
    setRooms((current) =>
      current
        ? current.map((room, index) =>
            index === slot ? { ...room, id: slot, enabled: false } : room,
          )
        : current,
    );
    setFeedback('Room removed from heating. Reboot to apply.');
  }, []);

  if (!loaded) {
    return (
      <Card title="Rooms">
        <p class="muted">Loading rooms&hellip;</p>
      </Card>
    );
  }

  const enabledRooms = (rooms ?? [])
    .map((room, slot) => ({ room, slot }))
    .filter((entry) => entry.room.enabled);
  const freeSlot = rooms ? rooms.findIndex((room) => !room.enabled) : -1;

  const addRoomCard =
    freeSlot >= 0 ? (
      <Card title="Add room">
        {addOpen ? (
          <AddRoomForm
            key={freeSlot}
            freeSlot={freeSlot}
            onAdded={handleAdded}
            onCancel={() => setAddOpen(false)}
          />
        ) : (
          <div class="form-actions">
            <Button variant="primary" onClick={() => setAddOpen(true)}>
              Add room
            </Button>
          </div>
        )}
      </Card>
    ) : (
      <Card title="Add room">
        <p class="muted">
          All 8 room slots are in use. Disable a room before adding another.
        </p>
      </Card>
    );

  return (
    <div class="stack">
      {loadError ? (
        <Card title="Rooms">
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </Card>
      ) : rooms ? (
        <>
          {feedback ? (
            <Banner
              kind="info"
              message={feedback}
              onClose={() => setFeedback(null)}
            />
          ) : null}

          {enabledRooms.length === 0 ? (
            <Card title="Rooms">
              {addOpen && freeSlot >= 0 ? (
                <AddRoomForm
                  key={freeSlot}
                  freeSlot={freeSlot}
                  onAdded={handleAdded}
                  onCancel={() => setAddOpen(false)}
                />
              ) : (
                <>
                  <p class="muted">
                    No rooms are enabled yet. Add a room to start controlling
                    heating.
                  </p>
                  {freeSlot >= 0 ? (
                    <div class="form-actions">
                      <Button variant="primary" onClick={() => setAddOpen(true)}>
                        Add room
                      </Button>
                    </div>
                  ) : (
                    <p class="muted">
                      All 8 room slots are in use. Disable a room before adding
                      another.
                    </p>
                  )}
                </>
              )}
            </Card>
          ) : (
            <>
              {enabledRooms.map(({ room, slot }) => (
                <RoomCard
                  key={slot}
                  slot={slot}
                  room={room}
                  valves={valves}
                  valvesError={valvesError}
                  onRetryValves={() => void loadValves()}
                  onValveSaved={handleValveSaved}
                  onSaved={handleSaved}
                  onDeleted={handleDeleted}
                />
              ))}
              {addRoomCard}
            </>
          )}
        </>
      ) : null}
    </div>
  );
}
