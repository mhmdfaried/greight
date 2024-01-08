let verifybtn = document.getElementById("verifybtn");
let emailField = document.getElementById("inputemail");

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

function validateForm(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  var email = document.getElementById("inputemail").value;

  if (email === "") {
    alert("Please input your email.");
    return false;
  } else {
    // Mengarahkan user ke halaman web lain setelah verifikasi
    window.location.href = "Verification.html";
    return false; // Menghentikan pengiriman form setelah mengarahkan user
  }
}
