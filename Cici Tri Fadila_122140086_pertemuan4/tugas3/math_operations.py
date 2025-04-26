# Tugas 3: Modul Math
PI = 3.14

def luas_persegi(sisi):
    """Hitung luas persegi dengan panjang sisi `sisi`."""
    return sisi * sisi

def keliling_persegi(sisi):
    """Hitung keliling persegi dengan panjang sisi `sisi`."""
    return 4 * sisi

def luas_persegi_panjang(panjang, lebar):
    """Hitung luas persegi panjang."""
    return panjang * lebar

def keliling_persegi_panjang(panjang, lebar):
    """Hitung keliling persegi panjang."""
    return 2 * (panjang + lebar)

# --- Lingkaran ---
def luas_lingkaran(r):
    """Hitung luas lingkaran."""
    return PI * (r ** 2)

def keliling_lingkaran(r):
    """Hitung keliling lingkaran."""
    return 2 * PI * r

# --- Konversi Suhu ---
def celsius_ke_fahrenheit(c):
    """Celsius → Fahrenheit."""
    return (c * 9/5) + 32

def fahrenheit_ke_celsius(f):
    """Fahrenheit → Celsius."""
    return (f - 32) * 5/9

def celsius_ke_kelvin(c):
    """Celsius → Kelvin."""
    return c + 273.15

def kelvin_ke_celsius(k):
    """Kelvin → Celsius."""
    return k - 273.15