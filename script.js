// Alert per avvisare l'utente che stiamo per creare la sua password NON sicura

alert('Creiamo la tua password in 3 step');

// Chiedere all'utente il suo nome 

const yourName = prompt ('1. Scrivi il tuo nome');
console.log(yourName);

// Chiedere all'utente il suo cognome

const yourSurname = prompt ('2. Scrivi il tuo cognome');
console.log(yourSurname);

// Chiedere all'utente il suo colore preferito

const yourFavColor = prompt ('3. Scrivi il tuo colore preferito');
console.log(yourFavColor);

// Concatenare tutte le stringhe che ci fornisce l'utente

const yourPassword = yourName + yourSurname + yourFavColor + 23;
console.log(yourPassword);

// Stampare sulla pagina HTML la password
