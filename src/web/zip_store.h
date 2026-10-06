#pragma once

// Minimal, dependency-free STORE-only ZIP reader/writer.
//
// This header is deliberately free of Arduino/ESP/LittleFS includes so it can
// be compiled and exercised by a host test harness. Only the standard C++
// library is used.
//
// Scope: just enough ZIP to archive a handful of small raw binary files:
//   * writer: uncompressed (method 0) local files + central directory + EOCD
//   * reader: strict, bounds-checked parse of commentless / small-comment STORE
//     archives; rejects encryption, data descriptors, zip64 and any non-STORE
//     member.
//
// All multi-byte fields are little-endian per the ZIP specification. Every read
// is bounds-checked with an overflow-safe helper; malformed input never causes
// an out-of-range access.

#include <cstddef>
#include <cstdint>
#include <cstring>
#include <string>
#include <vector>

namespace ZipStore
{

struct ZipEntryInput
{
    const char* name;
    const uint8_t* data;
    size_t len;
};

struct ZipEntryRef
{
    std::string name;
    size_t dataOffset;
    size_t len;
    uint32_t crc;
    uint16_t method;
    uint16_t flags;
};

namespace detail
{
    constexpr uint32_t LOCAL_SIG = 0x04034b50u;
    constexpr uint32_t CENTRAL_SIG = 0x02014b50u;
    constexpr uint32_t EOCD_SIG = 0x06054b50u;
    constexpr uint32_t ZIP64_LOCATOR_SIG = 0x07064b50u;

    constexpr uint16_t FLAG_ENCRYPTED = 0x0001;
    constexpr uint16_t FLAG_DATA_DESCRIPTOR = 0x0008;

    constexpr size_t LOCAL_HEADER_SIZE = 30;
    constexpr size_t CENTRAL_HEADER_SIZE = 46;
    constexpr size_t EOCD_SIZE = 22;

    // Overflow-safe bounds check: true when [offset, offset + size) fits in
    // [0, total). Avoids computing offset + size, which could wrap.
    inline bool inBounds(size_t offset, size_t size, size_t total)
    {
        return offset <= total && size <= total - offset;
    }

    inline uint16_t getU16(const uint8_t* p)
    {
        return (uint16_t)((uint16_t)p[0] | ((uint16_t)p[1] << 8));
    }

    inline uint32_t getU32(const uint8_t* p)
    {
        return (uint32_t)p[0]
            | ((uint32_t)p[1] << 8)
            | ((uint32_t)p[2] << 16)
            | ((uint32_t)p[3] << 24);
    }

    inline void putU16(std::vector<uint8_t>& out, uint16_t value)
    {
        out.push_back((uint8_t)(value & 0xff));
        out.push_back((uint8_t)((value >> 8) & 0xff));
    }

    inline void putU32(std::vector<uint8_t>& out, uint32_t value)
    {
        out.push_back((uint8_t)(value & 0xff));
        out.push_back((uint8_t)((value >> 8) & 0xff));
        out.push_back((uint8_t)((value >> 16) & 0xff));
        out.push_back((uint8_t)((value >> 24) & 0xff));
    }

}

// Standard reflected CRC32 (poly 0xEDB88320, init/final xor 0xffffffff).
// Incremental-safe: pass the previous result back in, starting from
// crc32Zip(0, ...). Matches zlib's crc32()/Python zipfile CRC values.
//
// The lookup table is generated lazily on first use. The firmware runs a single
// cooperative loop, so no synchronization is required; the host test is single
// threaded too. (A constexpr table is not available here because the ESP32
// toolchain compiles as C++11, where constexpr constructors must have an empty
// body.)
inline uint32_t crc32Zip(uint32_t crc, const uint8_t* data, size_t len)
{
    static uint32_t table[256];
    static bool tableReady = false;

    if (!tableReady) {
        for (uint32_t i = 0; i < 256; i++) {
            uint32_t c = i;
            for (int k = 0; k < 8; k++) {
                c = (c & 1) ? (0xEDB88320u ^ (c >> 1)) : (c >> 1);
            }
            table[i] = c;
        }
        tableReady = true;
    }

    crc ^= 0xffffffffu;

    for (size_t i = 0; i < len; i++) {
        crc = table[(crc ^ data[i]) & 0xff] ^ (crc >> 8);
    }

    return crc ^ 0xffffffffu;
}

// Append a STORE (uncompressed) archive to `out`. Offsets are relative to the
// start of the appended region, so callers normally pass an empty vector.
// Returns false for unrepresentable input (too many entries, empty name,
// name/entry too large, null data with non-zero length).
inline bool zipBuildStore(const ZipEntryInput* entries, size_t count, std::vector<uint8_t>& out)
{
    if (count > 0xffffu) {
        return false;
    }

    if (count > 0 && entries == nullptr) {
        return false;
    }

    const size_t zipStart = out.size();

    struct CdRecord
    {
        std::string name;
        size_t localOffset;
        uint32_t crc;
        uint32_t size;
    };

    std::vector<CdRecord> records;
    records.reserve(count);

    for (size_t i = 0; i < count; i++) {
        const ZipEntryInput& entry = entries[i];

        if (entry.name == nullptr) {
            return false;
        }

        if (entry.data == nullptr && entry.len != 0) {
            return false;
        }

        const size_t nameLen = std::strlen(entry.name);

        if (nameLen == 0 || nameLen > 0xffffu || entry.len > (size_t)0xffffffffu) {
            return false;
        }

        const uint32_t crc = crc32Zip(0, entry.data, entry.len);
        const uint32_t size = (uint32_t)entry.len;
        const size_t localOffset = out.size() - zipStart;

        // Local file header. Fixed mod time/date keeps archives reproducible.
        detail::putU32(out, detail::LOCAL_SIG);
        detail::putU16(out, 20);      // version needed to extract
        detail::putU16(out, 0);       // general purpose flags
        detail::putU16(out, 0);       // compression method: STORE
        detail::putU16(out, 0);       // last mod time 00:00:00
        detail::putU16(out, 0x0021);  // last mod date 1980-01-01
        detail::putU32(out, crc);
        detail::putU32(out, size);    // compressed size
        detail::putU32(out, size);    // uncompressed size
        detail::putU16(out, (uint16_t)nameLen);
        detail::putU16(out, 0);       // extra field length

        out.insert(out.end(), entry.name, entry.name + nameLen);
        if (entry.len > 0) {
            out.insert(out.end(), entry.data, entry.data + entry.len);
        }

        records.push_back(CdRecord{std::string(entry.name, nameLen), localOffset, crc, size});
    }

    const size_t cdOffset = out.size() - zipStart;

    // Central directory.
    for (const CdRecord& record : records) {
        detail::putU32(out, detail::CENTRAL_SIG);
        detail::putU16(out, 20);      // version made by
        detail::putU16(out, 20);      // version needed to extract
        detail::putU16(out, 0);       // general purpose flags
        detail::putU16(out, 0);       // compression method
        detail::putU16(out, 0);       // last mod time
        detail::putU16(out, 0x0021);  // last mod date
        detail::putU32(out, record.crc);
        detail::putU32(out, record.size);
        detail::putU32(out, record.size);
        detail::putU16(out, (uint16_t)record.name.size());
        detail::putU16(out, 0);       // extra field length
        detail::putU16(out, 0);       // file comment length
        detail::putU16(out, 0);       // disk number start
        detail::putU16(out, 0);       // internal file attributes
        detail::putU32(out, 0);       // external file attributes
        detail::putU32(out, (uint32_t)record.localOffset);

        out.insert(out.end(), record.name.begin(), record.name.end());
    }

    const size_t cdSize = out.size() - zipStart - cdOffset;

    // End of central directory record.
    detail::putU32(out, detail::EOCD_SIG);
    detail::putU16(out, 0);                    // number of this disk
    detail::putU16(out, 0);                    // disk with start of central directory
    detail::putU16(out, (uint16_t)count);      // entries on this disk
    detail::putU16(out, (uint16_t)count);      // total entries
    detail::putU32(out, (uint32_t)cdSize);
    detail::putU32(out, (uint32_t)cdOffset);
    detail::putU16(out, 0);                    // comment length

    return true;
}

// Strict parse of a STORE-only archive. Any malformed structure, unknown
// signature, out-of-bounds field, encryption, data descriptor, multi-disk or
// zip64 marker, or non-zero compression method makes the whole parse fail.
// Duplicate names are tolerated here; the endpoint decides how to treat them.
inline bool zipParseStore(const uint8_t* buf, size_t len, std::vector<ZipEntryRef>& entries)
{
    entries.clear();

    if (buf == nullptr || len < detail::EOCD_SIZE) {
        return false;
    }

    // Find the EOCD. Commentless archives (the common case) place it at
    // len - 22; scan back up to 64 bytes for a possible small trailing comment.
    const size_t minEocd = (len >= detail::EOCD_SIZE + 64) ? (len - detail::EOCD_SIZE - 64) : 0;
    size_t eocdPos = 0;
    bool found = false;

    for (size_t pos = len - detail::EOCD_SIZE;; pos--) {
        if (detail::getU32(buf + pos) == detail::EOCD_SIG
            && (size_t)detail::getU16(buf + pos + 20) == (len - pos - detail::EOCD_SIZE)) {
            eocdPos = pos;
            found = true;
            break;
        }

        if (pos == minEocd) {
            break;
        }
    }

    if (!found) {
        return false;
    }

    const uint16_t diskNumber = detail::getU16(buf + eocdPos + 4);
    const uint16_t cdDiskNumber = detail::getU16(buf + eocdPos + 6);
    const uint16_t entriesOnDisk = detail::getU16(buf + eocdPos + 8);
    const uint16_t totalEntries = detail::getU16(buf + eocdPos + 10);
    const uint32_t cdSize = detail::getU32(buf + eocdPos + 12);
    const uint32_t cdOffset = detail::getU32(buf + eocdPos + 16);

    // Single-disk, non-zip64 archives only.
    if (diskNumber != 0 || cdDiskNumber != 0 || entriesOnDisk != totalEntries) {
        return false;
    }

    if (totalEntries == 0xffffu || cdSize == 0xffffffffu || cdOffset == 0xffffffffu) {
        return false;
    }

    if (totalEntries > 32u) {
        return false;
    }

    if (eocdPos >= 20 && detail::getU32(buf + eocdPos - 20) == detail::ZIP64_LOCATOR_SIG) {
        return false;
    }

    if (!detail::inBounds((size_t)cdOffset, (size_t)cdSize, len)) {
        return false;
    }

    const size_t cdEnd = (size_t)cdOffset + (size_t)cdSize;
    size_t cursor = (size_t)cdOffset;

    for (uint16_t i = 0; i < totalEntries; i++) {
        if (!detail::inBounds(cursor, detail::CENTRAL_HEADER_SIZE, cdEnd)) {
            return false;
        }

        if (detail::getU32(buf + cursor) != detail::CENTRAL_SIG) {
            return false;
        }

        const uint16_t flags = detail::getU16(buf + cursor + 8);
        const uint16_t method = detail::getU16(buf + cursor + 10);
        const uint32_t crc = detail::getU32(buf + cursor + 16);
        const uint32_t compressedSize = detail::getU32(buf + cursor + 20);
        const uint32_t uncompressedSize = detail::getU32(buf + cursor + 24);
        const uint16_t nameLen = detail::getU16(buf + cursor + 28);
        const uint16_t extraLen = detail::getU16(buf + cursor + 30);
        const uint16_t commentLen = detail::getU16(buf + cursor + 32);
        const uint32_t localOffset = detail::getU32(buf + cursor + 42);

        if ((flags & detail::FLAG_ENCRYPTED) != 0 || (flags & detail::FLAG_DATA_DESCRIPTOR) != 0) {
            return false;
        }

        if (method != 0) {
            return false;
        }

        if (nameLen == 0) {
            return false;
        }

        if (compressedSize == 0xffffffffu || uncompressedSize == 0xffffffffu || localOffset == 0xffffffffu) {
            return false;
        }

        if (compressedSize != uncompressedSize) {
            return false;
        }

        const size_t nameOffset = cursor + detail::CENTRAL_HEADER_SIZE;
        const size_t cdEntrySize = (size_t)nameLen + extraLen + commentLen;

        if (!detail::inBounds(nameOffset, cdEntrySize, cdEnd)) {
            return false;
        }

        // Local header for this member.
        if (!detail::inBounds((size_t)localOffset, detail::LOCAL_HEADER_SIZE, len)) {
            return false;
        }

        if (detail::getU32(buf + localOffset) != detail::LOCAL_SIG) {
            return false;
        }

        const uint16_t localNameLen = detail::getU16(buf + localOffset + 26);
        const uint16_t localExtraLen = detail::getU16(buf + localOffset + 28);
        const size_t dataOffset = (size_t)localOffset + detail::LOCAL_HEADER_SIZE + localNameLen + localExtraLen;

        if (!detail::inBounds(dataOffset, (size_t)compressedSize, len)) {
            return false;
        }

        ZipEntryRef ref;
        ref.name.assign(reinterpret_cast<const char*>(buf + nameOffset), nameLen);
        ref.dataOffset = dataOffset;
        ref.len = (size_t)compressedSize;
        ref.crc = crc;
        ref.method = method;
        ref.flags = flags;

        entries.push_back(std::move(ref));

        cursor = nameOffset + cdEntrySize;
    }

    return true;
}

}  // namespace ZipStore
