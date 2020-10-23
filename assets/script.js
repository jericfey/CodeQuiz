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
      a: "True ",
      b: "False ",
    },
    correctAnswer: "a",
  },
  {
    question: "JavaScript is an event based language.",
    answers: {
      a: "True ",
      b: "False ",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which tab in Chrome inspect allows you to see local storage content?",
    answers: {
      a: "Console ",
      b: "Elements ",
      c: "Sources ",
      d: "Application ",
    },
    correctAnswer: "d",
  },
];

// Functions to build the quiz and show results
function createQuiz() {
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
                        ${currentQuestion.answers[letter]} \u00A0
                    </label>`
      );
    }
    //add this question and answers to the output array using template literal again and embedded expression like join
    //the join expression takes the answers and puts them in a string to push to the answers div on the page
    output.push(
      //added div element with class > slide to hold question and answer containers
      `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
       </div>`
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

//Play the quiz!
createQuiz();

//Pagination - variables to store references to navigation buttons and keep track of slide position
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//manages question/answer slide activity
function showSlide(n) {
  //by removing the active-slide class the current slide is hidden
  slides[currentSlide].classList.remove("active-slide");
  //by adding the active-slide class the current slide is displayed
  slides[n].classList.add("active-slide");
  //updates current slide number
  currentSlide = n;

  //if we are on the first slide, hide the previous slide button, otherwise show the button
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  //if we are on the last slide, hide the Next Slide button and show Submit, otherwise show Next slide
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

//Show first slide
showSlide(currentSlide);

//make navigation buttons work using showSlide function to make the buttons show the previous or next slide
function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

//EVENT LISTENERS
// on submit, show results
submitButton.addEventListener("click", showResults);
//Show previous slide button
previousButton.addEventListener("click", showPreviousSlide);
//show next slide button
nextButton.addEventListener("click", showNextSlide);
var interval;

//Countdown timer to start when "start quiz" button is clicked
function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $(".timer").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 00;
      seconds = 90;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".timer").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$("#start").click(function () {
  $(".timer").text("0:90");
  countdown();
});

$("#submit").click(function () {
  $(".timer").text("0:00");
  clearInterval(interval);
});
