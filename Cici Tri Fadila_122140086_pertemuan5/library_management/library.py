"""
    Class untuk mengelola koleksi item di perpustakaan.
    Dapat menambah item, menampilkan semua item, dan mencari berdasarkan judul atau ID.
    """
from library_item import LibraryItem

class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item):
        if isinstance(item, LibraryItem):
            self.__collection.append(item)
            print(f"Item '{item._title}' berhasil ditambahkan.")
        else:
            print("Item tidak valid.")

    def display_all_items(self):
        print("\n--- Daftar Item di Perpustakaan ---")
        for item in self.__collection:
            item.display_info()

    def search_by_title(self, keyword):
        print(f"\nHasil pencarian untuk judul yang mengandung '{keyword}':")
        found = False
        for item in self.__collection:
            if keyword.lower() in item._title.lower():
                item.display_info()
                found = True
        if not found:
            print("Item tidak ditemukan.")

    def search_by_id(self, item_id):
        print(f"\nHasil pencarian untuk ID '{item_id}':")
        for item in self.__collection:
            if item._item_id == item_id:
                item.display_info()
                return
        print("Item tidak ditemukan.")

    def get_item_by_id(self, item_id):
        """Mengambil item berdasarkan ID (untuk keperluan pinjam/kembalikan)"""
        for item in self.__collection:
            if item._item_id == item_id:
                return item
        return None

    def remove_item_by_id(self, item_id):
        """Menghapus item dari koleksi berdasarkan ID"""
        for item in self.__collection:
            if item._item_id == item_id:
                self.__collection.remove(item)
                return True
        return False
