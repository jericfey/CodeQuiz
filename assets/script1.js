var initialsInput = document.querySelector("#initials-input");
var initialsList = document.querySelector("#initials-list");
var submit = document.querySelector("#sign-up");


//event listener for submit button
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  //create user object from submission
  var user = {
    initials: initialsInput.value.trim()
  }
  
     
      // set new submission
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      
      // get most recent submission
      var lastWinner = localStorage.getItem("user");
      lastWinner = JSON.parse(lastWinner);
      initialsList.textContent = lastWinner.initials;
  });