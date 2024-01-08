let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("inputname");
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

signinbtn.onclick = function() {
  // Mengambil nilai input nama, email, dan password
  var name = nameField.value;
  var email = emailField.value;
  var password = passwordField.value;

  // Memeriksa apakah semua kolom sudah diisi
  if (name && email && password) {
    // Mengarahkan user ke halaman web lain setelah sign in
    window.location.href = "Log In.html";
  } else {
    // Menampilkan pesan error jika ada kolom yang belum diisi
    alert("Please fill in all fields.");
  }
};