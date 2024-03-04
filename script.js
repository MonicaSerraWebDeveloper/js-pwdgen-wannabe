// Alert per avvisare l'utente che stiamo per creare la sua password NON sicura

alert('Creiamo la tua password in 4 step');

// Chiedere all'utente il suo nome 

const yourName = prompt ('1. Scrivi il tuo nome');

// Chiedere all'utente il suo cognome

const yourSurname = prompt ('2. Scrivi il tuo cognome');

// Chiedere all'utente il suo colore preferito

const yourFavColor = prompt ('3. Scrivi il tuo colore preferito');

// Chiedere all'utente un numero

const randomNumber = prompt('4. Scrivi un numero');

// Convertire il randomNumber da stringa a numero

const randomNumberToFigure = parseInt(randomNumber);

// Variabile per la somma di 23 con  il numero dato dall'utente
const sumNumbers = 23 + randomNumberToFigure;
console.log(sumNumbers);

// Concatenare tutte le stringhe che ci fornisce l'utente

const yourPassword = yourName + yourSurname + yourFavColor + '23';

// Creaiamo la variabile const del messaggio da mostrare

const resultPassword = `Questa è la tua password: ${yourPassword}`;

// Stampare sulla pagina HTML la password
document.getElementById('password').innerHTML = resultPassword