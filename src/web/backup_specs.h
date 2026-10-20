#pragma once

#include <backup/backup_core.hpp>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>

#include <cstddef>
#include <cstdint>

#include "config.h"
#include "defines.h"
#include "boiler/state.h"
#include "room/state.h"
#include "web/reboot_after_response.h"

// Project-specific backup/restore description consumed by the generic
// EDConfig handlers. The table order also defines archive member order.
namespace BackupSpecs
{
    constexpr EDConfig::BackupFileSpec kBackupFiles[] = {
        {"config.bin", "/config.bin", sizeof(Config), (uint8_t)CURRENT_VERSION, true},
        {"boiler.bin", "/boiler.bin", sizeof(BoilerState), 0, false},
        {"room_0.bin", "/room_0.bin", sizeof(RoomState), 0, false},
        {"room_1.bin", "/room_1.bin", sizeof(RoomState), 0, false},
        {"room_2.bin", "/room_2.bin", sizeof(RoomState), 0, false},
        {"room_3.bin", "/room_3.bin", sizeof(RoomState), 0, false},
        {"room_4.bin", "/room_4.bin", sizeof(RoomState), 0, false},
        {"room_5.bin", "/room_5.bin", sizeof(RoomState), 0, false},
        {"room_6.bin", "/room_6.bin", sizeof(RoomState), 0, false},
        {"room_7.bin", "/room_7.bin", sizeof(RoomState), 0, false},
    };

    constexpr size_t kBackupFileCount = sizeof(kBackupFiles) / sizeof(kBackupFiles[0]);

    static_assert(kBackupFileCount == 2 + ROOMS_COUNT, "backup file table must match ROOMS_COUNT");
    static_assert(kBackupFileCount <= EDConfig::BACKUP_MAX_FILES, "backup file table exceeds library limit");

    static_assert(sizeof(Config) + sizeof(uint16_t) <= EDConfig::BACKUP_DEFAULT_MAX_ARCHIVE_BYTES, "config.bin exceeds the backup archive cap");
    static_assert(sizeof(BoilerState) + sizeof(uint16_t) <= EDConfig::BACKUP_DEFAULT_MAX_ARCHIVE_BYTES, "boiler.bin exceeds the backup archive cap");
    static_assert(sizeof(RoomState) + sizeof(uint16_t) <= EDConfig::BACKUP_DEFAULT_MAX_ARCHIVE_BYTES, "room file exceeds the backup archive cap");

    // Both /api/config and /api/config/backup reply before rebooting so the
    // response reaches the client (see reboot_after_response.h).
    inline void scheduleBackupReboot()
    {
        RebootAfterResponse::schedule(200);
    }

    constexpr EDConfig::BackupHandlerConfig kBackupHandlerConfig = {
        kBackupFiles,
        kBackupFileCount,
        "prometey-config.zip",
        0,
        &scheduleBackupReboot,
    };

    constexpr EDConfig::ConfigFileHandlerConfig kConfigFileHandlerConfig = {
        "/config.bin",
        sizeof(Config),
        (uint8_t)CURRENT_VERSION,
        true,
        &scheduleBackupReboot,
    };
}
