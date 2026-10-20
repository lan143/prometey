import { useEffect, useRef } from 'preact/hooks';

const ZIP_NOTES =
  'Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone.';

const BIN_NOTES =
  'Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.';

const ZIP_CONFIRM_MESSAGE =
  'Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?';

const BIN_CONFIRM_MESSAGE =
  'Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?';

export function BackupPage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // <edc-config-backup-page> owns the download/restore flow and its own
    // reboot polling; this host only supplies Prometey's names and copy.
    const element = document.createElement('edc-config-backup-page');
    element.setAttribute('device-name', 'Prometey');
    element.setAttribute('archive-file-name', 'prometey-config.zip');
    element.setAttribute('zip-notes', ZIP_NOTES);
    element.setAttribute('bin-notes', BIN_NOTES);
    element.setAttribute('zip-confirm-text', ZIP_CONFIRM_MESSAGE);
    element.setAttribute('bin-confirm-text', BIN_CONFIRM_MESSAGE);
    host.current?.append(element);
    return () => element.remove();
  }, []);

  return <div ref={host} />;
}
