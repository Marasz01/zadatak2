function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Molimo unesite točnu mail adresu i loziku.");
    return;
  }

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Molimo unesite pravilnu email adresu.");
    return;
  }

  let validEmail = "test@example.com";
  let validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    alert("Login uspjesan!");
  } else {
    alert("Netočna mail adresa ili lozinka.Pokušajte ponovo.");
  }
}

function redirectToRegister() {
  window.location.href = "register.html";
}
