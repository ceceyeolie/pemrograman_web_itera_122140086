import React, { useState } from "react";
import { BookProvider } from "../../context/BookContext";
import BookForm from "../../components/BookForm/BookForm";
import BookList from "../../components/BookList/BookList";
import BookStats from "../../components/BookStats/BookStats"; 

export default function Home() {
  const [editBook, setEditBook] = useState(null); // untuk mode edit buku
  const [search, setSearch] = useState(""); // keyword pencarian
  const [statusFilter, setStatusFilter] = useState("all"); // filter status buku

  return (
    <BookProvider> {/* konteks global untuk manajemen data buku */}
      <div className="container">
        <BookForm editBook={editBook} setEditBook={setEditBook} /> {/* form tambah/edit */}

        <div className="filters">
          <input
            type="text"
            placeholder="Cari judul/penulis…"
            aria-label="filter-input" // label ini penting untuk testing, pastikan unik
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Semua</option>
            <option value="milik">Milik</option>
            <option value="baca">Sedang Dibaca</option>
            <option value="beli">Ingin Dibeli</option>
          </select>
        </div>

        <BookList
          searchTerm={search}
          statusFilter={statusFilter}
          onEdit={(book) => setEditBook(book)} // untuk trigger edit dari list
        />
      </div>
    </BookProvider>
  );
}
