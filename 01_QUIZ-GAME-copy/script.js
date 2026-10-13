const buttonStart = document.getElementById("button-start");
const buttonRestart = document.getElementById("button-restart");
const screenStart = document.getElementById("quiz-screen-start");
const screenQuestion = document.getElementById("quiz-screen-question");
const screenResult = document.getElementById("quiz-screen-results");
const scorePanResult = document.getElementById("score-achived");
const messageQuestion = document.getElementById(
  "quiz-screen-question__heading",
);
const currentQuestionSpan = document.getElementById("current-questions");
const questionContent = document.getElementById("question-list");
const messageResult = document.getElementById("congratulation");
const scoreSpan = document.getElementById("score-process");
const totalQuestionQuiz = document.getElementById(
  "quiz-screen-question__total-questions",
);
const totalQuestionResult = document.getElementById(
  "quiz-screen-results__total-questions",
);
const process = document.getElementById("process");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;
let questionEnable = false;
buttonStart.addEventListener("click", StartQuiz);
buttonRestart.addEventListener("click", QuizRestart);

function StartQuiz() {
  screenStart.classList.remove("active");
  screenQuestion.classList.add("active");
  currentQuestion = 0;
  scoreAchived = 0;
  score = 0;
  process.style.width = "";
  scoreSpan.textContent = 0;
  showQuestion();
}

function showQuestion() {
  const questions = quizQuestions[currentQuestion].answers;
  totalQuestionQuiz.textContent = quizQuestions.length;
  questionEnable = false;
  messageQuestion.textContent = quizQuestions[currentQuestion].question;
  currentQuestionSpan.textContent = currentQuestion + 1;
  questionContent.innerHTML = "";
  questions.forEach((question) => {
    let button = document.createElement("button");
    button.classList.add("button-question");
    button.textContent = question.text;
    button.dataset.correct = question.correct;
    button.addEventListener("click", showAnswer);
    questionContent.appendChild(button);
  });
}

function showAnswer(event) {
  if (questionEnable) return;
  questionEnable = true;

  let isCorrect = false;
  
  let question = event.currentTarget;

  if(question.dataset.correct === "true"){
    isCorrect = true;
    question.classList.add("correct");
  }
  else{
    question.classList.add("incorrect");
    Array.from(questionContent.children).forEach(question =>{
        if(question.dataset.correct === "true"){
            question.classList.add("correct");
        }
    })
  }

  if (isCorrect) score++;
  currentQuestion++;
  process.style.width = (currentQuestion / quizQuestions.length) * 100 + "%";
  scoreSpan.textContent = score;
  setTimeout(() => {
    if (currentQuestion < quizQuestions.length) showQuestion();
    else showResult();
  }, 1000);
}

function showResult() {
  screenQuestion.classList.remove("active");
  screenResult.classList.add("active");
  scorePanResult.textContent = score;
  const goodMark = score / quizQuestions.length * 100
  if(goodMark > 80){
    messageResult.textContent = "Good Job !";
  }
  else if(goodMark > 50){
    messageResult.textContent = "Good effort! Keep trying";
  }
  else messageResult.textContent = "Stupid";
}

function QuizRestart() {
  screenStart.classList.add("active");
  screenResult.classList.remove("active");
}
