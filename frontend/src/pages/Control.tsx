import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import {
  getControl,
  postControlBoiler,
  postControlRoom,
  type ActionResult,
} from '../api/client';
import type {
  ControlBoilerCommand,
  ControlCentralHeatingMode,
  ControlRoomCommand,
  ControlRoomState,
  ControlSnapshot,
} from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';

const CONTROL_REFRESH_MS = 3_000;
const EM_DASH = '\u2014';

const CENTRAL_HEATING_MODES: ReadonlyArray<
  [ControlCentralHeatingMode, string]
> = [
  ['off', 'Off'],
  ['heat', 'Heat'],
  ['auto', 'Auto'],
];

/** Firmware serializes the three `is*` flags as the strings "true"/"false". */
function flag(value?: string): boolean | undefined {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  return undefined;
}

function formatTemperature(value: number | undefined): string {
  return value === undefined || !Number.isFinite(value)
    ? EM_DASH
    : `${value.toFixed(1)} \u00b0C`;
}

function formatPercent(value: number | undefined): string {
  return value === undefined || !Number.isFinite(value)
    ? EM_DASH
    : `${value}%`;
}

function displayText(value: string | undefined): string {
  return value && value.length > 0 ? value : 'no data';
}

/** Trim binary-float artefacts in an input default (e.g. 21.149999618). */
function draftValue(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) {
    return '';
  }
  return String(Number(value.toFixed(2)));
}

interface SetPointFormProps {
  label: string;
  value: number | undefined;
  min?: number;
  max?: number;
  step: number;
  disabled?: boolean;
  help?: string;
  pending: boolean;
  submitLabel?: string;
  onSubmit: (value: number) => void;
}

function SetPointForm({
  label,
  value,
  min,
  max,
  step,
  disabled,
  help,
  pending,
  submitLabel = 'Apply',
  onSubmit,
}: SetPointFormProps) {
  const [draft, setDraft] = useState(() => draftValue(value));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDraft(draftValue(value));
  }, [value]);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const raw = draft.trim();
    const parsed = Number(raw);

    if (raw === '' || !Number.isFinite(parsed)) {
      setError('Enter a number.');
      return;
    }
    if (min !== undefined && parsed < min) {
      setError(`Must be at least ${min}.`);
      return;
    }
    if (max !== undefined && parsed > max) {
      setError(`Must be at most ${max}.`);
      return;
    }

    setError(null);
    onSubmit(parsed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label={label}
        value={draft}
        onInput={(next) => {
          setDraft(next);
          setError(null);
        }}
        type="number"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        error={error ?? undefined}
        help={help}
      />
      <div class="form-actions">
        <Button type="submit" variant="primary" disabled={pending || disabled}>
          {pending ? 'Applying\u2026' : submitLabel}
        </Button>
      </div>
    </form>
  );
}

interface RoomRowProps {
  room: ControlRoomState;
  pending: boolean;
  error: string | null;
  onCommand: (roomId: number, command: ControlRoomCommand) => void;
  onDismissError: (roomId: number) => void;
}

function RoomRow({
  room,
  pending,
  error,
  onCommand,
  onDismissError,
}: RoomRowProps) {
  const enabled = room.active;

  return (
    <div class="valve-row">
      <div class="row">
        <strong>
          {room.name || `Room ${room.id}`}{' '}
          <span class="badge badge-slot">slot {room.id}</span>
        </strong>
        <Button
          variant={enabled ? 'default' : 'primary'}
          disabled={pending}
          onClick={() =>
            onCommand(room.id, {
              id: room.id,
              mode: enabled ? 'off' : 'heat',
            })
          }
        >
          {enabled ? 'Disable' : 'Enable'}
        </Button>
      </div>

      <dl class="kv mt">
        <dt>Status</dt>
        <dd>{enabled ? 'active' : 'inactive'}</dd>
        <dt>Current temperature</dt>
        <dd>
          {room.temperatureValid
            ? formatTemperature(room.currentTemperature)
            : 'no data'}
        </dd>
        <dt>Valve opening</dt>
        <dd>{formatPercent(room.valveOpening)}</dd>
      </dl>

      {error ? (
        <Banner
          kind="error"
          message={error}
          onClose={() => onDismissError(room.id)}
        />
      ) : null}

      <div class="mt">
        <SetPointForm
          label="Room setpoint (°C)"
          value={room.setPoint}
          min={16}
          max={32}
          step={0.1}
          pending={pending}
          onSubmit={(setPoint) => onCommand(room.id, { id: room.id, setPoint })}
        />
      </div>
    </div>
  );
}

export function ControlPage() {
  const [snapshot, setSnapshot] = useState<ControlSnapshot | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [boilerError, setBoilerError] = useState<string | null>(null);
  const [roomErrors, setRoomErrors] = useState<Record<number, string>>({});
  const inFlightRef = useRef(false);

  const load = useCallback(async () => {
    if (inFlightRef.current) {
      return;
    }

    const result = await getControl();
    if (result.ok) {
      setSnapshot(result.data);
      setLoadError(null);
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => {
      void load();
    }, CONTROL_REFRESH_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  const runCommand = useCallback(
    async (
      action: () => Promise<ActionResult>,
      onError: (message: string) => void,
    ) => {
      if (inFlightRef.current) {
        return;
      }

      inFlightRef.current = true;
      setPending(true);
      let succeeded = false;
      try {
        const result = await action();
        if (result.ok) {
          succeeded = true;
        } else {
          onError(result.message);
        }
      } catch (error) {
        onError(error instanceof Error ? error.message : String(error));
      }

      inFlightRef.current = false;
      setPending(false);
      if (succeeded) {
        await load();
      }
    },
    [load],
  );

  const sendBoiler = useCallback(
    (command: ControlBoilerCommand) => {
      setBoilerError(null);
      void runCommand(() => postControlBoiler(command), setBoilerError);
    },
    [runCommand],
  );

  const sendRoom = useCallback(
    (roomId: number, command: ControlRoomCommand) => {
      setRoomErrors((current) => {
        const next = { ...current };
        delete next[roomId];
        return next;
      });
      void runCommand(
        () => postControlRoom(command),
        (message) =>
          setRoomErrors((current) => ({ ...current, [roomId]: message })),
      );
    },
    [runCommand],
  );

  const dismissRoomError = useCallback((roomId: number) => {
    setRoomErrors((current) => {
      const next = { ...current };
      delete next[roomId];
      return next;
    });
  }, []);

  if (!loaded) {
    return (
      <Card title="Control">
        <p class="muted">Loading live control state&hellip;</p>
      </Card>
    );
  }

  if (!snapshot) {
    return (
      <Card title="Control">
        <Banner kind="error" message={loadError ?? 'No control data received.'} />
        <div class="form-actions">
          <Button onClick={() => void load()}>Retry</Button>
        </div>
      </Card>
    );
  }

  const boiler = snapshot.boiler;
  const requestedMode = boiler.requestedMode;
  const autoMode = requestedMode === 'auto';
  const hotWaterOn =
    boiler.hotWaterMode !== undefined && boiler.hotWaterMode !== 'off';
  const flame = flag(boiler.isFlameActive);
  const fault = flag(boiler.isFault);
  const hotWaterActive = flag(boiler.isHotWaterActive);

  return (
    <div class="stack">
      {loadError ? (
        <Banner
          kind="error"
          message={loadError}
          onClose={() => setLoadError(null)}
        />
      ) : null}

      <Card title="Boiler">
        {boilerError ? (
          <Banner
            kind="error"
            message={boilerError}
            onClose={() => setBoilerError(null)}
          />
        ) : null}

        <div class="row">
          <span class="muted">Requested mode</span>
          {CENTRAL_HEATING_MODES.map(([mode, label]) => (
            <Button
              key={mode}
              variant={requestedMode === mode ? 'primary' : 'default'}
              disabled={pending}
              onClick={() => sendBoiler({ centralHeatingMode: mode })}
            >
              {label}
            </Button>
          ))}
        </div>
        {autoMode ? (
          <p class="muted mt">
            Manual central-heating setpoint is ignored while mode is auto.
          </p>
        ) : null}

        <div class="mt">
          <SetPointForm
            label="CH setpoint (°C)"
            value={boiler.centralHeatingSetPoint}
            min={30}
            max={80}
            step={0.1}
            disabled={autoMode}
            help={
              autoMode
                ? 'Disabled while the boiler runs the weather curve in AUTO mode.'
                : 'Applies immediately; the firmware clamps it to 30\u201380 \u00b0C.'
            }
            pending={pending}
            submitLabel="Apply CH setpoint"
            onSubmit={(setPoint) =>
              sendBoiler({ centralHeatingSetPoint: setPoint })
            }
          />
        </div>

        <h3>Hot water</h3>
        <div class="row">
          <span class="muted">
            Requested mode: {displayText(boiler.hotWaterMode)}
          </span>
          <Button
            variant={hotWaterOn ? 'primary' : 'default'}
            disabled={pending}
            onClick={() =>
              sendBoiler({ hotWaterMode: hotWaterOn ? 'off' : 'gas' })
            }
          >
            {hotWaterOn ? 'Turn hot water off' : 'Turn hot water on'}
          </Button>
        </div>

        <div class="mt">
          <SetPointForm
            label="DHW setpoint (°C)"
            value={boiler.hotWaterSetPoint}
            step={0.1}
            help="Written to the boiler immediately."
            pending={pending}
            submitLabel="Apply DHW setpoint"
            onSubmit={(setPoint) =>
              sendBoiler({ hotWaterSetPoint: setPoint })
            }
          />
        </div>

        <h3>Live readout</h3>
        <dl class="kv">
          <dt>CH mode</dt>
          <dd>{displayText(boiler.centralHeatingMode)}</dd>
          <dt>CH state</dt>
          <dd>{displayText(boiler.centralHeatingState)}</dd>
          <dt>CH setpoint</dt>
          <dd>{formatTemperature(boiler.centralHeatingSetPoint)}</dd>
          <dt>CH current temperature</dt>
          <dd>{formatTemperature(boiler.centralHeatingCurrentTemperature)}</dd>
          <dt>DHW mode</dt>
          <dd>{displayText(boiler.hotWaterMode)}</dd>
          <dt>DHW setpoint</dt>
          <dd>{formatTemperature(boiler.hotWaterSetPoint)}</dd>
          <dt>DHW current temperature</dt>
          <dd>{formatTemperature(boiler.hotWaterCurrentTemperature)}</dd>
          <dt>DHW active</dt>
          <dd>
            {hotWaterActive === undefined
              ? 'no data'
              : hotWaterActive
                ? 'yes'
                : 'no'}
          </dd>
          <dt>Modulation</dt>
          <dd>{formatPercent(boiler.modulation)}</dd>
          <dt>Outdoor temperature</dt>
          <dd>{formatTemperature(boiler.outdoorTemperature)}</dd>
          <dt>Flame</dt>
          <dd>
            {flame === undefined ? (
              <span class="muted">no data</span>
            ) : (
              <span class={flame ? 'badge badge-on' : 'badge badge-off'}>
                {flame ? 'active' : 'inactive'}
              </span>
            )}
          </dd>
          <dt>Fault</dt>
          <dd>
            {fault === undefined ? (
              <span class="muted">no data</span>
            ) : (
              <span
                class={fault ? 'badge' : 'badge badge-off'}
                style={
                  fault
                    ? {
                        color: 'var(--danger)',
                        borderColor: 'var(--danger-border)',
                        background: 'var(--danger-soft)',
                      }
                    : undefined
                }
              >
                {fault ? 'fault active' : 'no fault'}
              </span>
            )}
          </dd>
        </dl>
        <p class="muted mt">
          Live values refresh automatically every 3 seconds. Commands apply
          immediately; no reboot is required.
        </p>
      </Card>

      <Card title="Rooms">
        {snapshot.rooms.length === 0 ? (
          <p class="muted">No enabled rooms.</p>
        ) : (
          <div class="valve-list">
            {snapshot.rooms.map((room) => (
              <RoomRow
                key={room.id}
                room={room}
                pending={pending}
                error={roomErrors[room.id] ?? null}
                onCommand={sendRoom}
                onDismissError={dismissRoomError}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
