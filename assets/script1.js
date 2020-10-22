document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#timer");
  const startBtn = document.querySelector("#start");
  let timLeft = 90;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startButton.addEventListener("click", countDown);
});
