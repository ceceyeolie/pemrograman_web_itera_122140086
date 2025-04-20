import React, { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage"; // Custom hook untuk menyimpan data di localStorage
import { v4 as uuid } from "uuid"; // Untuk membuat ID unik setiap buku

export const BookContext = createContext(); // Membuat context global

export function BookProvider({ children }) {
  // Gunakan localStorage agar data tetap ada saat reload
  const [books, setBooks] = useLocalStorage("books", []);

  // Menambahkan buku baru dengan ID unik
  const addBook = (book) => 
    setBooks(prev => [...prev, { id: uuid(), ...book }]);

  // Mengupdate data buku berdasarkan ID
  const updateBook = (id, updatedFields) =>
    setBooks(prev =>
      prev.map(b => (b.id === id ? { ...b, ...updatedFields } : b))
    );

  // Menghapus buku berdasarkan ID
  const removeBook = (id) =>
    setBooks(prev => prev.filter(b => b.id !== id));

  return (
    // Menyediakan data dan fungsi ke seluruh komponen yang menggunakan context
    <BookContext.Provider value={{ books, addBook, updateBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}

// Validasi props anak-anak komponen
BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
