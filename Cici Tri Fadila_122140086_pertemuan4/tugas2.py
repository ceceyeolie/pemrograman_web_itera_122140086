# Tugas 2: Nilai Mahasiswa

data_mhs = [
    {"nama": "Cici", "nim": "12213", "uts": 80, "uas": 85, "tugas": 80},
    {"nama": "Rian", "nim": "12214", "uts": 100, "uas": 80, "tugas": 90},
    {"nama": "Tasya", "nim": "12215", "uts": 15, "uas": 40, "tugas": 25},
    {"nama": "Kenneth", "nim": "12216", "uts": 70, "uas": 49, "tugas": 85},
    {"nama": "Marsha", "nim": "12217", "uts": 60, "uas": 100, "tugas": 47},
]

for m in data_mhs:
    akhir = (0.3 * m["uts"]) + (0.4 * m["uas"]) + (0.3 * m["tugas"])
    m["akhir"] = akhir

    if akhir >= 80:
        m["grade"] = "A"
    elif 70 <= akhir < 80:
        m["grade"] = "B"
    elif 60 <= akhir < 70:
        m["grade"] = "C"
    elif 50 <= akhir < 60:
        m["grade"] = "D"
    else:
        m["grade"] = "E"


print(f"{'Nama':<10} {'NIM':<8} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade'}")
print("-" * 60)
for m in data_mhs:
    print(f"{m['nama']:<10} {m['nim']:<8} {m['uts']:<5} {m['uas']:<5} {m['tugas']:<7} {m['akhir']:<7.2f} {m['grade']}")


nilai_tertinggi = max(data_mhs, key=lambda x: x["akhir"])
nilai_terendah = min(data_mhs, key=lambda x: x["akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{nilai_tertinggi['nama']} (NIM: {nilai_tertinggi['nim']}) - Nilai Final: {nilai_tertinggi['akhir']:.2f} Grade: {nilai_tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{nilai_terendah['nama']} (NIM: {nilai_terendah['nim']}) - Nilai Final: {nilai_terendah['akhir']:.2f} Grade: {nilai_terendah['grade']}")
