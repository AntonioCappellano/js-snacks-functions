/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function firstLetter(arrayStrings, letter) {
  const result = [];

  for (let i = 0; i < arrayStrings.length; i++) {
    // console.log(arrayStrings[i].toLowerCase());
    // console.log(arrayStrings[i].toLowerCase()[0]);
    // console.log(letter.toLowerCase());
    if (arrayStrings[i].toLowerCase()[0] === letter.toLowerCase()) {
      result.push(arrayStrings[i]);
    }
  }

  return result;
}

// Invoca la funzione qui e stampa il risultato in console
const result = firstLetter(names, "a");
console.log(result);
// const result2 = firstLetter(names, "m");
// console.log(result2);
// const result3 = firstLetter(names, "l");
// console.log(result3);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
