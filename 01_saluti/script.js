/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function greet(name) {
  console.log(`ciao ${name}`);
  return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

greet("Mario");

//Risultato atteso se si passa 'Mario': // ciao Mario
