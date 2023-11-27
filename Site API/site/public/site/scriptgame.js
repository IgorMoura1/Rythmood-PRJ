const questions = [
  {
    question: "Qual o maior sucesso do cantor canadense Drake?",
    answers: [
      { text: "One Dance", correct: true },
      { text: "Hotline Bling", correct: false },
      { text: "God's Plan", correct: false },
      { text: "Nice For What", correct: false },
    ]
  },
  {
    question: "Qual o último lançamento do grupo Beatles?",
    answers: [
      { text: "Here Comes the Sun", correct: false },
      { text: "Twist And Shout", correct: false },
      { text: "Now and Then", correct: true },
      { text: "Lady Madonna", correct: false },
    ]
  },
  {
    question: "A música 'Like a Virgin' da Madonna, foi lançado em que ano?",
    answers: [
      { text: "1982", correct: false },
      { text: "1989", correct: false },
      { text: "1986", correct: false },
      { text: "1984", correct: true },
    ]
  },
  {
    question: "Incluindo a Introdução, de quem são as vozes da música 'Capitulo 4, Versículo 3' do grupo Racionais MC's?",
    answers: [
      { text: "Sade, Mano Brown, Edi Rock, e Ice Blue", correct: false },
      { text: "Mano Brown, Primo Preto, Ice Blue e KL Jay", correct: false },
      { text: "Mano Brown, KL Jay, Ice Blue e Edi Rock", correct: false },
      { text: "Primo Preto, Mano Brown, Ice Blue e Edi Rock", correct: true },
    ]
  },
  {
    question: "De qual artista é a música 'Mina de Vermelho'?",
    answers: [
      { text: "MC Daleste", correct: true },
      { text: "Gloria Groove", correct: false },
      { text: "MC Davi", correct: false },
      { text: "Pabllo Vittar", correct: false },
    ]
  },
  {
    question: "Atualmente, a música com mais streaming no mundo é:",
    answers: [
      { text: "Bliding Lights, de The Weeknd", correct: true },
      { text: "Despacito, de Daddy Yanke e Justin Bieber", correct: false },
      { text: "Shape of You, de Ed Sheeran", correct: false },
      { text: "Sunflower, de Post Malone e Swae Lee", correct: false },
    ]
  },
  {
    question: "Em Call of My Name, de The Weeknd a frase 'I almost cut a piece of myself for your life' se refere a qual artista pop?",
    answers: [
      { text: "Ariana Grande", correct: false },
      { text: "Bella Hadid", correct: false },
      { text: "Rosalia", correct: false },
      { text: "Selena Gomez", correct: true },
    ]
  },
  {
    question: "Em qual ano o grupo de Samba/Pagode Exaltasamba encerrou suas atividades?",
    answers: [
      { text: "2011", correct: false },
      { text: "2012", correct: true },
      { text: "2014", correct: false },
      { text: "2013", correct: false },
    ]
  },
  {
    question: "A sigla BPM em relação a música, significa?",
    answers: [
      { text: "Batimentos por milisegundos", correct: false },
      { text: "Batimentos por metragem", correct: false },
      { text: "Batimentos por minuto", correct: true },
      { text: "Batimentos parametrizados na música", correct: false },
    ]
  },
  {
    question: "Para escutarmos música com a maior qualidade possível, é recomendado ouvir pelo:",
    answers: [
      { text: "App de Streaming na qualidade máxima", correct: false },
      { text: "CD (disco compacto)", correct: false },
      { text: "Vinil", correct: true },
      { text: "Ao vivo", correct: false },
    ]
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Proximo";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você fez ${score} pontos de ${questions.length}!`;
  nextButton.innerHTML = "Jogar de novo";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();