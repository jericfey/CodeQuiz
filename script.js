//Define variables to store references to HTML elements
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

//Quiz Questions
const myQuestions = [
  {
    question:
      "In JavaScript, setInterval and setTimeout are both elements on the window dot object.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "a",
  },
  {
    question: "JavaScript is an event based language.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which tab in Chrome inspect allows you to see local storage content?",
    answers: {
      a: "Console",
      b: "Elements",
      c: "Sources",
      d: "Application",
    },
    correctAnswer: "d",
  },
];

// Functions to build the quiz and show results

function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
