from book import Book
from magazine import Magazine
from library import Library

def menu():
    print("\n=== Welcome! In Your Management Library ===")
    print("\n=== Pilih Menu dibawah! ===")
    print("1. Tambah Buku")
    print("2. Tambah Majalah")
    print("3. Tampilkan Semua Item")
    print("4. Cari Item berdasarkan Judul")
    print("5. Cari Item berdasarkan ID")
    print("6. Pinjam Item")
    print("7. Kembalikan Item")
    print("8. Hapus Item")
    print("9. Keluar")

def main():
    library = Library()

    while True:
        menu()
        pilihan = input("Pilih menu (1-9): ")

        if pilihan == "1":
            id = input("ID Buku: ")
            judul = input("Judul Buku: ")
            penulis = input("Penulis: ")
            genre = input("Genre: ")
            library.add_item(Book(id, judul, penulis, genre))

        elif pilihan == "2":
            id = input("ID Majalah: ")
            judul = input("Judul Majalah: ")
            editor = input("Editor: ")
            edisi = input("Edisi (Bulan Tahun): ")
            library.add_item(Magazine(id, judul, editor, edisi))

        elif pilihan == "3":
            library.display_all_items()

        elif pilihan == "4":
            keyword = input("Masukkan kata kunci judul: ")
            library.search_by_title(keyword)

        elif pilihan == "5":
            id = input("Masukkan ID item: ")
            library.search_by_id(id)

        elif pilihan == "6":
            id = input("ID item yang ingin dipinjam: ")
            item = library.get_item_by_id(id)
            if item:
                if item.available:
                    item.available = False
                    print(f"Item '{item._title}' berhasil dipinjam.")
                else:
                    print("Item sedang dipinjam.")
            else:
                print("Item tidak ditemukan.")

        elif pilihan == "7":
            id = input("ID item yang ingin dikembalikan: ")
            item = library.get_item_by_id(id)
            if item:
                if not item.available:
                    item.available = True
                    print(f"Item '{item._title}' berhasil dikembalikan.")
                else:
                    print("Item memang sudah tersedia.")
            else:
                print("Item tidak ditemukan.")

        elif pilihan == "8":
            id = input("ID item yang ingin dihapus: ")
            success = library.remove_item_by_id(id)
            if success:
                print("Item berhasil dihapus.")
            else:
                print("Item tidak ditemukan.")

        elif pilihan == "9":
            print("Terima kasih. Program selesai.")
            break

        else:
            print("Pilihan tidak valid. Coba lagi.")

if __name__ == "__main__":
    main()
