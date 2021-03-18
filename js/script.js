/******************************
 * 
 * PASSWORD GENERATOR 
 * 
 * 1. Chiede all'utente il suo nome;
 * 2. chiede all'utente il suo cognome;
 * 3. chiede all'utente il suo colore preferito;
 * 
 * OUTPUT: gemerera una password concatendnado gli input
 * 
 * 
*******************************/

// Chiede il nome
var yourname = prompt("Qual'è il tuo nome?");
console.log(yourname);
// Chiede il cognome
var surname = prompt("Quale'è il tuo cognome?");
console.log(surname)
// Chiede il tuo colore preferito
var color = prompt ("Il tuo colore preferito?");
console.log(color)

// Password1
var password1 = yourname + surname + color + "21";
// Password2
var password2 = color + surname + "21" + yourname;
// Password3
var password3 =  "21" + surname + yourname + color;

/*
    STAMPA I DATI INSERITI
*/

// Stampa il nome
document.getElementById('yourname').innerHTML = yourname;
// Stampa il ncognome
document.getElementById('surname').innerHTML = surname;
// Stampa la password generata n.1
document.getElementById('password1').innerHTML = password1;
// Stampa la password generata n.1
document.getElementById('password2').innerHTML = password2;
// Stampa la password generata n.1
document.getElementById('password3').innerHTML = password3;