"""
    Class untuk majalah yang mewarisi dari LibraryItem.
    Mengimplementasikan metode `display_info()` dan `get_id()`.
    """
from library_item import LibraryItem

class Magazine(LibraryItem):
    def __init__(self, item_id, title, author, issue_number):
        super().__init__(item_id, title, author)
        self.issue_number = issue_number

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[Majalah] ID: {self._item_id}, Judul: {self._title}, Editor: {self._author}, Edisi: {self.issue_number}, Status: {status}")
