import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

// Setup render sebelum tiap test
beforeEach(() => {
  localStorage.clear(); // reset
  render(<Home />);
});

describe("Home Page", () => {
  it("shows form and search input", () => {
    expect(screen.getByPlaceholderText(/judul/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/penulis/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/cari/i)).toBeInTheDocument();
  });

  it("adds a book via form", () => {
    fireEvent.change(screen.getByPlaceholderText(/judul/i), {
      target: { value: "Test Book" },
    });
    fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
      target: { value: "Author X" },
    });
    fireEvent.change(screen.getByDisplayValue("Milik"), {
      target: { value: "baca" },
    });
    fireEvent.click(screen.getByText(/tambah buku/i));

    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText(/author x/i)).toBeInTheDocument();
  });

  it("filters books by status", () => {
    localStorage.setItem(
      "books",
      JSON.stringify([
        { id: 1, title: "Book A", author: "Author A", status: "milik" },
        { id: 2, title: "Book B", author: "Author B", status: "baca" },
      ])
    );

    render(<Home />);
    fireEvent.change(screen.getByLabelText("filter-select"), {
        target: { value: "milik" },
      });
      

    expect(screen.getByText("Book A")).toBeInTheDocument();
    expect(screen.queryByText("Book B")).not.toBeInTheDocument();
  });

  it("searches for a book by title", () => {
    localStorage.setItem(
      "books",
      JSON.stringify([
        { id: 1, title: "Alpha", author: "X", status: "baca" },
        { id: 2, title: "Beta", author: "Y", status: "baca" },
      ])
    );

    render(<Home />);
    fireEvent.change(screen.getByLabelText("filter-input"), {
        target: { value: "alpha" },
      });
      
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.queryByText("Beta")).not.toBeInTheDocument();
  });
});
