function sapaNama(nama) {
    return `Halo ${nama}, Selamat datang di demo kalkulator!`;
}

document.getElementById("sapa-button").addEventListener("click", function () {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML =
            `<p class="error">⚠️ Silakan masukkan nama Anda!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML =
            `<p class="success">${pesan}</p>`;
    }
});

function hitungKalkulator(angka1, angka2, operasi) {
    let hasil;
    switch (operasi) {
        case "tambah": hasil = angka1 + angka2; break;
        case "kurang": hasil = angka1 - angka2; break;
        case "kali": hasil = angka1 * angka2; break;
        case "bagi": hasil = angka2 === 0 ? "❌ Tidak bisa bagi nol" : angka1 / angka2; break;
        case "pangkat": hasil = Math.pow(angka1, angka2); break;
        case "akar": hasil = angka1 < 0 ? "❌ Akar tidak bisa negatif" : Math.sqrt(angka1); break;
        case "modulus": hasil = angka1 % angka2; break;
        default: hasil = "Operasi tidak valid";
    }
    return hasil;
}

function setupEventListener(buttonId, operasi) {
    document.getElementById(buttonId).addEventListener("click", function () {
        const angka1 = parseFloat(document.getElementById("angka1").value);
        const angka2 = parseFloat(document.getElementById("angka2").value);

        if (isNaN(angka1) || (isNaN(angka2) && operasi !== "akar")) {
            document.getElementById("hasil-kalkulator").innerHTML =
                `<p class="error">⚠️ Masukkan angka yang valid!</p>`;
        } else {
            const hasil = hitungKalkulator(angka1, angka2, operasi);
            document.getElementById("hasil-kalkulator").innerHTML =
                `<p class="result">Hasil: ${hasil}</p>`;
        }
    });
}

setupEventListener("btn-tambah", "tambah");
setupEventListener("btn-kurang", "kurang");
setupEventListener("btn-kali", "kali");
setupEventListener("btn-bagi", "bagi");
setupEventListener("btn-pangkat", "pangkat");
setupEventListener("btn-akar", "akar");
setupEventListener("btn-modulus", "modulus");
