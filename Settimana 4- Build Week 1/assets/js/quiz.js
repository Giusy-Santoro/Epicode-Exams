const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit", //ANSWER
    incorrect_answers: [
      //OPTION
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


window.onload = function () {

  function startQuiz() {
    currentQuestion = 0;
    displayQuestion();
  }

// Mescola l'array delle domande
shuffleArray(questions);


let score = 0;
let timerInterval;
let currentQuestion = 0; // Inizialmente 0 per indicare che il quiz non è ancora iniziato
let userHasAnswered = false;

//far comparire le domande

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("nextButton");
  const questionProgress = document.getElementById("questionProgress");

  // Disabilita il pulsante "nextButton"
  nextButton.disabled = true;

  questionElement.textContent = questions[currentQuestion].question;
  answersElement.innerHTML = "";

  const allAnswers = [...questions[currentQuestion].incorrect_answers]; //rest parameter: prendi tutte le risposte errate
  allAnswers.push(questions[currentQuestion].correct_answer); //pusha dentro allAnswers le risposte corrette

  
  shuffleArray(allAnswers); //mischia le risposte

  //criamo i bottoni delle risposte
  allAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answerButton");

    button.addEventListener("click", () => {
      //console.log("Risposta selezionata:", answer);
      checkAnswer(answer);
      userHasAnswered = true;
      nextButton.disabled = false;

      const allAnswerButtons = document.querySelectorAll(".answerButton");
      allAnswerButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.border = "";
      });

      button.style.backgroundColor = "#900080";
      button.style.color = "#fff";
      button.style.border = "none";
      document.getElementById("nextButton").disabled = false;
    });
    answersElement.appendChild(button);
  });

  // Aggiorna il numero di avanzamento delle domande
  questionProgress.textContent = `Question ${currentQuestion + 1} / ${
    questions.length
  }`;
}

  // risposte in ordine casuale --------> si usa il decremento per evitare che la stessa domanda compaia più di una volta (FISHER YATES) > funziona fino all'esaurimento delle domande
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function checkAnswer(selected) {
  const allButtons = document.querySelectorAll(".answerButton");
  allButtons.forEach((button) => {
    if (button.textContent === selected) {        //selezione delle risposte > background del bottone
      button.style.backgroundColor = "#900080";
      button.style.color = "#fff";
      button.style.border = "none";
    } else {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.style.border = "";
    }
  });

  if (selected === questions[currentQuestion].correct_answer) {     //se la risposta selezionata è CORRETTA, incrementa di 1 lo score
    score++;
  }
}


//FUNZIONE RELATIVA AL NEXT BUTTON
document.getElementById("nextButton").addEventListener("click", () => {
  if (currentQuestion === -1) {     //se la domanda non esiste (-1) fai partire il quiz
    startQuiz();
  } else {
    if (!userHasAnswered) {
      // Se l'utente non ha risposto, esci dalla funzione per impedire il proseguimento
      return;
    }
  }

  if (currentQuestion < questions.length - 1) {     //se l'indice della domanda è minore della lunghezza dell'array vai avanti
    currentQuestion++;
    displayQuestion();
    startTimer(41);
    userHasAnswered = false; // Resetta la variabile per la nuova domanda > per le nuove domande deve essere false sennò il bottone è illuminato (come se avesse già risposto!)
    document.getElementById("nextButton").textContent = "Next Question";

    document.getElementById("nextButton").disabled = true; // Disabilita di nuovo il pulsante
  } else {
    clearInterval(timerInterval);
    displayResult();
  }
});

//CONDIZIONI PER ANDARE ALLA PROSSIMA DOMANDA
function goToNextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
    startTimer(41);
    userHasAnswered = false;
    document.getElementById("nextButton").textContent = "Next Question";
    document.getElementById("nextButton").disabled = true;
  } else {
    clearInterval(timerInterval);
    displayResult();
  }
}


function displayResult() {
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `<h2>Results</h2><h3><b>The summary of your answers:</h3>`;

  // Mostra i risultati > creare la 'ruota'
  const resultWheel = document.createElement("div");
  resultWheel.id = "resultWheel";
  quizElement.appendChild(resultWheel);

  const correctAnswers = score;
  const incorrectAnswers = questions.length - score;

  const percentageCorrect = (correctAnswers / questions.length) * 100;
  const percentageIncorrect = (incorrectAnswers / questions.length) * 100;

  const result = document.getElementById("resultWheel");
  result.innerHTML = `
    <p>Correct: ${correctAnswers} (${percentageCorrect}%)</p>
    <p>Wrong: ${incorrectAnswers} (${percentageIncorrect}%)</p>
  `;


  // Mostra se il test è superato o meno
  const passStatus = document.createElement("p");
  passStatus.textContent =
  percentageCorrect >= 60 ? "Congratulations! You passed the exam" : "Oh no! you failed the exam ç_ç";  //operatore ternario
  result.appendChild(passStatus);


  // Aggiungi il pulsante "Rate us"
  const rateUsButton = document.createElement("button");
  rateUsButton.textContent = "Rate us";
  rateUsButton.classList.add("rateButton");
  rateUsButton.addEventListener("click", () => {
    // Reindirizza alla pagina di valutazione desiderata
    window.location.href = "feedback.html";
  });
  quizElement.appendChild(rateUsButton);


  // Nascondi solo l'elemento questionProgress
  const questionProgress = document.getElementById("questionProgress");
  questionProgress.style.display = "none";
}

function startTimer(duration) {
  const timeElement = document.getElementById("time");
  let elapsed = 0;    //variabile che contiene il tempo trascorso in secondi

  clearInterval(timerInterval);   //prima di far partire il timer > puliscilo

  timerInterval = setInterval(() => {       // Avviamo un nuovo timer che si ripete ogni secondo
    elapsed++;         // Incrementiamo il tempo trascorso di 1 secondo

    const remainingSeconds = duration - elapsed;         // Calcoliamo i secondi rimanenti sottraendo il tempo trascorso dalla durata totale
    timeElement.textContent = `Time remaining: ${remainingSeconds} seconds`;   // Aggiorniamo l'elemento HTML con il tempo rimanente

    if (elapsed === duration) {          // Se il tempo trascorso è uguale alla durata totale, fermiamo il timer e passiamo alla prossima domanda
      clearInterval(timerInterval);
      goToNextQuestion();
    }
  }, 1000);

  //Viene utilizzato setInterval per avviare un intervallo di tempo che si ripete ogni secondo (1000 millisecondi). All'interno della callback di setInterval, il tempo trascorso viene incrementato di 1 secondo utilizzando elapsed++.
}


//BUG PRIMA DOMANDA CHE VIENE FUORI 'start' AL POSTO DI 'next question'
document.getElementById("nextButton").addEventListener("click", () => {
  if (currentQuestion === 0) {
    displayQuestion();
    startTimer(41);
    nextButton.textContent = "Next Question"; // Cambia il testo del pulsante se è la prima domanda
  }
});
}
