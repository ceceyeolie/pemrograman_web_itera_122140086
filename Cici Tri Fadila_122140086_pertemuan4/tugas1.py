# Tugas 1: Perhitungan BMI dan Kategorinya

berat_diri = float(input("Input berat badan (kg): "))
tinggi_diri = float(input("Input tinggi badan (m): "))

hasil_bmi = berat_diri / (tinggi_diri * tinggi_diri)

if hasil_bmi < 18.5:
    category = "Berat badan kamu kurang!"
elif 18.5 <= hasil_bmi < 25:
    category = "Berat badan kamu normal"
elif 25 <= hasil_bmi < 30:
    category = "Berat badan kamu berlebih!"
else:
    category = "Berat badan kamu obesitas"


print(f"Hasil BMI: {hasil_bmi}")
print(f"Kategori Berat: {category}")