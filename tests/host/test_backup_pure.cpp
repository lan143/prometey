// Host-side tests for the pure (non-Arduino) backup/restore logic.
//
// Covers:
//   * ZipStore::crc32Zip vectors + incremental safety
//   * the ed-config CRC16 mirror against a Python reference implementation
//   * ZipStore writer -> reader roundtrip with ed-config-style members
//   * cross-checks of the writer/reader against Python's zipfile module
//   * the strict-parser rejection matrix and a mutation fuzz sweep
//   * BackupNames::classify / classifyAndMark
//
// This file uses only the standard C++ library. It is compiled by
// tests/host/run_tests.sh, which also runs the Python half of the cross-checks.
//
// Usage: test_backup_pure <workdir> self|external
//   self      C++-only cases + emit artifacts consumed by Python
//   external  validate artifacts produced by Python (CRC16 + external zips)

#ifndef PROMETEY_BACKUP_HOST_TEST
#define PROMETEY_BACKUP_HOST_TEST
#endif

#include "../../src/web/zip_store.h"
#include "../../src/web/config_backup_handler.h"

#include <algorithm>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <fstream>
#include <random>
#include <sstream>
#include <string>
#include <utility>
#include <vector>

namespace
{

int g_fail = 0;

struct TestCase
{
    const char* name;
    bool ok;
    std::string detail;

    explicit TestCase(const char* caseName) : name(caseName), ok(true) {}

    ~TestCase()
    {
        if (ok) {
            std::printf("PASS %s\n", name);
        } else {
            std::printf("FAIL %s: %s\n", name, detail.c_str());
            ++g_fail;
        }
    }

    void expect(bool condition, const std::string& what)
    {
        if (!condition && ok) {
            ok = false;
            detail = what;
        }
    }
};

// ---------------------------------------------------------------------------
// Deterministic fixtures
// ---------------------------------------------------------------------------

const uint8_t kConfigVersion = 0x07;
const size_t kConfigDataSize = 40;
const size_t kBoilerDataSize = 8;
const size_t kRoomDataSize = 12;

// Bit-exact mirror of EDConfig::DataMgr::calculateChecksum()
// (.pio/libdeps/kc868a16/ed-config/src/data_mgr.hpp:70-89).
uint16_t crc16Mirror(uint16_t crc, const uint8_t* data, size_t len)
{
    for (size_t i = 0; i < len; i++) {
        crc ^= data[i];
        for (uint8_t j = 0; j < 8; j++) {
            crc >>= 1;
            if (crc & 0x01) {
                crc ^= 0xa001;
            }
        }
    }
    return crc;
}

std::vector<uint8_t> randomBytes(size_t count, uint32_t seed)
{
    std::mt19937 rng(seed);
    std::uniform_int_distribution<int> dist(0, 255);
    std::vector<uint8_t> out(count);
    for (size_t i = 0; i < count; i++) {
        out[i] = (uint8_t)dist(rng);
    }
    return out;
}

// Raw struct bytes followed by a native little-endian uint16_t CRC16 trailer,
// matching the on-disk ed-config layout (littlefs_storage.hpp:49-80).
std::vector<uint8_t> makeEdConfigPayload(size_t dataSize, uint32_t seed, bool isConfig)
{
    std::vector<uint8_t> data = randomBytes(dataSize, seed);
    if (isConfig && !data.empty()) {
        data[0] = kConfigVersion;
    }
    const uint16_t crc = crc16Mirror(0xffff, data.empty() ? nullptr : data.data(), data.size());
    data.push_back((uint8_t)(crc & 0xff));
    data.push_back((uint8_t)((crc >> 8) & 0xff));
    return data;
}

struct Payload
{
    std::string name;
    std::vector<uint8_t> bytes;
};

std::vector<Payload> buildExpectedPayloads()
{
    std::vector<Payload> out;

    Payload config;
    config.name = "config.bin";
    config.bytes = makeEdConfigPayload(kConfigDataSize, 1001u, true);
    out.push_back(std::move(config));

    Payload boiler;
    boiler.name = "boiler.bin";
    boiler.bytes = makeEdConfigPayload(kBoilerDataSize, 1002u, false);
    out.push_back(std::move(boiler));

    Payload room0;
    room0.name = "room_0.bin";
    room0.bytes = makeEdConfigPayload(kRoomDataSize, 1003u, false);
    out.push_back(std::move(room0));

    Payload room7;
    room7.name = "room_7.bin";
    room7.bytes = makeEdConfigPayload(kRoomDataSize, 1004u, false);
    out.push_back(std::move(room7));

    // Empty member: the writer/parser must tolerate a zero-length entry.
    Payload room3;
    room3.name = "room_3.bin";
    out.push_back(std::move(room3));

    return out;
}

bool buildArchive(const std::vector<Payload>& payloads, std::vector<uint8_t>& out)
{
    std::vector<ZipStore::ZipEntryInput> entries;
    entries.reserve(payloads.size());

    for (size_t i = 0; i < payloads.size(); i++) {
        ZipStore::ZipEntryInput entry;
        entry.name = payloads[i].name.c_str();
        entry.data = payloads[i].bytes.empty() ? nullptr : payloads[i].bytes.data();
        entry.len = payloads[i].bytes.size();
        entries.push_back(entry);
    }

    return ZipStore::zipBuildStore(entries.data(), entries.size(), out);
}

size_t expectedDataSize(const std::string& name)
{
    if (name == "config.bin") {
        return kConfigDataSize;
    }
    if (name == "boiler.bin") {
        return kBoilerDataSize;
    }
    if (name.size() == 10 && name.compare(0, 5, "room_") == 0 && name.compare(6, 4, ".bin") == 0) {
        return kRoomDataSize;
    }
    return (size_t)-1;
}

// Mirrors ConfigBackupHandler::validateMember() (config_backup_handler.h:486).
bool validateMemberEquivalent(
    const Payload& payload,
    const uint8_t* data,
    size_t len,
    uint32_t zipCrc,
    std::string& error
)
{
    const size_t dataSize = expectedDataSize(payload.name);
    if (dataSize == (size_t)-1) {
        error = "unknown kind";
        return false;
    }

    if (len != dataSize + 2) {
        error = "size";
        return false;
    }

    if (payload.name == "config.bin" && data[0] != kConfigVersion) {
        error = "config version";
        return false;
    }

    if (ZipStore::crc32Zip(0, data, len) != zipCrc) {
        error = "archive crc32";
        return false;
    }

    const uint16_t fileCrc = (uint16_t)(data[dataSize] | ((uint16_t)data[dataSize + 1] << 8));
    if (crc16Mirror(0xffff, data, dataSize) != fileCrc) {
        error = "ed-config crc16";
        return false;
    }

    return true;
}

// ---------------------------------------------------------------------------
// Small file / byte helpers
// ---------------------------------------------------------------------------

std::string joinPath(const std::string& dir, const std::string& name)
{
    if (!dir.empty() && dir[dir.size() - 1] == '/') {
        return dir + name;
    }
    return dir + "/" + name;
}

bool writeBinary(const std::string& path, const std::vector<uint8_t>& data)
{
    std::ofstream file(path.c_str(), std::ios::binary | std::ios::trunc);
    if (!file) {
        return false;
    }
    if (!data.empty()) {
        file.write(reinterpret_cast<const char*>(data.data()), (std::streamsize)data.size());
    }
    return (bool)file;
}

bool writeText(const std::string& path, const std::string& text)
{
    std::ofstream file(path.c_str(), std::ios::trunc);
    if (!file) {
        return false;
    }
    file << text;
    return (bool)file;
}

bool readBinary(const std::string& path, std::vector<uint8_t>& out)
{
    std::ifstream file(path.c_str(), std::ios::binary);
    if (!file) {
        return false;
    }
    file.seekg(0, std::ios::end);
    const std::streamoff end = file.tellg();
    if (end < 0) {
        return false;
    }
    file.seekg(0, std::ios::beg);
    out.resize((size_t)end);
    if (end > 0) {
        file.read(reinterpret_cast<char*>(out.data()), end);
    }
    return (bool)file || end == 0;
}

bool fileExists(const std::string& path)
{
    std::ifstream file(path.c_str(), std::ios::binary);
    return (bool)file;
}

std::vector<std::string> readLines(const std::string& path)
{
    std::vector<std::string> out;
    std::ifstream file(path.c_str());
    if (!file) {
        return out;
    }
    std::string line;
    while (std::getline(file, line)) {
        if (!line.empty() && line[line.size() - 1] == '\r') {
            line.erase(line.size() - 1);
        }
        out.push_back(line);
    }
    return out;
}

std::string toHex(const std::vector<uint8_t>& data)
{
    static const char* digits = "0123456789abcdef";
    std::string out;
    out.reserve(data.size() * 2);
    for (size_t i = 0; i < data.size(); i++) {
        out.push_back(digits[(data[i] >> 4) & 0x0f]);
        out.push_back(digits[data[i] & 0x0f]);
    }
    return out;
}

std::vector<uint8_t> fromHex(const std::string& hex)
{
    std::vector<uint8_t> out;
    if (hex.size() % 2 != 0) {
        return out;
    }
    out.reserve(hex.size() / 2);
    for (size_t i = 0; i < hex.size(); i += 2) {
        int hi = -1;
        int lo = -1;
        for (int k = 0; k < 2; k++) {
            const char ch = hex[i + k];
            int v = -1;
            if (ch >= '0' && ch <= '9') {
                v = ch - '0';
            } else if (ch >= 'a' && ch <= 'f') {
                v = ch - 'a' + 10;
            } else if (ch >= 'A' && ch <= 'F') {
                v = ch - 'A' + 10;
            }
            if (k == 0) {
                hi = v;
            } else {
                lo = v;
            }
        }
        if (hi < 0 || lo < 0) {
            out.clear();
            return out;
        }
        out.push_back((uint8_t)((hi << 4) | lo));
    }
    return out;
}

void setU16(std::vector<uint8_t>& buf, size_t offset, uint16_t value)
{
    buf[offset] = (uint8_t)(value & 0xff);
    buf[offset + 1] = (uint8_t)((value >> 8) & 0xff);
}

void setU32(std::vector<uint8_t>& buf, size_t offset, uint32_t value)
{
    buf[offset] = (uint8_t)(value & 0xff);
    buf[offset + 1] = (uint8_t)((value >> 8) & 0xff);
    buf[offset + 2] = (uint8_t)((value >> 16) & 0xff);
    buf[offset + 3] = (uint8_t)((value >> 24) & 0xff);
}

size_t findSignature(const std::vector<uint8_t>& buf, uint32_t signature)
{
    if (buf.size() < 4) {
        return std::string::npos;
    }
    for (size_t pos = 0; pos + 4 <= buf.size(); pos++) {
        if (ZipStore::detail::getU32(buf.data() + pos) == signature) {
            return pos;
        }
    }
    return std::string::npos;
}

// ---------------------------------------------------------------------------
// Case 1: CRC32 vectors and incremental safety
// ---------------------------------------------------------------------------

void testCrc32()
{
    TestCase test("1 crc32Zip vectors and incremental chain");

    const uint8_t check[] = "123456789";
    test.expect(ZipStore::crc32Zip(0, nullptr, 0) == 0u, "empty input must be 0");
    test.expect(ZipStore::crc32Zip(0, check, 9) == 0xCBF43926u, "check vector mismatch");

    const std::vector<uint8_t> data = randomBytes(1000, 7u);
    const uint32_t oneShot = ZipStore::crc32Zip(0, data.data(), data.size());

    const size_t splits[] = {0, 1, 2, 13, 500, 999, 1000};
    uint32_t incremental = 0;
    size_t previous = 0;
    for (size_t i = 0; i < sizeof(splits) / sizeof(splits[0]); i++) {
        incremental = ZipStore::crc32Zip(incremental, data.data() + previous, splits[i] - previous);
        previous = splits[i];
    }
    test.expect(incremental == oneShot, "incremental chain != one-shot");

    const uint32_t first = ZipStore::crc32Zip(0, data.data(), 137);
    const uint32_t second = ZipStore::crc32Zip(first, data.data() + 137, data.size() - 137);
    test.expect(second == oneShot, "two-part chain != one-shot");
}

// ---------------------------------------------------------------------------
// Case 3: writer -> reader roundtrip + member validation
// ---------------------------------------------------------------------------

void testRoundtrip(const std::string& workdir)
{
    TestCase test("3 writer-reader roundtrip and member validation");

    const std::vector<Payload> payloads = buildExpectedPayloads();
    std::vector<uint8_t> archive;
    if (!buildArchive(payloads, archive)) {
        test.expect(false, "zipBuildStore failed");
        return;
    }

    std::vector<ZipStore::ZipEntryRef> refs;
    if (!ZipStore::zipParseStore(archive.data(), archive.size(), refs)) {
        test.expect(false, "zipParseStore failed");
        return;
    }

    test.expect(refs.size() == payloads.size(), "entry count mismatch");
    if (refs.size() != payloads.size()) {
        return;
    }

    for (size_t i = 0; i < payloads.size(); i++) {
        const Payload& expected = payloads[i];
        const ZipStore::ZipEntryRef& ref = refs[i];

        test.expect(ref.name == expected.name, "name mismatch");
        test.expect(ref.method == 0, "method not STORE: " + ref.name);
        test.expect(ref.len == expected.bytes.size(), "length mismatch: " + ref.name);
        test.expect(ZipStore::detail::inBounds(ref.dataOffset, ref.len, archive.size()), "out of bounds: " + ref.name);

        const uint32_t expectedCrc = ZipStore::crc32Zip(
            0,
            expected.bytes.empty() ? nullptr : expected.bytes.data(),
            expected.bytes.size()
        );
        test.expect(ref.crc == expectedCrc, "zip CRC32 mismatch: " + ref.name);

        if (expected.bytes.empty()) {
            test.expect(ref.len == 0 && ref.crc == 0, "empty member must have len/crc 0");
        } else if (ZipStore::detail::inBounds(ref.dataOffset, ref.len, archive.size())) {
            const std::vector<uint8_t>::const_iterator found = std::search(
                archive.begin(),
                archive.end(),
                expected.bytes.begin(),
                expected.bytes.end()
            );
            test.expect(
                found != archive.end() && (size_t)(found - archive.begin()) == ref.dataOffset,
                "data offset mismatch: " + ref.name
            );
            test.expect(
                std::equal(expected.bytes.begin(), expected.bytes.end(), archive.begin() + ref.dataOffset),
                "payload bytes mismatch: " + ref.name
            );
        }

        // validateMember-equivalent for real data members (the empty room_3.bin
        // cannot be a valid ed-config file, so it is asserted separately above).
        if (expected.name != "room_3.bin" && ZipStore::detail::inBounds(ref.dataOffset, ref.len, archive.size())) {
            std::string error;
            const bool valid = validateMemberEquivalent(expected, archive.data() + ref.dataOffset, ref.len, ref.crc, error);
            test.expect(valid, "validateMember rejected " + ref.name + " (" + error + ")");
        }
    }

    // Artifacts for the Python cross-checks.
    test.expect(writeBinary(joinPath(workdir, "our_archive.zip"), archive), "failed to write our_archive.zip");
    for (size_t i = 0; i < payloads.size(); i++) {
        test.expect(
            writeBinary(joinPath(joinPath(workdir, "expected"), payloads[i].name), payloads[i].bytes),
            "failed to write expected " + payloads[i].name
        );
    }
}

// ---------------------------------------------------------------------------
// Case 6: strict-parser rejection matrix
// ---------------------------------------------------------------------------

bool rejects(const std::vector<uint8_t>& buffer)
{
    std::vector<ZipStore::ZipEntryRef> entries;
    return !ZipStore::zipParseStore(buffer.empty() ? nullptr : buffer.data(), buffer.size(), entries);
}

void testRejections()
{
    TestCase test("6 strict-parser rejection matrix");

    Payload config;
    config.name = "config.bin";
    config.bytes = makeEdConfigPayload(kConfigDataSize, 555u, true);

    const std::vector<Payload> single = std::vector<Payload>(1, config);
    std::vector<uint8_t> valid;
    if (!buildArchive(single, valid)) {
        test.expect(false, "fixture build failed");
        return;
    }

    const size_t central = findSignature(valid, ZipStore::detail::CENTRAL_SIG);
    const size_t eocd = findSignature(valid, ZipStore::detail::EOCD_SIG);
    if (central == std::string::npos || eocd == std::string::npos) {
        test.expect(false, "fixture signatures not found");
        return;
    }

    std::vector<std::pair<std::string, std::vector<uint8_t> > > bad;

    // Non-STORE method.
    {
        std::vector<uint8_t> m = valid;
        setU16(m, central + 10, 8);
        bad.push_back(std::make_pair(std::string("deflate method"), m));
    }
    // Encrypted flag (bit 0).
    {
        std::vector<uint8_t> m = valid;
        setU16(m, central + 8, (uint16_t)(ZipStore::detail::getU16(m.data() + central + 8) | 0x0001));
        bad.push_back(std::make_pair(std::string("encrypted flag"), m));
    }
    // Data descriptor flag (bit 3).
    {
        std::vector<uint8_t> m = valid;
        setU16(m, central + 8, (uint16_t)(ZipStore::detail::getU16(m.data() + central + 8) | 0x0008));
        bad.push_back(std::make_pair(std::string("data descriptor flag"), m));
    }
    // Zip64 EOCD locator inserted right before the EOCD.
    {
        std::vector<uint8_t> locator(20, 0);
        locator[0] = 0x50;
        locator[1] = 0x4b;
        locator[2] = 0x06;
        locator[3] = 0x07;
        std::vector<uint8_t> m = valid;
        m.insert(m.begin() + eocd, locator.begin(), locator.end());
        bad.push_back(std::make_pair(std::string("zip64 locator"), m));
    }
    // Wrong EOCD comment length.
    {
        std::vector<uint8_t> m = valid;
        setU16(m, eocd + 20, 5);
        bad.push_back(std::make_pair(std::string("wrong comment length"), m));
    }
    // Truncation at five different lengths.
    {
        const size_t truncations[] = {1, 10, 21, valid.size() / 2, valid.size() - 1};
        for (size_t i = 0; i < sizeof(truncations) / sizeof(truncations[0]); i++) {
            std::ostringstream label;
            label << "truncated at " << truncations[i];
            std::vector<uint8_t> m(valid.begin(), valid.begin() + truncations[i]);
            bad.push_back(std::make_pair(label.str(), m));
        }
    }
    // Corrupted central-directory signature.
    {
        std::vector<uint8_t> m = valid;
        m[central] ^= 0xff;
        bad.push_back(std::make_pair(std::string("bad central signature"), m));
    }
    // Local offset pointing past EOF.
    {
        std::vector<uint8_t> m = valid;
        setU32(m, central + 42, (uint32_t)(valid.size() + 1024));
        bad.push_back(std::make_pair(std::string("local offset past EOF"), m));
    }
    // compressedSize != uncompressedSize.
    {
        std::vector<uint8_t> m = valid;
        const uint32_t uncompressed = ZipStore::detail::getU32(m.data() + central + 24);
        setU32(m, central + 20, uncompressed + 1);
        bad.push_back(std::make_pair(std::string("size mismatch"), m));
    }
    // totalEntries == 0xffff.
    {
        std::vector<uint8_t> m = valid;
        setU16(m, eocd + 10, 0xffff);
        bad.push_back(std::make_pair(std::string("totalEntries 0xffff"), m));
    }
    // 33 entries.
    {
        std::vector<Payload> many;
        for (int i = 0; i < 33; i++) {
            Payload p;
            std::ostringstream name;
            name << "e" << i;
            p.name = name.str();
            p.bytes.push_back((uint8_t)i);
            many.push_back(p);
        }
        std::vector<uint8_t> m;
        if (!buildArchive(many, m)) {
            test.expect(false, "33-entry fixture build failed");
        }
        bad.push_back(std::make_pair(std::string("33 entries"), m));
    }
    // 21-byte buffer.
    bad.push_back(std::make_pair(std::string("21 bytes"), std::vector<uint8_t>(21, 0x41)));
    // Empty buffer.
    bad.push_back(std::make_pair(std::string("empty buffer"), std::vector<uint8_t>()));
    // Random garbage.
    {
        const uint32_t seeds[] = {1, 2, 3, 4};
        const size_t lengths[] = {33, 64, 256, 1000};
        for (size_t i = 0; i < sizeof(seeds) / sizeof(seeds[0]); i++) {
            std::ostringstream label;
            label << "garbage seed " << seeds[i] << " len " << lengths[i];
            bad.push_back(std::make_pair(label.str(), randomBytes(lengths[i], seeds[i])));
        }
    }

    for (size_t i = 0; i < bad.size(); i++) {
        test.expect(rejects(bad[i].second), "accepted malformed archive: " + bad[i].first);
    }
}

// ---------------------------------------------------------------------------
// Case 7: BackupNames classification
// ---------------------------------------------------------------------------

void testClassify()
{
    TestCase test("7 BackupNames classify matrix");

    struct Positive
    {
        const char* name;
        BackupNames::Kind kind;
        int room;
    };

    const Positive positives[] = {
        {"config.bin", BackupNames::Kind::Config, -1},
        {"boiler.bin", BackupNames::Kind::Boiler, -1},
        {"room_0.bin", BackupNames::Kind::Room, 0},
        {"room_1.bin", BackupNames::Kind::Room, 1},
        {"room_2.bin", BackupNames::Kind::Room, 2},
        {"room_3.bin", BackupNames::Kind::Room, 3},
        {"room_4.bin", BackupNames::Kind::Room, 4},
        {"room_5.bin", BackupNames::Kind::Room, 5},
        {"room_6.bin", BackupNames::Kind::Room, 6},
        {"room_7.bin", BackupNames::Kind::Room, 7},
    };
    for (size_t i = 0; i < sizeof(positives) / sizeof(positives[0]); i++) {
        const BackupNames::Parsed parsed = BackupNames::classify(positives[i].name);
        test.expect(
            parsed.kind == positives[i].kind && parsed.roomIndex == positives[i].room,
            std::string("positive rejected: ") + positives[i].name
        );
    }

    const char* negatives[] = {
        "room_8.bin", "room_9.bin", "room_10.bin", "Config.bin", "config.BIN",
        " config.bin", "config.bin ", "sub/config.bin", "/config.bin", "config.bin/",
        "", "boiler.binx", "room_.bin", "room_a.bin",
    };
    for (size_t i = 0; i < sizeof(negatives) / sizeof(negatives[0]); i++) {
        const BackupNames::Parsed parsed = BackupNames::classify(negatives[i]);
        test.expect(parsed.kind == BackupNames::Kind::None, std::string("negative accepted: ") + negatives[i]);
    }

    // Duplicate detection.
    {
        BackupNames::SeenFlags seen;
        bool duplicate = false;
        const BackupNames::Parsed first = BackupNames::classifyAndMark("config.bin", seen, duplicate);
        test.expect(first.kind == BackupNames::Kind::Config && !duplicate, "first config flagged as duplicate");
        const BackupNames::Parsed second = BackupNames::classifyAndMark("config.bin", seen, duplicate);
        test.expect(second.kind == BackupNames::Kind::Config && duplicate, "duplicate config not flagged");
    }
    {
        BackupNames::SeenFlags seen;
        bool duplicate = false;
        BackupNames::classifyAndMark("boiler.bin", seen, duplicate);
        test.expect(!duplicate, "first boiler flagged as duplicate");
        BackupNames::classifyAndMark("boiler.bin", seen, duplicate);
        test.expect(duplicate, "duplicate boiler not flagged");
    }
    {
        BackupNames::SeenFlags seen;
        bool duplicate = false;
        BackupNames::classifyAndMark("room_0.bin", seen, duplicate);
        test.expect(!duplicate, "first room_0 flagged as duplicate");
        BackupNames::classifyAndMark("room_1.bin", seen, duplicate);
        test.expect(!duplicate, "room_1 wrongly flagged as duplicate of room_0");
        BackupNames::classifyAndMark("room_0.bin", seen, duplicate);
        test.expect(duplicate, "duplicate room_0 not flagged");
        BackupNames::classifyAndMark("room_1.bin", seen, duplicate);
        test.expect(duplicate, "duplicate room_1 not flagged");
    }
    {
        BackupNames::SeenFlags seen;
        bool duplicate = false;
        const BackupNames::Parsed unknown = BackupNames::classifyAndMark("unknown.bin", seen, duplicate);
        test.expect(unknown.kind == BackupNames::Kind::None && !duplicate, "unknown flagged as duplicate");
        BackupNames::classifyAndMark("unknown.bin", seen, duplicate);
        test.expect(!duplicate, "unknown name flagged as duplicate on repeat");
        BackupNames::classifyAndMark("config.bin", seen, duplicate);
        test.expect(!duplicate, "config flagged as duplicate after unknown entries");
    }

    // SeenFlags is fresh and zero-initialized per use.
    {
        BackupNames::SeenFlags seen;
        bool anyRoom = false;
        for (size_t i = 0; i < BackupNames::ROOM_COUNT; i++) {
            if (seen.rooms[i]) {
                anyRoom = true;
            }
        }
        test.expect(!seen.config && !seen.boiler && !anyRoom, "fresh SeenFlags not zeroed");
    }
}

// ---------------------------------------------------------------------------
// Case 8: mutation fuzz
// ---------------------------------------------------------------------------

void testFuzz()
{
    TestCase test("8 fuzz robustness");

    std::vector<uint8_t> base;
    if (!buildArchive(buildExpectedPayloads(), base) || base.size() < 2) {
        test.expect(false, "fuzz base archive not built");
        return;
    }

    std::mt19937 rng(42u);
    const size_t iterations = 2000;

    for (size_t i = 0; i < iterations; i++) {
        std::vector<uint8_t> mutated = base;
        if (rng() % 2 == 0) {
            const size_t pos = (size_t)(rng() % mutated.size());
            mutated[pos] ^= (uint8_t)(1 + (rng() % 255));
        } else {
            const size_t pos = (size_t)(rng() % (mutated.size() - 1));
            const uint16_t value = (uint16_t)(1 + (rng() % 65535));
            mutated[pos] ^= (uint8_t)(value & 0xff);
            mutated[pos + 1] ^= (uint8_t)(value >> 8);
        }

        std::vector<ZipStore::ZipEntryRef> refs;
        if (ZipStore::zipParseStore(mutated.data(), mutated.size(), refs)) {
            for (size_t k = 0; k < refs.size(); k++) {
                if (!ZipStore::detail::inBounds(refs[k].dataOffset, refs[k].len, mutated.size())) {
                    std::ostringstream detail;
                    detail << "accepted out-of-bounds member at iteration " << i;
                    test.expect(false, detail.str());
                    return;
                }
            }
        }
    }
}

// ---------------------------------------------------------------------------
// External cases (artifacts produced by Python)
// ---------------------------------------------------------------------------

void writeCrc16Input(const std::string& workdir)
{
    const size_t lengths[] = {0, 1, 2, 3, 7, 16, 64, 257};
    std::mt19937 rng(4242u);
    std::uniform_int_distribution<int> dist(0, 255);

    std::string text;
    for (size_t i = 0; i < sizeof(lengths) / sizeof(lengths[0]); i++) {
        std::vector<uint8_t> buffer(lengths[i]);
        for (size_t k = 0; k < buffer.size(); k++) {
            buffer[k] = (uint8_t)dist(rng);
        }
        text += toHex(buffer);
        text += "\n";
    }
    writeText(joinPath(workdir, "crc16_input.txt"), text);
}

void testCrc16VsPython(const std::string& workdir)
{
    TestCase test("2 crc16 mirror vs python reference");

    const std::vector<std::string> inputs = readLines(joinPath(workdir, "crc16_input.txt"));
    const std::vector<std::string> reference = readLines(joinPath(workdir, "crc16_py.txt"));

    test.expect(inputs.size() >= 5, "need at least 5 buffers");
    test.expect(inputs.size() == reference.size(), "input/reference line count mismatch");
    if (inputs.size() != reference.size()) {
        return;
    }

    bool sawLength0 = false;
    bool sawLength1 = false;
    for (size_t i = 0; i < inputs.size(); i++) {
        const std::vector<uint8_t> data = fromHex(inputs[i]);
        if (data.size() == 0) {
            sawLength0 = true;
        }
        if (data.size() == 1) {
            sawLength1 = true;
        }
        const uint16_t mine = crc16Mirror(0xffff, data.empty() ? nullptr : data.data(), data.size());
        const unsigned long expected = std::strtoul(reference[i].c_str(), nullptr, 10);
        test.expect(
            (unsigned long)mine == expected,
            "crc16 mismatch at buffer index " + std::to_string(i)
        );
    }
    test.expect(sawLength0 && sawLength1, "buffer set must include length 0 and 1");
}

struct ManifestEntry
{
    std::string name;
    size_t size;
    uint32_t crc;
};

bool loadManifest(const std::string& path, std::vector<ManifestEntry>& out)
{
    const std::vector<std::string> lines = readLines(path);
    if (lines.empty()) {
        return false;
    }
    for (size_t i = 0; i < lines.size(); i++) {
        std::istringstream stream(lines[i]);
        ManifestEntry entry;
        unsigned long size = 0;
        unsigned long crc = 0;
        if (!(stream >> entry.name >> size >> crc)) {
            return false;
        }
        entry.size = (size_t)size;
        entry.crc = (uint32_t)crc;
        out.push_back(entry);
    }
    return true;
}

const Payload* findExpected(const std::vector<Payload>& payloads, const std::string& name)
{
    for (size_t i = 0; i < payloads.size(); i++) {
        if (payloads[i].name == name) {
            return &payloads[i];
        }
    }
    return nullptr;
}

// Returns true when the archive existed (and was validated); false when absent.
bool validateExternalZip(
    TestCase& test,
    const std::string& workdir,
    const std::string& zipName,
    const std::string& manifestName,
    const std::vector<Payload>& expectedPayloads
)
{
    const std::string zipPath = joinPath(workdir, zipName);
    if (!fileExists(zipPath)) {
        return false;
    }

    std::vector<uint8_t> bytes;
    test.expect(readBinary(zipPath, bytes), "failed to read " + zipName);

    std::vector<ZipStore::ZipEntryRef> refs;
    test.expect(ZipStore::zipParseStore(bytes.data(), bytes.size(), refs), "parse failed: " + zipName);

    std::vector<ManifestEntry> manifest;
    test.expect(loadManifest(joinPath(workdir, manifestName), manifest), "manifest failed: " + manifestName);
    test.expect(refs.size() == manifest.size(), "entry count mismatch: " + zipName);

    for (size_t i = 0; i < manifest.size(); i++) {
        const std::string& name = manifest[i].name;
        const ZipStore::ZipEntryRef* ref = nullptr;
        for (size_t k = 0; k < refs.size(); k++) {
            if (refs[k].name == name) {
                ref = &refs[k];
                break;
            }
        }
        if (ref == nullptr) {
            test.expect(false, "manifest entry missing from archive: " + name);
            continue;
        }

        test.expect(ref->len == manifest[i].size, "length mismatch: " + name);
        test.expect(ref->crc == manifest[i].crc, "CRC mismatch: " + name);
        test.expect(ZipStore::detail::inBounds(ref->dataOffset, ref->len, bytes.size()), "out of bounds: " + name);

        const Payload* expected = findExpected(expectedPayloads, name);
        if (expected == nullptr) {
            test.expect(false, "no expected payload for " + name);
            continue;
        }

        const uint32_t expectedCrc = ZipStore::crc32Zip(
            0,
            expected->bytes.empty() ? nullptr : expected->bytes.data(),
            expected->bytes.size()
        );
        test.expect(expectedCrc == manifest[i].crc, "python CRC does not match expected payload: " + name);

        if (ZipStore::detail::inBounds(ref->dataOffset, ref->len, bytes.size())) {
            test.expect(
                std::equal(expected->bytes.begin(), expected->bytes.end(), bytes.begin() + ref->dataOffset),
                "payload bytes mismatch: " + name
            );
        }

        if (name == "config.bin" && ZipStore::detail::inBounds(ref->dataOffset, ref->len, bytes.size())) {
            std::string error;
            const bool valid = validateMemberEquivalent(*expected, bytes.data() + ref->dataOffset, ref->len, ref->crc, error);
            test.expect(valid, "config.bin member failed validation (" + error + ")");
        }
    }

    return true;
}

void testExternalZips(const std::string& workdir)
{
    TestCase test("5 reader accepts python and zip-cli archives");

    const std::vector<Payload> expected = buildExpectedPayloads();
    const bool pythonOk = validateExternalZip(test, workdir, "python_store.zip", "python_store.manifest", expected);
    const bool cliOk = validateExternalZip(test, workdir, "zip_cli_store.zip", "zip_cli_store.manifest", expected);

    test.expect(pythonOk, "python_store.zip missing");
    // zip-cli archive is optional; the runner prints a NOTE when the CLI is absent.
    (void)cliOk;
}

}  // namespace

int main(int argc, char** argv)
{
    if (argc < 3) {
        std::fprintf(stderr, "usage: %s <workdir> <self|external>\n", argv[0]);
        return 2;
    }

    const std::string workdir = argv[1];
    const std::string mode = argv[2];

    if (mode == "self") {
        testCrc32();
        testRoundtrip(workdir);
        testRejections();
        testClassify();
        writeCrc16Input(workdir);
        testFuzz();
    } else if (mode == "external") {
        testCrc16VsPython(workdir);
        testExternalZips(workdir);
    } else {
        std::fprintf(stderr, "unknown mode: %s\n", mode.c_str());
        return 2;
    }

    if (g_fail != 0) {
        std::printf("%d host test case(s) FAILED\n", g_fail);
        return 1;
    }

    return 0;
}
