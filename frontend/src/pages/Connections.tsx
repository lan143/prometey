import { useCallback, useEffect, useState } from 'preact/hooks';
import { getSettings, postMqtt, LIMITS } from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Checkbox } from '../components/Checkbox';
import { Field } from '../components/Field';
import { NeedsRebootNotice } from '../components/NeedsRebootNotice';
import { PasswordField } from '../components/PasswordField';

interface MqttForm {
  host: string;
  port: string;
  login: string;
  password: string;
  haDiscoveryPrefix: string;
  mqttIsHADiscovery: boolean;
  stateTopic: string;
  commandTopic: string;
}

interface MqttErrors {
  host?: string;
  port?: string;
  login?: string;
  password?: string;
  haDiscoveryPrefix?: string;
  stateTopic?: string;
  commandTopic?: string;
}

const EMPTY_MQTT: MqttForm = {
  host: '',
  port: '',
  login: '',
  password: '',
  haDiscoveryPrefix: '',
  mqttIsHADiscovery: false,
  stateTopic: '',
  commandTopic: '',
};

function validateMqtt(form: MqttForm): MqttErrors {
  const errors: MqttErrors = {};

  if (form.host.trim().length === 0) {
    errors.host = 'Host is required.';
  } else if (form.host.length > LIMITS.mqtt.hostMax) {
    errors.host = `At most ${LIMITS.mqtt.hostMax} characters.`;
  }

  const port = Number(form.port);
  if (form.port.trim() === '') {
    errors.port = 'Port is required.';
  } else if (!Number.isInteger(port) || port < 1 || port > 65535) {
    errors.port = 'Port must be an integer between 1 and 65535.';
  }

  if (form.login.length > LIMITS.mqtt.loginMax) {
    errors.login = `At most ${LIMITS.mqtt.loginMax} characters.`;
  }
  if (form.password.length > LIMITS.mqtt.passwordMax) {
    errors.password = `At most ${LIMITS.mqtt.passwordMax} characters.`;
  }

  if (form.haDiscoveryPrefix.trim().length === 0) {
    errors.haDiscoveryPrefix = 'Discovery prefix is required.';
  } else if (form.haDiscoveryPrefix.length > LIMITS.mqtt.haDiscoveryPrefixMax) {
    errors.haDiscoveryPrefix = `At most ${LIMITS.mqtt.haDiscoveryPrefixMax} characters.`;
  }

  if (form.stateTopic.trim().length === 0) {
    errors.stateTopic =
      'Required - the device crashes if the state topic is missing.';
  } else if (form.stateTopic.length > LIMITS.mqtt.topicMax) {
    errors.stateTopic = `At most ${LIMITS.mqtt.topicMax} characters.`;
  }

  if (form.commandTopic.trim().length === 0) {
    errors.commandTopic =
      'Required - the device crashes if the command topic is missing.';
  } else if (form.commandTopic.length > LIMITS.mqtt.topicMax) {
    errors.commandTopic = `At most ${LIMITS.mqtt.topicMax} characters.`;
  }

  return errors;
}

function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}

export function ConnectionsPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [mqtt, setMqtt] = useState<MqttForm>(EMPTY_MQTT);
  const [mqttErrors, setMqttErrors] = useState<MqttErrors>({});

  const [mqttSaving, setMqttSaving] = useState(false);
  const [mqttNotice, setMqttNotice] = useState<string | null>(null);
  const [mqttError, setMqttError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getSettings();
    if (result.ok) {
      setMqtt({
        host: result.data.mqttHost,
        port: String(result.data.mqttPort),
        login: result.data.mqttLogin,
        password: result.data.mqttPassword,
        haDiscoveryPrefix: result.data.mqttHADiscoveryPrefix,
        mqttIsHADiscovery: result.data.mqttIsHADiscovery,
        stateTopic: result.data.mqttStateTopic,
        commandTopic: result.data.mqttCommandTopic,
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updateMqtt = (patch: Partial<MqttForm>) =>
    setMqtt((current) => ({ ...current, ...patch }));

  const handleMqttSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const errors = validateMqtt(mqtt);
      setMqttErrors(errors);
      setMqttNotice(null);
      setMqttError(null);
      if (hasErrors(errors)) {
        return;
      }

      setMqttSaving(true);
      const result = await postMqtt({
        host: mqtt.host,
        port: Number(mqtt.port),
        login: mqtt.login,
        password: mqtt.password,
        haDiscoveryPrefix: mqtt.haDiscoveryPrefix,
        mqttIsHADiscovery: mqtt.mqttIsHADiscovery,
        stateTopic: mqtt.stateTopic,
        commandTopic: mqtt.commandTopic,
      });
      setMqttSaving(false);
      if (result.ok) {
        setMqttNotice('MQTT settings saved to flash.');
      } else {
        setMqttError(result.message);
      }
    },
    [mqtt],
  );

  if (!loaded) {
    return (
      <Card title="Connections">
        <p class="muted">Loading connection settings&hellip;</p>
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

      <Card title="MQTT">
        <form onSubmit={handleMqttSubmit}>
          <Field
            label="Host"
            value={mqtt.host}
            onInput={(value) => updateMqtt({ host: value })}
            maxLength={LIMITS.mqtt.hostMax}
            error={mqttErrors.host}
            autoComplete="off"
          />
          <Field
            label="Port"
            value={mqtt.port}
            onInput={(value) => updateMqtt({ port: value })}
            type="number"
            min={1}
            max={65535}
            inputMode="numeric"
            error={mqttErrors.port}
          />
          <Field
            label="Login"
            value={mqtt.login}
            onInput={(value) => updateMqtt({ login: value })}
            maxLength={LIMITS.mqtt.loginMax}
            error={mqttErrors.login}
            autoComplete="off"
          />
          <PasswordField
            label="Password"
            value={mqtt.password}
            onInput={(value) => updateMqtt({ password: value })}
            maxLength={LIMITS.mqtt.passwordMax}
            error={mqttErrors.password}
            autoComplete="new-password"
          />
          <Field
            label="HA discovery prefix"
            value={mqtt.haDiscoveryPrefix}
            onInput={(value) => updateMqtt({ haDiscoveryPrefix: value })}
            maxLength={LIMITS.mqtt.haDiscoveryPrefixMax}
            error={mqttErrors.haDiscoveryPrefix}
            autoComplete="off"
          />
          <Checkbox
            label="Enable Home Assistant discovery"
            checked={mqtt.mqttIsHADiscovery}
            onChange={(checked) => updateMqtt({ mqttIsHADiscovery: checked })}
          />
          <Field
            label="State topic"
            value={mqtt.stateTopic}
            onInput={(value) => updateMqtt({ stateTopic: value })}
            maxLength={LIMITS.mqtt.topicMax}
            error={mqttErrors.stateTopic}
            help="Must not be empty: the device crashes on a missing state topic."
            autoComplete="off"
          />
          <Field
            label="Command topic"
            value={mqtt.commandTopic}
            onInput={(value) => updateMqtt({ commandTopic: value })}
            maxLength={LIMITS.mqtt.topicMax}
            error={mqttErrors.commandTopic}
            help="Must not be empty: the device crashes on a missing command topic."
            autoComplete="off"
          />
          {mqttNotice ? (
            <Banner
              kind="success"
              message={mqttNotice}
              onClose={() => setMqttNotice(null)}
            />
          ) : null}
          {mqttError ? (
            <Banner
              kind="error"
              message={mqttError}
              onClose={() => setMqttError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={mqttSaving}>
              {mqttSaving ? 'Saving\u2026' : 'Save MQTT'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
