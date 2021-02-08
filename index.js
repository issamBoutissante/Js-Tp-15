document.getElementById("paypal").addEventListener("click", echanger);
document.getElementById("carteBancaire").addEventListener("click", echanger);
var isPaypal = true;
function echanger(e) {
  if (e.target.value == "paypal") {
    isPaypal = true;
    document
      .querySelectorAll(".paypal")
      .forEach((element) => (element.style.display = "table-row"));
    document
      .querySelectorAll(".carteBancaire")
      .forEach((element) => (element.style.display = "none"));
  } else {
    isPaypal = false;
    document
      .querySelectorAll(".paypal")
      .forEach((element) => (element.style.display = "none"));
    document
      .querySelectorAll(".carteBancaire")
      .forEach((element) => (element.style.display = "table-row"));
  }
}
var nom = document.getElementById("nom");
var telephone = document.getElementById("tel");
var email = document.getElementById("email");
var numCarte = document.getElementById("numCarte");
var password = document.getElementById("motPass");
var verifi = document.getElementById("verification");

document.getElementById("valider").addEventListener("click", (e) => {
  e.preventDefault();
  var nomRegex = /^[A-Z]{1}[a-zA-Z]*\s[a-z][a-zA-Z]*$/;
  var telRegex = /^\d{9}$/;
  var emailRegex = /@/;
  var numCarteRegex = /^\d{16}$/;
  var passwordRegex = /^\w{8,}$/;
  var codeVirRgex = /^\d{3}$/;
  if (!nomRegex.test(nom.value)) return alert("error de saisie nom");
  if (!telRegex.test(telephone.value))
    return alert("error de saisie telephone");
  if (!isPaypal) {
    if (!numCarteRegex.test(numCarte.value))
      return alert("error de saisie numero carte");
    if (!codeVirRgex.test(verification.value))
      return alert("error de saisie code verification");
  }
  if (isPaypal) {
    if (!emailRegex.test(email.value)) return alert("error de saisie email");
    if (!passwordRegex.test(motPass.value))
      return alert("error de saisie mot de pass");
  }
  alert("termine");
});

document.getElementById("effacer").addEventListener("click", function (e) {
  e.preventDefault();
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
});
