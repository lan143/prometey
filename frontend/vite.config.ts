import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

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
