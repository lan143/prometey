# Host-side backup/restore tests
Pure (non-Arduino) tests for the config backup/restore feature:
- `src/web/zip_store.h`: crc32Zip + STORE-only zipBuildStore/zipParseStore
  roundtrip, validation, strict rejection matrix, mutation fuzz.
- `src/web/config_backup_handler.h`: BackupNames classify half, built with
  -DPROMETEY_BACKUP_HOST_TEST.

## Run
    bash tests/host/run_tests.sh

Compiles with -std=c++11 -Wall -Wextra -Werror -g -fsanitize=address,undefined,
then runs C++ cases and Python cross-checks in a mktemp -d dir removed on exit.
Re-runnable; non-zero on failure. If sanitizers fail to compile, a NOTE is
printed and it retries without them.

## Why Python
Python's zipfile is an independent reference: testzip() checks our writer's
headers/CRCs and builds STORE archives for the reader. The ed-config CRC16 is
mirrored in C++ (as in firmware) and Python to catch bit-level drift; hardware
is not covered.
