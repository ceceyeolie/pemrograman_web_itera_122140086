import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../context/BookContext"; // Mengakses context global untuk buku

const BookForm = ({ editBook, setEditBook }) => {
  const { addBook, updateBook } = useContext(BookContext); // Mengambil fungsi add dan update dari context

  // State untuk input form
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");
  const [errors, setErrors] = useState({}); // Menyimpan pesan error validasi

  // Mengisi form saat editBook aktif
  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setStatus(editBook.status);
    }
  }, [editBook]);

  // Reset form ke kondisi awal setelah submit
  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setStatus("milik");
    setErrors({});
    if (typeof setEditBook === "function") {
      setEditBook(null); // Mengembalikan form ke mode tambah
    }
  };

  // Validasi input dan proses simpan
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validasi input kosong
    if (!title.trim()) newErrors.title = "Judul wajib diisi";
    if (!author.trim()) newErrors.author = "Penulis wajib diisi";
    if (!status.trim()) newErrors.status = "Status wajib dipilih";

    // Jika ada error, set pesan dan hentikan submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const bookData = { title, author, status };

    // Menentukan apakah data akan ditambah atau diperbarui
    if (editBook) {
      updateBook(editBook.id, bookData);
    } else {
      addBook(bookData);
    }

    resetForm(); // Membersihkan form setelah submit berhasil
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>{editBook ? "Edit Buku" : "Tambah Jenis Buku"}</h2>

      {/* Input judul */}
      <div className="form-group">
        <label>Judul</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>

      {/* Input penulis */}
      <div className="form-group">
        <label>Penulis</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <p className="error">{errors.author}</p>}
      </div>

      {/* Dropdown status */}
      <div className="form-group">
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="milik">Sudah dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin dibeli</option>
        </select>
        {errors.status && <p className="error">{errors.status}</p>}
      </div>

      {/* Tombol submit dengan label dinamis */}
      <button type="submit">
        {editBook ? "Simpan Perubahan" : "Tambah Buku"}
      </button>
    </form>
  );
};

// Validasi props
BookForm.propTypes = {
  editBook: PropTypes.object,
  setEditBook: PropTypes.func,
};

export default BookForm;