function registriraj() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !password || !confirmPassword) {
    alert("Sva polja moraju biti popunjena.");
    return;
  }

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Unesite valjanu email adresu.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Lozinke se ne podudaraju.");
    return;
  }

  alert("Registracija uspješna!");
  window.location.href = "homepage.html";
}

function generirajLozinku() {
  let generatedPassword = Math.random().toString(36).slice(-8);
  document.getElementById("password").value = generatedPassword;
  document.getElementById("confirmPassword").value = generatedPassword;
  alert("Generirana lozinka: " + generatedPassword);
}

function promijeniStil() {
  let link = document.getElementById("generatePasswordLink");
  link.style.color = "#0056b3";
  link.style.cursor = "pointer";
}

document
  .getElementById("generatePasswordLink")
  .addEventListener("mouseleave", function () {
    this.style.color = "#007BFF";
  });
