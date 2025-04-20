import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../context/BookContext"; // Mengambil data buku dan fungsi hapus dari context

export default function BookList({ searchTerm, statusFilter, onEdit }) {
  const { books, removeBook } = useContext(BookContext); // Mengakses buku dan fungsi hapus dari context

  // Filter buku berdasarkan status dan kata kunci pencarian
  const filtered = books.filter(b => {
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    const term = (searchTerm || "").toLowerCase();
    const matchSearch =
      b.title.toLowerCase().includes(term) ||
      b.author.toLowerCase().includes(term);
    return matchStatus && matchSearch;
  });

  return (
    <div className="book-list-container">
      <h2>Daftar Buku</h2>

      {/* Tampilkan pesan jika tidak ada buku yang cocok */}
      {filtered.length === 0 ? (
        <p>Tidak ada buku ditemukan.</p>
      ) : (
        // Menampilkan daftar buku yang sesuai filter
        <ul className="book-list">
          {filtered.map(book => (
            <li key={book.id} className="book-item">
              <div>
                <strong>{book.title}</strong> oleh {book.author}<br/>
                <em>Status: {book.status}</em>
              </div>

              {/* Tombol untuk edit dan hapus */}
              <div className="book-actions">
                <button onClick={() => onEdit(book)}>Edit</button>
                <button onClick={() => removeBook(book.id)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Validasi tipe props yang diterima komponen
BookList.propTypes = {
  searchTerm:   PropTypes.string.isRequired,
  statusFilter: PropTypes.string.isRequired,
  onEdit:       PropTypes.func.isRequired,
};

// Default props jika tidak diberikan
BookList.defaultProps = {
  searchTerm: "",
  statusFilter: "all",
  onEdit: () => {},
};
