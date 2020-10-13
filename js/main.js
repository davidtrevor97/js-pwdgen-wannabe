var nome = prompt("Qual è il tuo nome?");
var cognome = prompt("Qual è invece il tuo cognome?");
var colorePreferito = prompt("Qual è il tuo colore preferito?");
var password = nome + cognome + colorePreferito + "19";
document.getElementById("h1").innerHTML = password;
