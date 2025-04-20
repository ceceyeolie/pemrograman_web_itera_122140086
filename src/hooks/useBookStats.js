import { useContext, useMemo } from "react";
import { BookContext } from "../context/BookContext";

export default function useBookStats() {
  const { books } = useContext(BookContext);

  return useMemo(() => {
    const total = books.length;
    const counts = books.reduce((acc, b) => {
      acc[b.status] = (acc[b.status] || 0) + 1;
      return acc;
    }, {});

    const milik = counts.milik || 0;
    const baca  = counts.baca  || 0;
    const beli  = counts.beli  || 0;

    const percent = total > 0
      ? {
          milik: Math.round((milik / total) * 100),
          baca:  Math.round((baca  / total) * 100),
          beli:  Math.round((beli  / total) * 100),
        }
      : { milik: 0, baca: 0, beli: 0 };

    return { total, milik, baca, beli, percent };
  }, [books]);
}
