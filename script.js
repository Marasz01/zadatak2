function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Molimo unesite točnu mail adresu i loziku.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Molimo unesite pravilnu email adresu.");
    return;
  }

  const validEmail = "test@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    alert("Login uspjesan!");
  } else {
    alert("Netočna mail adresa ili lozinka.Pokušajte ponovo.");
  }
}

function redirectToRegister() {
  window.location.href = "register.html";
}
