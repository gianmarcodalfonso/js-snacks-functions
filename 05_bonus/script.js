/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nname = 'Mario';


// Dichiara la funzione qui.
const dailyHello = (name) => {
  let currentHour = new Date().getHours()
  if (currentHour <= 13 && currentHour >= 0 ) {
    console.log(`Buongiorno ${name}`)
  }
  else if (currentHour > 13 && currentHour <= 17) {
    console.log(`Buon pomeriggio ${name}`)
  }
  else if (currentHour <= 23 && currentHour > 17) {
    console.log(`Buonasera ${name}`)
  }
}


// Invoca la funzione qui e stampa il risultato in console
dailyHello(nname);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.