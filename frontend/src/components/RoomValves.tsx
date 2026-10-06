import { useCallback, useState } from 'preact/hooks';
import { postValve, LIMITS } from '../api/client';
import type { ValveSettings } from '../api/types';
import { Banner } from './Banner';
import { Button, DangerButton } from './Button';
import { Field } from './Field';
import { NeedsRebootNotice } from './NeedsRebootNotice';

/**
 * Bound-valve management for one room, rendered inside that room's editor.
 *
 * The device has no per-valve delete endpoint and no way to move a valve
 * between rooms from this UI: "delete" is a whole-entry re-post with
 * `enabled=false`, "add" targets the lowest free valve slot and always sets
 * `roomID` to this room, and edits keep `type`/`roomID`/`enabled` fixed.
 */

interface ValveForm {
  channel: string;
  fullTravelTime: string;
  windowTime: string;
}

interface ValveErrors {
  channel?: string;
  fullTravelTime?: string;
  windowTime?: string;
}

/** Factory-ish travel/window defaults, used only as a starting suggestion. */
const SUGGESTED_FULL_TRAVEL_TIME = '60000';
const SUGGESTED_WINDOW_TIME = '30000';

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

function validateValveForm(form: ValveForm, takenChannels?: Set<number>): ValveErrors {
  const errors: ValveErrors = {};

  const channel = parseNumber(form.channel);
  if (
    channel === null ||
    !Number.isInteger(channel) ||
    channel < LIMITS.valve.channelMin ||
    channel > LIMITS.valve.channelMax
  ) {
    errors.channel = `Channel must be an integer between ${LIMITS.valve.channelMin} and ${LIMITS.valve.channelMax}.`;
  } else if (takenChannels?.has(channel)) {
    errors.channel = `Channel ${channel} is already used by another enabled valve.`;
  }

  const fullTravelTime = parseNumber(form.fullTravelTime);
  if (
    fullTravelTime === null ||
    !Number.isInteger(fullTravelTime) ||
    fullTravelTime < LIMITS.valve.fullTravelTimeMin ||
    fullTravelTime > LIMITS.valve.fullTravelTimeMax
  ) {
    errors.fullTravelTime = `Full travel time must be an integer number of milliseconds between ${LIMITS.valve.fullTravelTimeMin} and ${LIMITS.valve.fullTravelTimeMax}.`;
  }

  const windowTime = parseNumber(form.windowTime);
  if (
    windowTime === null ||
    !Number.isInteger(windowTime) ||
    windowTime < LIMITS.valve.windowTimeMin ||
    windowTime > LIMITS.valve.windowTimeMax
  ) {
    errors.windowTime = `Window time must be an integer number of milliseconds between ${LIMITS.valve.windowTimeMin} and ${LIMITS.valve.windowTimeMax}.`;
  }

  return errors;
}

function formFromValve(valve: ValveSettings): ValveForm {
  return {
    channel: String(valve.channel),
    fullTravelTime: String(valve.fullTravelTime),
    windowTime: String(valve.windowTime),
  };
}

interface BoundValveRowProps {
  id: number;
  valve: ValveSettings;
  onSaved: (id: number, updated: ValveSettings) => void;
  onNotice: (message: string) => void;
  takenChannels: Set<number>;
}

function BoundValveRow({ id, valve, onSaved, onNotice, takenChannels }: BoundValveRowProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ValveForm>(() => formFromValve(valve));
  const [errors, setErrors] = useState<ValveErrors>({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const update = (patch: Partial<ValveForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleToggle = () => {
    if (!open) {
      setForm(formFromValve(valve));
      setErrors({});
      setNotice(null);
      setSaveError(null);
    }
    setOpen((current) => !current);
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const nextErrors = validateValveForm(form, takenChannels);
    setErrors(nextErrors);
    setNotice(null);
    setSaveError(null);
    if (hasErrors(nextErrors)) {
      return;
    }

    const channel = Number(form.channel);
    const fullTravelTime = Number(form.fullTravelTime);
    const windowTime = Number(form.windowTime);

    setSaving(true);
    try {
      const result = await postValve({
        id,
        enabled: true,
        type: LIMITS.valve.savableTypes[0],
        channel,
        fullTravelTime,
        windowTime,
        roomID: valve.roomID,
      });
      setSaving(false);
      if (result.ok) {
        setNotice('Valve saved to flash.');
        onSaved(id, {
          ...valve,
          enabled: true,
          type: LIMITS.valve.savableTypes[0],
          channel,
          fullTravelTime,
          windowTime,
          roomID: valve.roomID,
        });
      } else {
        setSaveError(result.message);
      }
    } catch (error) {
      setSaving(false);
      setSaveError(error instanceof Error ? error.message : String(error));
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Valve will be unbound on next reboot. Continue?',
    );
    if (!confirmed) {
      return;
    }
    setDeleteError(null);
    setDeleting(true);
    try {
      const result = await postValve({
        id,
        enabled: false,
        type: LIMITS.valve.savableTypes[0],
        channel: valve.channel,
        fullTravelTime: valve.fullTravelTime,
        windowTime: valve.windowTime,
        roomID: valve.roomID,
      });
      setDeleting(false);
      if (result.ok) {
        onSaved(id, {
          ...valve,
          enabled: false,
          type: LIMITS.valve.savableTypes[0],
        });
        onNotice('Valve unbound. Reboot to apply.');
      } else {
        setDeleteError(result.message);
      }
    } catch (error) {
      setDeleting(false);
      setDeleteError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <li class="valve-row">
      <div class="row">
        <span class="valve-summary">
          Valve <span class="mono">{id}</span>
          <span class="sep" aria-hidden="true">
            &middot;
          </span>
          channel <span class="mono">{valve.channel}</span>
          <span class="sep" aria-hidden="true">
            &middot;
          </span>
          <span class="mono">{valve.fullTravelTime}</span>{' '}
          <span class="unit">ms travel</span>
          <span class="sep" aria-hidden="true">
            &middot;
          </span>
          <span class="mono">{valve.windowTime}</span>{' '}
          <span class="unit">ms window</span>
        </span>
        <div class="form-actions">
          <Button onClick={handleToggle} disabled={saving || deleting}>{open ? 'Close' : 'Edit'}</Button>
          <DangerButton
            onClick={() => void handleDelete()}
            disabled={deleting || saving}
          >
            {deleting ? 'Deleting\u2026' : 'Delete'}
          </DangerButton>
        </div>
      </div>

      {deleteError ? (
        <Banner
          kind="error"
          message={deleteError}
          onClose={() => setDeleteError(null)}
        />
      ) : null}

      {open ? (
        <form onSubmit={handleSubmit}>
          <Field
            label="Channel"
            value={form.channel}
            onInput={(value) => update({ channel: value })}
            type="number"
            min={LIMITS.valve.channelMin}
            max={LIMITS.valve.channelMax}
            step={1}
            inputMode="numeric"
            error={errors.channel}
          />
          <Field
            label="Full travel time (ms)"
            value={form.fullTravelTime}
            onInput={(value) => update({ fullTravelTime: value })}
            type="number"
            min={LIMITS.valve.fullTravelTimeMin}
            max={LIMITS.valve.fullTravelTimeMax}
            step={1}
            inputMode="numeric"
            error={errors.fullTravelTime}
          />
          <Field
            label="Window time (ms)"
            value={form.windowTime}
            onInput={(value) => update({ windowTime: value })}
            type="number"
            min={LIMITS.valve.windowTimeMin}
            max={LIMITS.valve.windowTimeMax}
            step={1}
            inputMode="numeric"
            error={errors.windowTime}
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
              {saving ? 'Saving\u2026' : `Save valve ${id}`}
            </Button>
          </div>
        </form>
      ) : null}
    </li>
  );
}

interface AddValveFormProps {
  slot: number;
  roomSlot: number;
  suggestedChannel: number;
  takenChannels: Set<number>;
  onAdded: (id: number, updated: ValveSettings) => void;
  onCancel: () => void;
}

function AddValveForm({
  slot,
  roomSlot,
  suggestedChannel,
  takenChannels,
  onAdded,
  onCancel,
}: AddValveFormProps) {
  const [form, setForm] = useState<ValveForm>(() => ({
    channel: String(suggestedChannel),
    fullTravelTime: SUGGESTED_FULL_TRAVEL_TIME,
    windowTime: SUGGESTED_WINDOW_TIME,
  }));
  const [errors, setErrors] = useState<ValveErrors>({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const update = (patch: Partial<ValveForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const nextErrors = validateValveForm(form, takenChannels);
    setErrors(nextErrors);
    setSaveError(null);
    if (hasErrors(nextErrors)) {
      return;
    }

    const channel = Number(form.channel);
    const fullTravelTime = Number(form.fullTravelTime);
    const windowTime = Number(form.windowTime);

    setSaving(true);
    try {
      const result = await postValve({
        id: slot,
        enabled: true,
        type: LIMITS.valve.savableTypes[0],
        channel,
        fullTravelTime,
        windowTime,
        roomID: roomSlot,
      });
      setSaving(false);
      if (result.ok) {
        onAdded(slot, {
          enabled: true,
          type: LIMITS.valve.savableTypes[0],
          channel,
          fullTravelTime,
          windowTime,
          roomID: roomSlot,
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
        message="Suggested channel and timings are prefilled. Review before adding."
      />
      <Field
        label="Channel"
        value={form.channel}
        onInput={(value) => update({ channel: value })}
        type="number"
        min={LIMITS.valve.channelMin}
        max={LIMITS.valve.channelMax}
        step={1}
        inputMode="numeric"
        error={errors.channel}
      />
      <Field
        label="Full travel time (ms)"
        value={form.fullTravelTime}
        onInput={(value) => update({ fullTravelTime: value })}
        type="number"
        min={LIMITS.valve.fullTravelTimeMin}
        max={LIMITS.valve.fullTravelTimeMax}
        step={1}
        inputMode="numeric"
        error={errors.fullTravelTime}
      />
      <Field
        label="Window time (ms)"
        value={form.windowTime}
        onInput={(value) => update({ windowTime: value })}
        type="number"
        min={LIMITS.valve.windowTimeMin}
        max={LIMITS.valve.windowTimeMax}
        step={1}
        inputMode="numeric"
        error={errors.windowTime}
      />

      {saveError ? (
        <Banner kind="error" message={saveError} onClose={() => setSaveError(null)} />
      ) : null}

      <NeedsRebootNotice />

      <div class="form-actions">
        <Button type="submit" variant="primary" disabled={saving}>
          {saving ? 'Adding\u2026' : `Add valve ${slot}`}
        </Button>
        <Button onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export interface RoomValvesProps {
  roomSlot: number;
  valves: ValveSettings[] | null;
  valvesError: string | null;
  onRetry: () => void;
  onSaved: (id: number, updated: ValveSettings) => void;
}

export function RoomValves({
  roomSlot,
  valves,
  valvesError,
  onRetry,
  onSaved,
}: RoomValvesProps) {
  const [addOpen, setAddOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const handleAdded = useCallback(
    (id: number, updated: ValveSettings) => {
      onSaved(id, updated);
      setAddOpen(false);
      setNotice('Valve added to this room. Reboot to apply.');
    },
    [onSaved],
  );

  if (valvesError) {
    return (
      <div class="mt valve-section">
        <h4>Valves</h4>
        <Banner kind="error" message={valvesError} />
        <div class="form-actions">
          <Button onClick={onRetry}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!valves) {
    return (
      <div class="mt valve-section">
        <h4>Valves</h4>
        <p class="muted">Loading valves&hellip;</p>
      </div>
    );
  }

  const bound = valves
    .map((valve, id) => ({ valve, id }))
    .filter((entry) => entry.valve.enabled && entry.valve.roomID === roomSlot);
  const freeValveSlot = valves.findIndex((valve) => !valve.enabled);

  const usedChannels = new Set(
    valves.filter((valve) => valve.enabled).map((valve) => valve.channel),
  );
  let suggestedChannel: number = LIMITS.valve.channelMin;
  while (
    suggestedChannel <= LIMITS.valve.channelMax &&
    usedChannels.has(suggestedChannel)
  ) {
    suggestedChannel += 1;
  }
  if (suggestedChannel > LIMITS.valve.channelMax) {
    suggestedChannel = LIMITS.valve.channelMin;
  }

  return (
    <div class="mt valve-section">
      <h4>Valves</h4>

      {notice ? (
        <Banner kind="success" message={notice} onClose={() => setNotice(null)} />
      ) : null}

      {bound.length === 0 ? (
        <p class="muted">No valves bound.</p>
      ) : (
        <ul class="valve-list">
          {bound.map(({ valve, id }) => {
            const rowTakenChannels = new Set(
              valves.filter((v, idx) => v.enabled && idx !== id).map((v) => v.channel),
            );
            return (
              <BoundValveRow key={id} id={id} valve={valve} onSaved={onSaved} onNotice={(msg) => setNotice(msg)} takenChannels={rowTakenChannels} />
            );
          })}
        </ul>
      )}

      {freeValveSlot >= 0 ? (
        addOpen ? (
          <AddValveForm
            slot={freeValveSlot}
            roomSlot={roomSlot}
            suggestedChannel={suggestedChannel}
            takenChannels={usedChannels}
            onAdded={handleAdded}
            onCancel={() => setAddOpen(false)}
          />
        ) : (
          <div class="form-actions">
            <Button onClick={() => setAddOpen(true)}>Add valve</Button>
          </div>
        )
      ) : (
        <p class="muted">All 9 valve slots are in use.</p>
      )}
    </div>
  );
}
