// var m = 0;
// var s = 0;
// document.getElementById("timer").innerHTML = 002 + ":" + 00;

// function startTimer() {
//   var presentTime = document.getElementById("timer").innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond(timeArray[1] - 1);
//   if (s == 59) {
//     m = m - 1;
//   }
//   //if(m<0){alert('timer completed')}

//   document.getElementById("timer").innerHTML = m + ":" + s;
//   console.log(m);
//   setTimeout(startTimer, 1000);
// }
// startTimer();

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
//     sec = "0" + sec;
//   } // add zero in front of numbers < 10
//   if (sec < 0) {
//     sec = "59";
//   }
//   return sec;
// }

var interval;

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
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".timer").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$("#start").click(function () {
  $(".timer").text("2:00");
  countdown();
});

$("#submit").click(function () {
  $(".timer").text("2:00");
  clearInterval(interval);
});
//start timer countdown on Start Quiz
// startButton.addEventListener("click", startTimer);
