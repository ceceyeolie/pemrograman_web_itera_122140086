# Manajemen Buku

## Deskripsi Aplikasi
`Manajemen Buku` adalah aplikasi web single-page (SPA) berbasis React yang membantu pengguna untuk mengelola koleksi buku pribadi. Fitur utama aplikasi ini meliputi:

- **Tambah Buku**: Menambahkan judul buku, penulis, dan status kepemilikan.
- **Daftar Buku**: Menampilkan daftar buku dengan opsi untuk **Edit** atau **Hapus**.
- **Pencarian & Filter**: Pencarian berdasarkan judul/penulis serta filter status (`Semua`, `Sudah Dimiliki`, `Sedang Dibaca`, `Ingin Dibeli`).
- **Statistik Buku**: Halaman statistik yang menampilkan jumlah total buku dan rincian per status.

## Instruksi Instalasi dan Menjalankan
1. **Clone repository**
   ```bash
   git clone https://github.com/ceceyeolie/pemrograman_web_itera_122140086.git
   ```
2. **Masuk ke folder proyek**
   ```bash
   cd pemrograman_web_itera_122140086/Cici\ Tri\ Fadila_122140086_pertemuan3
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Jalankan development server**
   ```bash
   npm start
   ```
5. Buka di browser: `http://localhost:3000`

Screenshoot Aplikasi: https://drive.google.com/drive/folders/19HPQymD8YlSoh5dlEij_zkpf1qGoz7q_?usp=sharing

Aplikasi ini telah mengimplementasikan:

1. **useState dan useEffect**  
   - Menggunakan `useState` untuk mengelola state buku, form input, pencarian, dan filter.  
   - Menggunakan `useEffect` untuk menyinkronkan state `books` dengan `localStorage`, sehingga data tetap tersimpan meski halaman di-refresh.

2. **Minimal 3 Komponen Reusable**  
   - `Navbar` untuk navigasi,  
   - `BookForm` untuk form tambah/edit buku,  
   - `BookList` untuk daftar buku,  
   - `StatisticsCard` untuk tampilan statistik.

3. **Context API**  
   - Menggunakan **React Context** untuk mengelola state buku secara global, sehingga komponen anak dapat mengakses dan memodifikasi data tanpa prop drilling.  
   - Contoh penggunaan:
   ```js
   const BookContext = createContext();
   function BookProvider({ children }) {
     const [books, setBooks] = useState(initialBooks);
     return (
       <BookContext.Provider value={{ books, setBooks }}>
         {children}
       </BookContext.Provider>
     );
   }
   ```

4. **React Router**  
   - Menggunakan `react-router-dom` untuk navigasi multi-halaman antara **Beranda** dan **Statistik**.

5. **localStorage**  
   - Menyimpan dan memuat data `books` dari `localStorage` melalui `useEffect` sehingga data persist.


## Penjelasan Fitur React yang Digunakan
1. **Functional Components**  
   Semua bagian antarmuka (Form, List, Statistik, Navbar) diimplementasikan sebagai _functional components_ untuk memudahkan pembagian tanggung jawab dan penggunaan _hooks_.

2. **useState Hook**  
   - Mengelola state buku (`books`) sebagai array objek.
   - Menyimpan nilai input form (`title`, `author`, `status`).
   - Menyimpan state pencarian dan filter.

3. **useEffect Hook**  
   - Sinkronisasi data `books` dengan `localStorage` agar data persist saat halaman di-refresh.
   - Contoh:
   ```js
   useEffect(() => {
     localStorage.setItem('books', JSON.stringify(books));
   }, [books]);
   ```

4. **Controlled Components**  
   - Input form (`<input>`, `<select>`) diikat ke state melalui atribut `value` dan `onChange`, sehingga React mengendalikan nilai input.

5. **React Router**  
   - Menggunakan `react-router-dom` untuk navigasi client-side antara halaman **Beranda** dan **Statistik**.
   - Contoh:
     ```jsx
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/statistik" element={<Statistics />} />
       </Routes>
     </BrowserRouter>
     ```

6. **Passing Props**  
   - Mengirim data dan fungsi penanganan (_handlers_) ke komponen anak (misalnya, `onEdit`, `onDelete`, `onAdd`).

7. **Conditional Rendering**  
   - Menampilkan tombol **Edit**/**Hapus** serta tampilan kosong jika daftar buku `books.length === 0`.



