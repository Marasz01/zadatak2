function postaviTrenutnuGodinu() {
  const trenutnaGodina = new Date().getFullYear();
  document.getElementById("trenutna-godina").textContent = trenutnaGodina;
}

function usporediBrojeve() {
  const broj1 = parseFloat(document.getElementById("broj1").value);
  const broj2 = parseFloat(document.getElementById("broj2").value);

  if (isNaN(broj1) || isNaN(broj2)) {
    alert("Unesite valjane brojeve.");
    return;
  }

  const veciBroj = broj1 > broj2 ? broj1 : broj2;
  alert("Veći broj je " + veciBroj);
}
