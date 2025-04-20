import React from "react";
import useBookStats from "../../hooks/useBookStats";


export default function Stats() {
  const { total, milik, baca, beli, percent } = useBookStats();

  return (
    <div className="book-stats-wrapper">
      <div className="book-stats">
        <h3>📚 Statistik Buku</h3>
        <hr className="divider" />
        <div className="stats-list">
          <div className="stats-item">
            <span>Total Buku:</span>
            <span>{total}</span>
          </div>
          <div className="stats-item">
            <span>Milik:</span>
            <span>{milik}</span>
          </div>
          <div className="stats-item">
            <span>Sedang Dibaca:</span>
            <span>{baca}</span>
          </div>
          <div className="stats-item">
            <span>Ingin Dibeli:</span>
            <span>{beli}</span>
          </div>
        </div>
      </div>
    </div>
  );
   
  
}
