import { useCallback, useId, useRef, useState } from 'preact/hooks';
import {
  downloadBackup,
  downloadConfig,
  uploadBackup,
  uploadConfig,
} from '../api/client';
import { Banner, type BannerKind } from '../components/Banner';
import { Button, DangerButton } from '../components/Button';
import { Card } from '../components/Card';
import { RebootOverlay, useRebootFlow } from '../components/RebootFlow';

/**
 * Client-side sanity cap shared by both restore flows. The real firmware
 * archive cap is 16 KB and the config file size is `sizeof(Config) + 2`, both of
 * which change with the firmware version, so the UI only rejects clearly-wrong
 * files and leaves exact size/version/CRC validation to the device.
 */
const MAX_BACKUP_UPLOAD_BYTES = 16_384;

/** Restore flow selected by the picked file's extension. */
type RestoreKind = 'zip' | 'bin';

const ZIP_CONFIRM_MESSAGE =
  'Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?';

const BIN_CONFIRM_MESSAGE =
  'Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?';

interface Notice {
  kind: BannerKind;
  message: string;
}

/** Dispatch the restore flow from the selected file name. */
function restoreKind(fileName: string): RestoreKind | null {
  const lower = fileName.toLowerCase();
  if (lower.endsWith('.zip')) {
    return 'zip';
  }
  if (lower.endsWith('.bin')) {
    return 'bin';
  }
  return null;
}

/** Triggers a browser "save as" for the downloaded bytes. */
function saveBytes(bytes: Uint8Array, filename: string): void {
  // Copy into a fresh ArrayBuffer: TypeScript's `BlobPart` rejects a plain
  // `Uint8Array<ArrayBufferLike>` because it may be backed by a SharedArrayBuffer.
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  const blob = new Blob([buffer], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Revoke on the next tick so the click has started the download.
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export function BackupPage() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [downloading, setDownloading] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<Notice | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const rebootFlow = useRebootFlow();

  const busy = uploading || rebootFlow.phase !== 'idle';

  const handleDownloadBackup = useCallback(async () => {
    setDownloading(true);
    setDownloadNotice(null);
    const result = await downloadBackup();
    setDownloading(false);

    if (!result.ok) {
      setDownloadNotice({ kind: 'error', message: result.message });
      return;
    }

    saveBytes(result.data, 'prometey-config.zip');
    setDownloadNotice({
      kind: 'info',
      message:
        'Full backup downloaded as prometey-config.zip. It contains config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext — store it safely.',
    });
  }, []);

  const handleDownloadConfig = useCallback(async () => {
    setDownloading(true);
    setDownloadNotice(null);
    const result = await downloadConfig();
    setDownloading(false);

    if (!result.ok) {
      setDownloadNotice({ kind: 'error', message: result.message });
      return;
    }

    saveBytes(result.data, 'config.bin');
    setDownloadNotice({
      kind: 'info',
      message:
        'Config downloaded as config.bin. It contains your Wi-Fi and MQTT credentials in plaintext — store it safely.',
    });
  }, []);

  const handleFileChange = useCallback((input: HTMLInputElement) => {
    const file = input.files && input.files[0] ? input.files[0] : null;
    setSelectedFile(file);
    setUploadError(null);

    if (!file) {
      setFileError(null);
      return;
    }
    if (file.size === 0) {
      setFileError('The selected file is empty.');
      return;
    }
    if (file.size > MAX_BACKUP_UPLOAD_BYTES) {
      setFileError('This does not look like a Prometey backup file (max 16 KB).');
      return;
    }
    if (!restoreKind(file.name)) {
      setFileError('Unsupported file type. Choose a .zip full backup or a .bin config file.');
      return;
    }
    setFileError(null);
  }, []);

  const handleUpload = useCallback(async () => {
    if (!selectedFile || fileError) {
      return;
    }

    const kind = restoreKind(selectedFile.name);
    if (!kind) {
      setUploadError(
        'Unsupported file type. Choose a .zip full backup or a .bin config file.',
      );
      return;
    }

    const confirmed = window.confirm(
      kind === 'zip' ? ZIP_CONFIRM_MESSAGE : BIN_CONFIRM_MESSAGE,
    );
    if (!confirmed) {
      return;
    }

    setUploading(true);
    setUploadError(null);
    try {
      const bytes = new Uint8Array(await selectedFile.arrayBuffer());
      const result =
        kind === 'zip' ? await uploadBackup(bytes) : await uploadConfig(bytes);
      if (result.ok) {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
        setSelectedFile(null);
        setFileError(null);
        rebootFlow.start();
      } else {
        setUploadError(result.message);
      }
    } catch (error) {
      setUploadError(
        error instanceof Error
          ? error.message
          : 'Could not read the selected backup file.',
      );
    } finally {
      setUploading(false);
    }
  }, [selectedFile, fileError, rebootFlow.start]);

  return (
    <div class="stack">
      <Banner
        kind="info"
        message="Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone."
      />

      <Card title="Download backup">
        <p class="muted">
          Download a zip of everything the device has stored: config.bin +
          boiler state + room states (8). It contains your Wi-Fi and MQTT
          credentials in plaintext, so keep the archive somewhere safe.
        </p>
        {downloadNotice ? (
          <Banner
            kind={downloadNotice.kind}
            message={downloadNotice.message}
            onClose={() => setDownloadNotice(null)}
          />
        ) : null}
        <div class="form-actions">
          <Button
            variant="primary"
            onClick={() => void handleDownloadBackup()}
            disabled={downloading || rebootFlow.phase !== 'idle'}
          >
            {downloading ? 'Downloading\u2026' : 'Download full backup (.zip)'}
          </Button>
          <Button
            onClick={() => void handleDownloadConfig()}
            disabled={downloading || rebootFlow.phase !== 'idle'}
          >
            Download config.bin only
          </Button>
        </div>
      </Card>

      <Card title="Restore from file" class="danger-zone">
        <p class="muted">
          Restore a previously downloaded .zip full backup, or a single .bin
          config file. The device validates size, version and CRC and, for a
          full archive, commits all members atomically before rebooting. A
          rejected file changes nothing: size/version/CRC errors mean the file
          did not match this firmware.
        </p>
        <label class="field" for={inputId}>
          <span class="field-label">Backup file</span>
          <input
            id={inputId}
            ref={inputRef}
            type="file"
            accept=".zip,.bin,application/octet-stream"
            disabled={busy}
            onChange={(event) => handleFileChange(event.currentTarget)}
          />
          {fileError ? <span class="field-error">{fileError}</span> : null}
        </label>
        {selectedFile && !fileError ? (
          <p class="muted">
            Selected: {selectedFile.name} ({selectedFile.size} bytes)
            {restoreKind(selectedFile.name) === 'zip'
              ? ' — full backup (all files)'
              : ' — config.bin only'}
          </p>
        ) : null}
        {uploadError ? (
          <Banner
            kind="error"
            message={uploadError}
            onClose={() => setUploadError(null)}
          />
        ) : null}
        <div class="form-actions">
          <DangerButton
            onClick={() => void handleUpload()}
            disabled={!selectedFile || !!fileError || busy}
          >
            {uploading ? 'Uploading\u2026' : 'Upload & reboot device'}
          </DangerButton>
        </div>
      </Card>

      <RebootOverlay flow={rebootFlow} />
    </div>
  );
}
