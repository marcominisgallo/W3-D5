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

let sum = 10 + 20;

console.log("sum", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

console.log("Random", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "marco",
  surname: "minisgallo",
  age: 23,
};

console.log("me", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

let removeAge = delete me.age;

console.log("removeAge", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript"];
// inserisco solo JS perchè come ci hai insegnato, HTML e CSS non sono linguaggi di programmazione.

console.log("me", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Teamwork");

console.log("Skills", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log("Skills", me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

let dice = () => Math.floor(Math.random() * 7);

console.log("dice", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};

console.log("whoIsBigger 5, 3", whoIsBigger(5, 3));
console.log("whoIsBigger 2, 7", whoIsBigger(2, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (s) {
  return s.split(" ");
};

console.log("splitMe", splitMe("Oggi ho bisogno di non avere distrazioni!"));
console.log("slitMe", splitMe("Ho sonno!"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (s, bool) {
  if (bool) {
    return s.substring(1);
  } else {
    return s.substring(0, s.length - 1);
  }
};

console.log("deleteOne", deleteOne("ciao", true));
console.log("deleteOne", deleteOne("ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (s) {
  return s.replace(/[0-9]/g, "");
};

console.log(
  "onlyLetters",
  onlyLetters("Io ho 4 case in diverse zone dell'italia")
);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (s) {
  if (s.includes("@") && s.includes(".")) {
    return true;
  } else {
    false;
  }
};

console.log("isThisAnEmail", isThisAnEmail("marcominisgallo@yahoo.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const now = new Date();
const whatDayIsIt = function () {
  let getDay = now.getDate();
  let getMonth = now.getMonth() + 1;
  let getYear = now.getFullYear();

  return `${getDay}${getMonth}${getYear}`;
};

console.log("whatDayIsIt", whatDayIsIt());

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

const rollTheDices = function (n) {
  const result = {
    numberArray: [],
    sum: 0,
  };

  for (let i = 0; i < n; i++) {
    const roll = dice();
    result.numberArray.push(roll);
    result.sum += roll;
  }

  return result;
};

console.log("rollTheDices", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (date) {
  const today = new Date(date);
  const giornoFornito = new Date(today.getFullYear(), 0, 1);
  return (
    today.getMonth() === giornoFornito.getMonth() &&
    today.getDate() === giornoFornito.getDate()
  );
};
//non riesco a far in modo di inserire in modo che i mesi vadano da 1 a 12, invece che da 0 a 11!

console.log("isToday..", isTodayMyBirthday(21, 1, 2025));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const obj = {
  name: "marco",
  surname: "minisgallo",
  età: 23,
};

const deleteProp = function (o, s) {
  delete o[s];
};
deleteProp(obj, "surname");
console.log("deleteProp", obj);

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function () {
  let findNew = movies[0];

  movies.forEach((movie) => {
    if (movie.Year > findNew.Year) {
      findNew = movie;
    }
  });
  console.log(findNew);
};

newestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (movies) {
  return movies.length;
};

console.log("countMovies", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (movies) {
  const years = [];

  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year);
  }
  return years;
};

onlyTheYears(movies);

console.log("onlyTheYears", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (movies) {
  return movies.filter((movie) => movie.Year.startsWith("1"));
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

//CONTINUA A DARMI ERRORE, LASCIO QUELLO CHE E' IL MIO RAGIONAMENTO ANCHE SE NON FUNZIONA.

/*let sumAllTheYears = function (movies) {
  const sum = 0;

  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
    return sum;
  }
}; 

console.log(sumAllTheYears(onlyTheYears)); */

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (s) {
  return movies.filter((movie) => movie.Title.includes(s));
};

console.log("search", searchByTitle("Infinity"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (searchS) {
  const result = {
    match: [],
    unmatch: [],
  };

  movies.forEach((movie) => {
    if (movie.Title.includes(searchS)) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
  });

  return result;
};

console.log("s&d", searchAndDivide("Avenger"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTd = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = function () {
  for (let i = 0; i < allTd.length; i++) {
    console.log(printTd[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const allA = document.getElementsByTagName("a");

const aBack = function () {
  for (let i = 0; i < aBack.length; i++) {
    aBack[i].setAttribute("style", "background-color: red");
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myList = document.getElementById("myList");

const newLi = document.createElement("li");

myList.appendChild(newLi);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const allLi = document.querySelectorAll("ul#myList li");

for (let i = 0; i < allLi.length; i++) {
  delete allLi[i];
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const allTr = querySelectorAll("tr");

for (let i = 0; i < allTr.length; i++) {
  allTr[i].classList.add("test");
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

//!!!!
// in console non escono questi risultati perchè gli esercizi DOM non danno corrispondenza con il documento
//!!!!!

const halfTree = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
};

console.log("Albero", halfTree(8));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function (n) {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
};

console.log(tree(4));

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
