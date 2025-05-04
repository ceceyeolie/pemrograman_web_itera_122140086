"""
    Class untuk buku yang mewarisi dari LibraryItem.
    Mengimplementasikan metode `display_info()` dan `get_id()`.
    """

from library_item import LibraryItem

class Book(LibraryItem):
    def __init__(self, item_id, title, author, genre):
        super().__init__(item_id, title, author)
        self.genre = genre

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[Buku] ID: {self._item_id}, Judul: {self._title}, Penulis: {self._author}, Genre: {self.genre}, Status: {status}")
