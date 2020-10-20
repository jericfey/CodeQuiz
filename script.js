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

function buildQuiz() {
  //variable to store the HTML output
  //Consider variable like questionAnswers
  const output = [];

  //For each question we get the current value and index (position in array)
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store list of answers to the question
    const answers = [];

    //for loop to create each available answer as a label element using template literals
    for (letter in currentQuestion.answers) {
      //add an HTML Radio button
      answers.push(
        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
      );
    }
    //add this question and answers to the output array using template literal again and embedded expression like join
    //the join expression takes the answers and puts them in a string to push to the answers div on the page
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });
  //combine output list into one string of HTML and print to screen
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  //select all answer containers from the quiz and create variables to keep track of current answer and total number of correct answers
  const answerContainers = quizContainer.querySelectorAll(".answers");

  //keep track of user's answers
  let numCorrect = 0;

  //For each question loop through and check the answers
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer by looking inside the answer container for current question
    const answerContainer = answerContainers[questionNumber];
    //define CSS selector for which radio button is checked
    const selector = `input[name=question${questionNumber}]:checked`;
    //using querySelector to search CSS for defined answerContainer and get the value
    // OR (|| {}) (empty object) is used in case a question is left blank and not answered instead of showing an error
    //The value with either be the user's answer or undefined and can skip question 

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add 1 to the number of correct answers
      numCorrect++;

      // color the answers green if correct
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      //And Red if answer is wrong
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
