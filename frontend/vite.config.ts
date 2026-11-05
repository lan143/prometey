import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

const frontendRoot = new URL('./', import.meta.url).pathname;

// Mirrors scripts/platformio_version.py: short HEAD sha, optional nearest tag
// prefix and a -dirty suffix when the working tree has uncommitted changes.
function resolveGitVersion(): string {
  const run = (args: string): string => {
    try {
      return execSync(`git ${args}`, {
        cwd: frontendRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
    } catch {
      return '';
    }
  };

  const hash = run('rev-parse --short HEAD');
  if (!hash) {
    return 'unknown';
  }

  const dirty = run('status --porcelain') ? '-dirty' : '';
  const tag = run('describe --tags --abbrev=0');
  return tag ? `${tag}-${hash}${dirty}` : `${hash}${dirty}`;
}

// The firmware serves data/ verbatim from LittleFS at the device root
// (`serveStatic("/", LittleFS, "/").setDefaultFile("index.html")`), so the
// production build must land in ../data with a relative base and no hash-free
// surprises. Device API paths under /api/* and /healthcheck/* are reserved by
// the firmware; Vite only ever emits assets under /assets/* plus index.html.
//
// There is intentionally no dev-server proxy here: the device is its own
// origin and there is no backend to proxy to during development.
export default defineConfig({
  base: './',
  define: {
    __UI_VERSION__: JSON.stringify(resolveGitVersion()),
  },
  plugins: [preact()],
  build: {
    outDir: '../data',
    emptyOutDir: true,
    // Keep CSS/JS as separate /assets files (never inline into index.html) so
    // the ESP32 does not have to push a single oversized HTML document.
    assetsInlineLimit: 4096,
    // Compact, dependency-light output for a heap-constrained device.
    sourcemap: false,
    cssCodeSplit: false,
    reportCompressedSize: false,
  },
});
