# Tugas 3: Modul Math
import math_operations
from math_operations import luas_lingkaran, celsius_ke_fahrenheit, keliling_lingkaran
import math_operations as mo


def main():
    print("Modul Matematika\n")
#Lingkaran
    r = 5
    print(f"Lingkaran (radius={r}):")
    luas = math_operations.luas_lingkaran(r)
    keliling = keliling_lingkaran(r)
    print(f"  Luas     : {luas:.2f}")
    print(f"  Keliling : {keliling:.2f}\n")

#Persegi panjang
    p, l = 10, 12
    print(f"Persegi Panjang (p={p}, l={l}):")
    print(f"  Luas     : {mo.luas_persegi_panjang(p, l)}")
    print(f"  Keliling : {mo.keliling_persegi_panjang(p, l)}\n")

#Persegi
    sisi = 5
    print(f"Persegi (sisi={sisi}):")
    print(f"  Luas     : {math_operations.luas_persegi(sisi)}")
    print(f"  Keliling : {mo.keliling_persegi(sisi)}\n")

# Konversi suhu
    suhu_c = 39
    print(f"Konversi Suhu {suhu_c}°C:")
    print(f"  Fahrenheit: {celsius_ke_fahrenheit(suhu_c):.2f}°F")
    print(f"  Kelvin    : {math_operations.celsius_ke_kelvin(suhu_c):.2f}K")

if __name__ == "__main__":
    main()
