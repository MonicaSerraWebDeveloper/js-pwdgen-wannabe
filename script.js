// Alert per avvisare l'utente che stiamo per creare la sua password NON sicura

alert('Creiamo la tua password in 3 step');

// Chiedere all'utente il suo nome 

const yourName = prompt ('1. Scrivi il tuo nome');

// Chiedere all'utente il suo cognome

const yourSurname = prompt ('2. Scrivi il tuo cognome');

// Chiedere all'utente il suo colore preferito

const yourFavColor = prompt ('3. Scrivi il tuo colore preferito');

// Concatenare tutte le stringhe che ci fornisce l'utente

const yourPassword = yourName + yourSurname + yourFavColor + '23';

// Creaiamo la variabile const del messaggio da mostrare

const resultPassword = 'Questa è la tua password: ' + yourPassword;

// Stampare sulla pagina HTML la password
document.getElementById('password').innerHTML = resultPassword