/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);



for(let i= 0; i<pets.length; i++){
console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

//pets.reverse();
//console.log(pets); //modifica l'array il reverse


for(let i = pets.lenght-1; i>=0;i--){
  console.log(pets[i]);
}





/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

//l'array è pets = ['redfish', 'hamster', 'dog', 'cat']. quindi  l'elemento 1-2-3 devono traslare.
// uso shift() per rimuovere il primo elemento, e poi lo pusho nell'array.
const primaPosizione = pets.shift(); //shift rimuove e  restituisce e rimuove sempre il primo. splice quel elemento che vogliamo noi
pets.push(primaPosizione);
console.log(pets); 





/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

//poichè si tratta di un'azione da fare 3 volte, quindi un ciclo finito, uso il for();
//voglio che ci siano targhe diverse per ogni oggetto dell'array cars, per cui creo un altro array

const licensePlate= ['ZA0123XY','DN065SA','CZ001KL'] 
for(let i=0; i<cars.length; i++){
  cars[i].licensePlate = licensePlate[i];
  
}
console.log(cars);




/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//per aggiungere un nuovo oggetto, devo pushare una nuova costante contenente le caratteristiche di un'altra auto
const nuovaMacchina = {
  brand: 'Mitsubishi',
  model: 'Pajero',
  color: 'silver',
  trims: 'G4'
}

//pusho dentro cars
cars.push(nuovaMacchina);
console.log(cars);

//elimino i trims di ogni elemento 
const justTrims = []
for(let i=0; i<cars.length; i++){
  justTrims.push(cars[i].trims[0]); // salvo prima i trims dentro il nuovo array dell esercizio 7. perche se elimino senza salvare prima, dopo non troverò nulla da recuperare
delete cars[i].trims;

}
console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


console.log(justTrims);
// incluso nell'esercizio 6





/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
function colori(colore){
for(let i= 0; i< cars.length; i++){
   
  if(cars[i].color.charAt(0)==='b'){
    console.log('Fizz');
  }else{
    console.log('Buzz');
  }
}

}
colori(cars);




/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i= 0;
while(numericArray[i]!== 32){
  console.log(numericArray[i]); i++;
}








/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'; 

const posizioneArray = [];

for(let i = 0; i < charactersArray.length; i++) {
  
  let char = charactersArray[i];

  

  switch(true) {
     
    case char === 'g':  
      posizioneArray.push(alfabeto.indexOf(char));
      break;
    

      case char === 'n':
        posizioneArray.push(alfabeto.indexOf(char));
      break;
    
       case char ==='u':
        posizioneArray.push(alfabeto.indexOf(char));
      break;

      case char ==='z':
        posizioneArray.push(alfabeto.indexOf(char));
      break;

      case char ==='d':
        posizioneArray.push(alfabeto.indexOf(char));
      break;

  }

  
}

console.log(posizioneArray);
// [6, 13, 20, 24, 3]


//non è corretto l'esercizio perche noi teoricamente non sappiamo cosa c'è realmente dentro l'array. deve funzionare sempre.