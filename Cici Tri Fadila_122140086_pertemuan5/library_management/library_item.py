"""
    Abstract class untuk item perpustakaan seperti buku atau majalah.
    Setiap subclass harus mengimplementasikan metode `display_info()` dan
    `get_id()`.
    """
from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title, author):
        self._item_id = item_id
        self._title = title
        self._author = author
        self._available = True
        """
        Constructor untuk inisialisasi title dan id.
        Parameters:
        title (str): Judul item perpustakaan.
        id (str): ID unik untuk item.
        """

    @abstractmethod
    def display_info(self):
        pass

    @property
    def available(self):
        return self._available

    @available.setter
    def available(self, value):
        if isinstance(value, bool):
            self._available = value
    """
    available adalah properti untuk mengakses dan mengubah status ketersediaan item, 
    dengan validasi untuk memastikan hanya nilai boolean yang diterima.
    """
