/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const startLetterCheck = (list, letter) => {
  const checkedNames = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].charAt(0).toLowerCase() === letter.toLowerCase() ) {
      checkedNames.push(list[i])
    }
  }
  return checkedNames;
}

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]