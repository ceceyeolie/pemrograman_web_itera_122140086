# Aplikasi Manajemen Matakuliah dengan Pyramid

## Deskripsi

Aplikasi API sederhana untuk manajemen matakuliah yang dibangun menggunakan framework Pyramid dan SQLAlchemy. API ini mendukung operasi dasar CRUD (Create, Read, Update, Delete) untuk model `Matakuliah`.

## Fitur

* Model `Matakuliah` dengan atribut:

  * `id` (Integer, primary key)
  * `kode_mk` (Text, unique, tidak boleh kosong)
  * `nama_mk` (Text, tidak boleh kosong)
  * `sks` (Integer, tidak boleh kosong)
  * `semester` (Integer, tidak boleh kosong)
* Endpoint API untuk operasi:

  * `GET /matakuliah` : Mengambil daftar semua matakuliah
  * `GET /matakuliah/{id}` : Mengambil satu matakuliah berdasarkan `id`
  * `POST /matakuliah` : Menambahkan matakuliah baru
  * `PUT /matakuliah/{id}` : Memperbarui data matakuliah
  * `DELETE /matakuliah/{id}` : Menghapus matakuliah
* Migration database menggunakan Alembic
* Dapat diuji dengan `curl` atau Postman

## Struktur Direktori

```
pyramid_matkul/
├── alembic                    # Konfigurasi Alembic
├── models/
│   ├── __init__.py
│   ├── meta.py                # Deklarasi Base SQLAlchemy
│   └── matakuliah.py          # Model Matakuliah
├── migrations/
│   └── versions/              # File-version Alembic
├── routes.py                  # Mendefinisikan route dan request_method
├── views.py                   # View callable untuk setiap endpoint
├── development.ini            # Konfigurasi development Pyramid
└── setup.py                   # Konfigurasi paket dan entry point
```

## Persyaratan

* Python 3.8+
* Pyramid
* SQLAlchemy
* Alembic
* psycopg2-binary (atau driver DB lain)

## Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/ceceyeolie/pemrograman_web_itera_122140086.git
   cd pemrograman_web_itera_122140086/Cici\ Tri\ Fadila_122140086_pertemuan6/pyramid_matkul
   ```
2. Buat virtual environment dan aktifkan:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependensi:

   ```bash
   pip install -r requirements.txt
   ```

## Konfigurasi Database

1. Edit `alembic.ini` untuk mengatur `sqlalchemy.url` sesuai database Anda.
2. Jalankan migrasi:

   ```bash
   alembic upgrade head
   ```

## Menjalankan Aplikasi

```bash
pserve development.ini --reload
```

Aplikasi akan berjalan di `http://localhost:6543` secara default.

## Dokumentasi Endpoint

1. **GET /matakuliah**

   * Deskripsi: Mengambil semua matakuliah
   * Contoh `curl`:

     ```bash
     curl http://localhost:6543/matakuliah
     ```
2. **GET /matakuliah/{id}**

   * Deskripsi: Mengambil matakuliah berdasarkan `id`
   * Contoh `curl`:

     ```bash
     curl http://localhost:6543/matakuliah/1
     ```
3. **POST /matakuliah**

   * Deskripsi: Menambahkan matakuliah baru
   * Body JSON:

     ```json
     {
       "kode_mk": "IF1234",
       "nama_mk": "Pemrograman Web",
       "sks": 3,
       "semester": 5
     }
     ```
   * Contoh `curl`:

     ```bash
     curl -X POST http://localhost:6543/matakuliah \
       -H "Content-Type: application/json" \
       -d '{"kode_mk":"IF1234","nama_mk":"Pemrograman Web","sks":3,"semester":5}'
     ```
4. **PUT /matakuliah/{id}**

   * Deskripsi: Memperbarui data matakuliah
   * Body JSON (field yang diupdate):

     ```json
     {
       "nama_mk": "Pemrograman Web Lanjut",
       "sks": 4
     }
     ```
   * Contoh `curl`:

     ```bash
     curl -X PUT http://localhost:6543/matakuliah/1 \
       -H "Content-Type: application/json" \
       -d '{"nama_mk":"Pemrograman Web Lanjut","sks":4}'
     ```
5. **DELETE /matakuliah/{id}**

   * Deskripsi: Menghapus matakuliah
   * Contoh `curl`:

     ```bash
     curl -X DELETE http://localhost:6543/matakuliah/1
     ```

## Testing

Anda dapat menguji endpoint menggunakan Postman atau `curl` seperti contoh di atas.

