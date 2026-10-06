#!/usr/bin/env bash
#
# Host-side test suite for the pure backup/restore logic (ZipStore +
# BackupNames). Single entrypoint: `bash tests/host/run_tests.sh`.
#
# Idempotent: builds and runs everything in a mktemp workdir and removes it on
# exit. Exits non-zero on any failure.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

CXX="${CXX:-clang++}"
if ! command -v "$CXX" >/dev/null 2>&1; then
    echo "FAIL: C++ compiler '$CXX' not found" >&2
    exit 1
fi
if ! command -v python3 >/dev/null 2>&1; then
    echo "FAIL: python3 not found (required for the cross-checks)" >&2
    exit 1
fi

WORKDIR="$(mktemp -d "${TMPDIR:-/tmp}/prometey-backup-tests.XXXXXX")"
cleanup() {
    rm -rf "$WORKDIR"
}
trap cleanup EXIT

mkdir -p "$WORKDIR/expected"

# ---------------------------------------------------------------------------
# Python reference implementation of the ed-config CRC16 (data_mgr.hpp:70-89).
# ---------------------------------------------------------------------------
cat > "$WORKDIR/py_crc16.py" <<'PY'
import sys

POLY = 0xA001


def crc16(data):
    crc = 0xFFFF
    for byte in data:
        crc ^= byte
        for _ in range(8):
            crc >>= 1
            if crc & 1:
                crc ^= POLY
    return crc


with open(sys.argv[1], "r") as handle:
    for line in handle:
        print(crc16(bytes.fromhex(line.strip())))
PY

# ---------------------------------------------------------------------------
# Independent check of the C++ writer's output via Python's zipfile module.
# ---------------------------------------------------------------------------
cat > "$WORKDIR/py_check_our_zip.py" <<'PY'
import os
import sys
import zipfile

zip_path, expected_dir = sys.argv[1], sys.argv[2]
names = sorted(os.listdir(expected_dir))

with zipfile.ZipFile(zip_path) as archive:
    if archive.testzip() is not None:
        print("FAIL: testzip() reported a corrupt member", file=sys.stderr)
        sys.exit(1)
    if sorted(archive.namelist()) != names:
        print(
            "FAIL: namelist %r != expected %r" % (sorted(archive.namelist()), names),
            file=sys.stderr,
        )
        sys.exit(1)
    for name in names:
        with open(os.path.join(expected_dir, name), "rb") as handle:
            expected = handle.read()
        actual = archive.read(name)
        if actual != expected:
            print("FAIL: payload mismatch for %s" % name, file=sys.stderr)
            sys.exit(1)

sys.exit(0)
PY

# ---------------------------------------------------------------------------
# Python-generated STORE archives (zipfile, and Info-ZIP when available) plus
# a manifest of name/size/CRC32 for the C++ reader to cross-check.
# ---------------------------------------------------------------------------
cat > "$WORKDIR/py_make_zips.py" <<'PY'
import os
import shutil
import subprocess
import sys
import zipfile
import zlib

expected_dir, out_dir = sys.argv[1], sys.argv[2]
names = ["config.bin", "boiler.bin", "room_0.bin", "room_7.bin", "room_3.bin"]


def write_manifest(zip_path, manifest_path):
    lines = []
    with zipfile.ZipFile(zip_path) as archive:
        for info in archive.infolist():
            data = archive.read(info.filename)
            crc = zlib.crc32(data) & 0xFFFFFFFF
            if crc != info.CRC:
                print(
                    "FAIL: CRC mismatch for %s in %s" % (info.filename, zip_path),
                    file=sys.stderr,
                )
                sys.exit(1)
            lines.append("%s %d %d" % (info.filename, len(data), crc))
    with open(manifest_path, "w") as handle:
        handle.write("\n".join(lines) + "\n")


py_zip = os.path.join(out_dir, "python_store.zip")
if os.path.exists(py_zip):
    os.remove(py_zip)
with zipfile.ZipFile(py_zip, "w", zipfile.ZIP_STORED) as archive:
    for name in names:
        archive.write(os.path.join(expected_dir, name), arcname=name)
write_manifest(py_zip, os.path.join(out_dir, "python_store.manifest"))

zip_bin = shutil.which("zip")
if zip_bin:
    cli_zip = os.path.join(out_dir, "zip_cli_store.zip")
    if os.path.exists(cli_zip):
        os.remove(cli_zip)
    subprocess.check_call([zip_bin, "-X", "-0", "-q", cli_zip] + names, cwd=expected_dir)
    write_manifest(cli_zip, os.path.join(out_dir, "zip_cli_store.manifest"))
    print("CLI_ZIP=yes")
else:
    print("CLI_ZIP=no")
PY

# ---------------------------------------------------------------------------
# Build the C++ test binary.
# ---------------------------------------------------------------------------
SRC="$SCRIPT_DIR/test_backup_pure.cpp"
BIN="$WORKDIR/test_backup_pure"
COMMON_FLAGS=(-std=c++11 -Wall -Wextra -Werror -g -I"$REPO_ROOT")

if "$CXX" "${COMMON_FLAGS[@]}" -fsanitize=address,undefined "$SRC" -o "$BIN" 2>"$WORKDIR/build_sanitized.log"; then
    echo "NOTE: compiled with -fsanitize=address,undefined"
else
    echo "NOTE: sanitizer build failed; retrying without sanitizers" >&2
    sed -n '1,60p' "$WORKDIR/build_sanitized.log" >&2
    "$CXX" "${COMMON_FLAGS[@]}" "$SRC" -o "$BIN"
    echo "NOTE: running without sanitizers"
fi

# ---------------------------------------------------------------------------
# C++-only cases (1, 3, 6, 7, 8) + artifact emission.
# ---------------------------------------------------------------------------
echo "--- C++ self checks ---"
"$BIN" "$WORKDIR" self

# ---------------------------------------------------------------------------
# Case 2: CRC16 mirror vs Python reference.
# ---------------------------------------------------------------------------
echo "--- Python CRC16 reference ---"
python3 "$WORKDIR/py_crc16.py" "$WORKDIR/crc16_input.txt" > "$WORKDIR/crc16_py.txt"

# ---------------------------------------------------------------------------
# Case 4: writer cross-checked against Python's zipfile module.
# ---------------------------------------------------------------------------
echo "--- Case 4: python zipfile cross-check ---"
if python3 "$WORKDIR/py_check_our_zip.py" "$WORKDIR/our_archive.zip" "$WORKDIR/expected"; then
    echo "PASS 4 writer cross-checked against python zipfile"
else
    echo "FAIL 4 writer cross-checked against python zipfile" >&2
    exit 1
fi

# ---------------------------------------------------------------------------
# Case 5: Python-generated archives, validated by the C++ reader.
# ---------------------------------------------------------------------------
echo "--- Python-generated archives ---"
ZIP_STATUS="$(python3 "$WORKDIR/py_make_zips.py" "$WORKDIR/expected" "$WORKDIR")"
if [[ "$ZIP_STATUS" == *"CLI_ZIP=no"* ]]; then
    echo "NOTE: 'zip' CLI not found; case 5b (Info-ZIP STORE archive) skipped"
fi

echo "--- C++ external checks ---"
"$BIN" "$WORKDIR" external

echo "ALL HOST TESTS PASSED"
