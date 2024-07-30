/* Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
ES: marcolanciverde21
BONUS
Scrivi la password generata in pagina invece che in console! */

/* 
1. Recupero l'elemento dal DOM
2. Preparo le variabili che gia conosco
2. Chiedo all'utente il suo nome
3. Chiedo all'utente il suo cognome
4. Chiedo il suo colore preferito
5. Calcolo la stringa completa
6. Stampo il messaggio in pagina
 */

/* Fase Preparatoria */

// Recupero l'elemento in pagina
const resultElement = document.getElementById('result');
console.log(resultElement);

const number = '21';

/* Fase di Raccolta dei dati */

// Chiedo all'utente il suo nome
const name = prompt("Qual'e il tuo nome?", 'Marco');
console.log(name);

// Chiedo all'utente il suo cognome
const lastname = prompt("Qual'è il tuo cognome?", 'Cappellato');
console.log(lastname);

// Chiedo all'utente il suo colore preferito
const favColour = prompt("Qual'è il tuo colore preferito?", 'Arancione')
console.log(favColour);

/* Fase di lavorazione dei dati */

// Elaboro la stringa
const password = name + lastname + favColour + number;
console.log(password);

/* Fase di output */
/* Stampo il messaggio */
resultElement.innerText = `La tua password generata è ${password}`;


