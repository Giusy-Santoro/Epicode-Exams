/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum= 10+ 20;
console.log('**esercizio 1**');
console.log(sum);





/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random= Math.floor(Math.random()*21);
console.log('**esercizio2**');
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me= {
  name: 'Giusy',
  surname: 'Santoro',
  age: 28
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(me);
console.log('**esercizio3**');
delete me.age;
console.log(me);



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('**esercizio4**');
me.skills= ['java','javascript'];
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('**esercizio4**');

me.skills.push('HATML','CSS');
console.log(me.skills);




/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('**esercizio5*');
 me.skills.pop();
console.log(me.skills);




// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('**funzione 1*');
function dice(){
return Math.floor(Math.random()*6)+1; // +1perche devo escludere lo 0
}
const randomN = dice();
console.log(randomN);





/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('**funzione 2*');
function whoIsBigger(a,b){

if(a>b){
  return console.log(a + ' è maggiore di '+ b);
  
}else{
  return console.log(b + ' è maggiore di ' + a);
}

}

whoIsBigger(2,5);





/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('**funzione 3**');
function splitMe(str){
return str.split(' ')
}
console.log(splitMe("I love coding")); 






/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('**funzione 4**');
function deleteOne(stringa, boolean){
  if(boolean ===true){
    return stringa.slice(1);
  }else{
    return stringa.slice(0,-1);
  }

}
console.log(deleteOne('Ciao prof',false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

//con questo esempio dico di riposizionare col vuoto, dove c'è un numero, usando regex
 console.log('**funzione 5**');

 function onlyLetters(stringa){
   const regex = /[0-9]/g; 
   return stringa.replace(regex, "");

}
console.log(onlyLetters("I have 4 dogs and 2 cats"));





/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('**funzione 6**');

function isThisAnEmail(string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //il regex è allucinante!
  
  return emailRegex.test(string); //restituisce un booleano il metodo test()

}
console.log(isThisAnEmail('esame@mortale.it')); //true!!!   



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('**funzione 7**');


function whatDayIsIt() {
  const oggi = new Date();
  const dayOfWeek = oggi.getDay();

  switch (dayOfWeek) {
    case 0:
      return "Domenica";
    case 1:
      return "Lunedì";
    case 2:
      return "Martedì";
    case 3:
      return "Mercoledì";
    case 4:
      return "Giovedì";
    case 5:
      return "Venerdì";
    case 6:
      return "Sabato";
  }
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('**funzione 8**');
//devo ritornare un oggetto con le proprietà di sum e values.
//ciò che esce dal lancio del dado, va inserito in un array values.
function rollTheDices(num) {
  const values = [];
  for (let i = 0; i < num; i++) {
    values.push(dice());   //pusho nell'array values, il num random che esce dalla funzione dice()
  }

  const sum = values.reduce((totale, valoreCorrente) => totale + valoreCorrente, 0);  //uso reduce() perche devo calcolare la somma di tutti i valori dell'array values, partendo da zero.

  return {
    sum,
    values,
  };
}
const result = rollTheDices(2);
console.log("Risultato del lancio dei dadi è:");
console.log("Somma:", result.sum);
console.log("Valori dei dadi:", result.values);






/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('**funzione 9**');


function howManyDays(days){
  let today = new Date();
  let differenza = today - days;
  return Math.floor(differenza/(1000*60*60*24));
}

console.log(howManyDays(new Date('2023-11-1')));


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('**funzione 10**');
function isTodayMyBirthday() {
  const today = new Date();

  // Imposto la mia data di nascita------Anno, mese (da 0 a 11), giorno
  const birthDate = new Date(1994, 11, 6); 

  if( today.getFullYear() === birthDate.getFullYear() && today.getMonth() === birthDate.getMonth() &&  today.getDate() === birthDate.getDate() ) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday());



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('**funzione 11**');

const oggetto = {
  name: "Giusy",
  surname: "Santoro"
};

function deleteProp(oggetto,proprieta) {
    
  if(oggetto[proprieta]!== undefined){
  delete oggetto[proprieta];
  }
  return oggetto;
} 

console.log(deleteProp(oggetto, "surname")); 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]





/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (array) => {
  let esito = { Year: 1000 };
  array.forEach((film) => {
      let anno = parseInt(film.Year); 
      if (anno > esito.Year) {
          esito = film;
      }
  });
  return esito;
};

console.log('**funzione 12**');
console.log(newestMovie(movies));









/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (array) => {
  return array.length
}
console.log('**funzione 13**');
console.log('il numero di film totali è: '+ countMovies(movies));



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (array) => {
  return array.map((el) => el.Year)
}
console.log('**funzione 14**');

console.log('elenco anni di uscita dei film:');
console.log( onlyTheYears(movies));





/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('**funzione 15**');
const onlyInLastMillennium = (array) => array.filter((el) => parseInt(el.Year) < 2000);
  

console.log(onlyInLastMillennium(movies));





/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('**funzione 16**');
const sumAllTheYears  = (array) => array.reduce((totale, valoreCorrente)=> totale + parseInt(valoreCorrente.Year),0);
console.log(sumAllTheYears(movies));





/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('**funzione 17**');
const searchByTitle = (array, string) => array.filter((el)=> el.Title.toLowerCase().includes(string.toLowerCase()));
console.log(searchByTitle(movies, 'Lord'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


console.log('**funzione 18**');
/*
const searchAndDivide = (stringa) =>{
  const match = stringa.filter((el) => el.Title.toLowerCase().includes(Title.toLowerCase()));
  const unmatch =stringa.filter((el) => !match.includes(el));

  return {
    match,
    unmatch,
  };
}
console.log(searchAndDivide(movies));
*/



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('**funzione 19**');
function removeIndex(num){
  movies.splice(num,1);
  return movies;
}
console.log(removeIndex());

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('**funzione 20**');
function selezionaId(){
  return document.getElementById('contaniner');
}



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('**funzione 21**');
function selezioneTag(){
  return document.getElementsByTagName('td')[0]; //il primo che trova //oppure il queryselectorAll
}



/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('**funzione 22**');

function stampa(){
  const elementoTd = document.querySelectorAll('td');
  elementoTd.forEach((el) => {console.log(el.textContent);
  });
}
stampa();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const colore = function(){
  const rosso = document.querySelectorAll('a').forEach((el)=> el.style.backgroundColor= 'red');
}
console.log('**funzione 23**');


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/



/*
const aggiungere = function(){
  const lista= document.getElementById('mylist');
  const nuovoEl = document.createElement('li');
  nuovoEl.innerHTML ='nuovo elemento lista';
  lista.appendChild(nuovoEl);
};
aggiungere();

console.log('**funzione 24**'); */







/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
/*
const svuota = function(){
  const lista = document.getElementById('myList');
 lista.innerHTML ='';

};
svuota();

//oppure la faccio scomparire  con .style.display='none'

console.log('**funzione 25**');
*/





/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const add = function(){
  const elTr = document.querySelectorAll('tr').forEach((el)=> el.classList.add('test'));
  
};

console.log('**funzione 26**');
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function albero (height) {
  const alb = [];

  for (let i = 0; i < height; i++) {
    alb.push("*".repeat(i + 1));
  }

  return alb.join("\n");
}


console.log(albero(10));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/





/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(num) {
  if (num <= 1) {
    return false; // 0 e 1 non sono primi
  }

  // Verifica se il numero è divisibile per qualche numero da 2 a radice quadrata di number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Se è divisibile, non è primo
    }
  }

  return true; // Se non è divisibile per nessun numero, è primo
}

// Esempi di utilizzo
console.log(isItPrime(5)); // true
console.log(isItPrime(16)); // false