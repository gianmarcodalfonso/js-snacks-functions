/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = (word) => {
  let vowelsCount = []
  let wordArray = word.toLowerCase().split(``)
  for(let i = 0; i < wordArray.length; i++) {
    
    if(wordArray[i] === `a` || wordArray[i] === `e` || wordArray[i] === `i` || wordArray[i] === `o` || wordArray[i] === `u`){
      vowelsCount.push(wordArray[i])
    }
  }
  return vowelsCount.length;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)