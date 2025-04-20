import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import { BookProvider } from "./context/BookContext";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app">
          <nav className="navbar">
            <h1>📚 Manajemen Buku</h1>
            <div className="links">
              <Link to="/">Beranda</Link>
              <Link to="/stats">Statistik</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
