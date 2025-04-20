import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext"; // Mengambil data buku dari context

export default function BookStats() {
  const { books } = useContext(BookContext); // Akses array buku dari context

  // Menghitung jumlah total dan berdasarkan status
  const total = books.length;
  const milik = books.filter(b => b.status === "milik").length;
  const baca = books.filter(b => b.status === "baca").length;
  const beli = books.filter(b => b.status === "beli").length;

  return (
    <div className="book-stats">
      <h3>Statistik Buku</h3>

      {/* Menampilkan statistik jumlah buku berdasarkan status */}
      <p>Total Buku: {total}</p>
      <p>Milik: {milik}</p>
      <p>Sedang Dibaca: {baca}</p>
      <p>Ingin Dibeli: {beli}</p>
    </div>
  );
}
