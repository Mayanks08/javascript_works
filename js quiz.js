const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "New York"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "Russia",
      b: "China",
      c: "United States"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, index) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label><input type="radio" name="question${index}" value="${letter}" />${letter} : ${currentQuestion.answers[letter]}</label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
       <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[index].style.color = 'green';
    } else {
      answerContainers[index].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
