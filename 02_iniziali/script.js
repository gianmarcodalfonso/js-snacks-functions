/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const startLetter = (list) => {
  const iniziali = [];
  for (let i = 0; i < list.length; i++) {
    iniziali.push(list[i].charAt(0));
  }
  return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]