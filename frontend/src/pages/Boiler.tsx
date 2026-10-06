import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import {
  deleteBoilerState,
  getBoilerSettings,
  postBoilerUpdate,
  LIMITS,
} from '../api/client';
import { Banner } from '../components/Banner';
import { Button, DangerButton } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';
import { NeedsRebootNotice } from '../components/NeedsRebootNotice';
import { RebootOverlay, useRebootFlow } from '../components/RebootFlow';
import { Select, type SelectOption } from '../components/Select';
import { WeatherCurveChart } from '../components/WeatherCurveChart';

const BAUD_RATES = [1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200];

interface BoilerForm {
  driver: string;
  modbusAddress: string;
  modbusSpeed: string;
  K: string;
  B: string;
  P: string;
  I: string;
  minSetPoint: string;
  outdoorSensor: string;
  outdoorSensorMqttTopic: string;
  outdoorSensorMqttField: string;
}

interface BoilerErrors {
  driver?: string;
  outdoorSensor?: string;
  modbusAddress?: string;
  modbusSpeed?: string;
  K?: string;
  B?: string;
  P?: string;
  I?: string;
  minSetPoint?: string;
  outdoorSensorMqttTopic?: string;
  outdoorSensorMqttField?: string;
}

const EMPTY_FORM: BoilerForm = {
  driver: '0',
  modbusAddress: '1',
  modbusSpeed: '9600',
  K: '0',
  B: '0',
  P: '0',
  I: '0',
  minSetPoint: '50',
  outdoorSensor: '0',
  outdoorSensorMqttTopic: '',
  outdoorSensorMqttField: '',
};

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

function validateBoiler(form: BoilerForm): BoilerErrors {
  const errors: BoilerErrors = {};

  if (form.driver !== '1') {
    errors.driver =
      'Saving requires ECTOControlV2 (1); the device rejects "No select".';
  }

  const address = parseNumber(form.modbusAddress);
  if (address === null || !Number.isInteger(address) || address < 1 || address > 247) {
    errors.modbusAddress = 'Address must be an integer between 1 and 247.';
  }

  const speed = parseNumber(form.modbusSpeed);
  if (speed === null || speed <= 0) {
    errors.modbusSpeed = 'Speed must be a positive number.';
  }

  const curve: ReadonlyArray<[keyof BoilerErrors, string, string]> = [
    ['K', form.K, 'K'],
    ['B', form.B, 'B'],
    ['P', form.P, 'P'],
    ['I', form.I, 'I'],
  ];
  for (const [key, raw, label] of curve) {
    if (parseNumber(raw) === null) {
      errors[key] = `${label} must be a number.`;
    }
  }

  const minSetPoint = parseNumber(form.minSetPoint);
  if (minSetPoint === null || minSetPoint < 30 || minSetPoint > 80) {
    errors.minSetPoint = 'Minimum setpoint must be between 30 and 80.';
  }

  if (form.outdoorSensor !== '1') {
    errors.outdoorSensor =
      'Saving requires MQTT (1); the device rejects "No".';
  }

  if (form.outdoorSensorMqttTopic.trim().length === 0) {
    errors.outdoorSensorMqttTopic =
      'Topic is required when MQTT is selected.';
  } else if (form.outdoorSensorMqttTopic.length > LIMITS.boiler.topicMax) {
    errors.outdoorSensorMqttTopic = `At most ${LIMITS.boiler.topicMax} characters.`;
  }

  if (form.outdoorSensorMqttField.trim().length === 0) {
    errors.outdoorSensorMqttField =
      'Field is required when MQTT is selected.';
  } else if (form.outdoorSensorMqttField.length > LIMITS.boiler.fieldMax) {
    errors.outdoorSensorMqttField = `At most ${LIMITS.boiler.fieldMax} characters.`;
  }

  return errors;
}

function speedOptions(current: string): SelectOption[] {
  const options: SelectOption[] = BAUD_RATES.map((rate) => ({
    value: String(rate),
    label: String(rate),
  }));
  const value = parseNumber(current);
  if (value !== null && !BAUD_RATES.includes(value)) {
    options.unshift({ value: current, label: `${current} (current)` });
  }
  return options;
}

export function BoilerPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [form, setForm] = useState<BoilerForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<BoilerErrors>({});
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [resetError, setResetError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const rebootFlow = useRebootFlow();

  const baudOptions = useMemo(() => speedOptions(form.modbusSpeed), [form.modbusSpeed]);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getBoilerSettings();
    if (result.ok) {
      setForm({
        driver: String(result.data.driver),
        modbusAddress: String(result.data.modbusAddress),
        modbusSpeed: String(result.data.modbusSpeed),
        K: String(result.data.K),
        B: String(result.data.B),
        P: String(result.data.P),
        I: String(result.data.I),
        minSetPoint: String(result.data.minSetPoint),
        outdoorSensor: String(result.data.outdoorSensor),
        outdoorSensorMqttTopic: result.data.outdoorSensorMqttTopic,
        outdoorSensorMqttField: result.data.outdoorSensorMqttField,
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const update = (patch: Partial<BoilerForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const nextErrors = validateBoiler(form);
      setErrors(nextErrors);
      setNotice(null);
      setSaveError(null);
      if (hasErrors(nextErrors)) {
        return;
      }

      setSaving(true);
      const result = await postBoilerUpdate({
        driver: Number(form.driver),
        modbusAddress: Number(form.modbusAddress),
        modbusSpeed: Number(form.modbusSpeed),
        K: Number(form.K),
        B: Number(form.B),
        P: Number(form.P),
        I: Number(form.I),
        minSetPoint: Number(form.minSetPoint),
        outdoorSensor: Number(form.outdoorSensor),
        outdoorSensorMqttTopic: form.outdoorSensorMqttTopic,
        outdoorSensorMqttField: form.outdoorSensorMqttField,
      });
      setSaving(false);
      if (result.ok) {
        setNotice('Boiler settings saved to flash.');
      } else {
        setSaveError(result.message);
      }
    },
    [form],
  );

  const handleReset = useCallback(async () => {
    const confirmed = window.confirm(
      'Delete the stored boiler state (/boiler.bin)? The DEVICE WILL REBOOT and heating will be offline for 20-60 seconds.',
    );
    if (!confirmed) {
      return;
    }
    setResetError(null);
    setDeleting(true);
    const result = await deleteBoilerState();
    setDeleting(false);
    if (result.ok) {
      rebootFlow.start();
    } else {
      setResetError(result.message);
    }
  }, [rebootFlow.start]);

  if (!loaded) {
    return (
      <Card title="Boiler">
        <p class="muted">Loading boiler settings&hellip;</p>
      </Card>
    );
  }

  return (
    <div class="stack">
      <NeedsRebootNotice />

      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      <Card title="Boiler driver">
        <form onSubmit={handleSubmit}>
          <Select
            label="Driver"
            value={form.driver}
            onChange={(value) => update({ driver: value })}
            options={[
              { value: '0', label: 'No select (0) - not savable' },
              { value: '1', label: 'ECTOControlV2 (1)' },
            ]}
            error={errors.driver}
            help='The device accepts only ECTOControlV2 when saving.'
          />
          <Field
            label="Modbus address"
            value={form.modbusAddress}
            onInput={(value) => update({ modbusAddress: value })}
            type="number"
            min={1}
            max={247}
            step={1}
            inputMode="numeric"
            error={errors.modbusAddress}
            help="1-247 (the firmware does not range-check this)."
          />
          <Select
            label="Modbus speed (baud)"
            value={form.modbusSpeed}
            onChange={(value) => update({ modbusSpeed: value })}
            options={baudOptions}
            error={errors.modbusSpeed}
          />

          <h3>Weather curve</h3>
          <Field
            label="K (curve scale)"
            value={form.K}
            onInput={(value) => update({ K: value })}
            type="number"
            step={0.1}
            error={errors.K}
          />
          <Field
            label="B (offset, °C)"
            value={form.B}
            onInput={(value) => update({ B: value })}
            type="number"
            step={0.1}
            error={errors.B}
          />
          <Field
            label="P (trim gain)"
            value={form.P}
            onInput={(value) => update({ P: value })}
            type="number"
            step={0.1}
            error={errors.P}
          />
          <Field
            label="I (trim integral, °C/s)"
            value={form.I}
            onInput={(value) => update({ I: value })}
            type="number"
            step={0.1}
            error={errors.I}
          />
          <Field
            label="Minimum setpoint (°C)"
            value={form.minSetPoint}
            onInput={(value) => update({ minSetPoint: value })}
            type="number"
            min={30}
            max={80}
            step={1}
            inputMode="numeric"
            error={errors.minSetPoint}
            help="Lower bound for the computed setpoint (30-80 °C)."
          />
          <p class="muted">
            Base curve without room trim. Effective setpoint = curve + trim,
            clamped to [min, 80].
          </p>
          <WeatherCurveChart
            k={Number(form.K)}
            b={Number(form.B)}
            minSetPoint={Number(form.minSetPoint)}
          />

          <h3>Outdoor sensor</h3>
          <Select
            label="Source"
            value={form.outdoorSensor}
            onChange={(value) => update({ outdoorSensor: value })}
            options={[
              { value: '0', label: 'No (0) - not savable' },
              { value: '1', label: 'MQTT (1)' },
            ]}
            error={errors.outdoorSensor}
            help='The device accepts only MQTT when saving.'
          />
          <Field
            label="Outdoor sensor MQTT topic"
            value={form.outdoorSensorMqttTopic}
            onInput={(value) => update({ outdoorSensorMqttTopic: value })}
            maxLength={LIMITS.boiler.topicMax}
            disabled={form.outdoorSensor !== '1'}
            error={errors.outdoorSensorMqttTopic}
            help="Required when the source is MQTT."
            autoComplete="off"
          />
          <Field
            label="Outdoor sensor MQTT field"
            value={form.outdoorSensorMqttField}
            onInput={(value) => update({ outdoorSensorMqttField: value })}
            maxLength={LIMITS.boiler.fieldMax}
            disabled={form.outdoorSensor !== '1'}
            error={errors.outdoorSensorMqttField}
            help="Required when the source is MQTT."
            autoComplete="off"
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
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={saving}>
              {saving ? 'Saving\u2026' : 'Save boiler settings'}
            </Button>
          </div>
        </form>
      </Card>

      <Card title="Danger zone" class="danger-zone">
        <h3>Delete boiler state</h3>
        <p class="muted">
          Removes /boiler.bin from the device flash. The device reboots
          immediately afterwards.
        </p>
        {resetError ? (
          <Banner
            kind="error"
            message={resetError}
            onClose={() => setResetError(null)}
          />
        ) : null}
        <div class="form-actions">
          <DangerButton onClick={() => void handleReset()} disabled={deleting || rebootFlow.phase !== 'idle'}>
            Delete boiler state (/boiler.bin)
          </DangerButton>
        </div>
      </Card>

      <RebootOverlay flow={rebootFlow} />
    </div>
  );
}
