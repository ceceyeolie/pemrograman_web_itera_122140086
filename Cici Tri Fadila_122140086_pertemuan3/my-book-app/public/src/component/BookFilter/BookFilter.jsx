import React from "react";
import PropTypes from "prop-types"; // ✅ Digunakan untuk validasi props agar lebih aman saat development

// Komponen ini bertanggung jawab untuk fitur pencarian dan filter status buku
const BookFilter = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        aria-label="search-input" // Penting untuk keperluan testing (Testing Library pakai label ini)
        value={searchTerm} // Kontrol input sesuai keyword pencarian dari parent
        onChange={(e) => setSearchTerm(e.target.value)} // Trigger update pencarian
      />
      <select
        value={statusFilter} //  Kontrol dropdown status
        onChange={(e) => setStatusFilter(e.target.value)} // Trigger update filter status
      >
        <option value="all">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

// ✅ PropTypes digunakan untuk memastikan komponen menerima props dengan tipe yang benar
BookFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired, // teks pencarian
  setSearchTerm: PropTypes.func.isRequired, // fungsi untuk update searchTerm
  statusFilter: PropTypes.string.isRequired, // filter status saat ini
  setStatusFilter: PropTypes.func.isRequired, // fungsi untuk update filter status
};

export default BookFilter;
