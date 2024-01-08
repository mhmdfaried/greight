let loginbtn = document.getElementById("loginbtn");
let emailField = document.getElementById("inputemail");
let passwordField = document.getElementById("inputpass");

var emailInput = document.getElementById('inputemail');
var emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function () {
        var email = emailInput.value;

        if (email.endsWith('@gmail.com')) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Please enter email domain with "@gmail.com"';
        }
    });

loginbtn.onclick = function() {
  // Mengambil nilai input email dan password
  var email = emailField.value;
  var password = passwordField.value;

  // Memeriksa apakah kolom email dan password sudah diisi
  if (email && password) {
    // Mengarahkan user ke halaman web lain setelah log in
    window.location.href = "OrderPage.html"; 
  } else {
    // Menampilkan pesan error jika kolom email atau password kosong
    alert("Please enter your email and password.");
  }
};