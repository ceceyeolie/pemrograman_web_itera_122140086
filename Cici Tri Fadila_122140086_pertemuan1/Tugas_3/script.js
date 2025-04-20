document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMessage = document.getElementById("success-message");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (!validateName(name)) {
        nameError.textContent = "Nama harus lebih dari 3 karakter!";
        showAlert("⚠️ Nama harus lebih dari 3 karakter!", "error");
        isValid = false;
    }

    if (!validateEmail(email)) {
        emailError.textContent = "Masukkan email yang valid!";
        showAlert("⚠️ Masukkan email yang valid!", "error");
        isValid = false;
    }

    if (!validatePassword(password)) {
        passwordError.textContent = "Password harus minimal 8 karakter!";
        showAlert("⚠️ Password harus minimal 8 karakter!", "error");
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Pendaftaran berhasil!";
        successMessage.style.color = "green";

        showAlert("✅ Pendaftaran berhasil!", "success");

        document.getElementById("register-form").reset();
    }
});

function validateName(name) {
    return name.length > 3;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.fontSize = "14px";
    alertBox.style.color = "white";
    alertBox.style.fontWeight = "bold";
    alertBox.style.zIndex = "1000";
    alertBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";

    if (type === "error") {
        alertBox.style.backgroundColor = "#ff4d4d"; // Merah untuk error
    } else {
        alertBox.style.backgroundColor = "#28a745"; // Hijau untuk sukses
    }

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}
