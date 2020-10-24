const submit = document.querySelector(".initials-submit");
const initialsList = document.querySelector(".initials");
const initialsInput = document.querySelector(".initials-input");

function template(data) {
  initialsList.insertAdjacentHTML(
    "beforeend",
    `
  <div class="initials flex items-start justify-start">
      <div class="flex-1">
        <p class="initials-body">${data.initials}</p>
      </div>
    </div>
  </div>`
  );
}

function appendInitials(event) {
  const data = {
    initials: initialsInput.value,
  };

  event.preventDefault();
  // If the value is nothing just return
  if (initialsInput.value.length < 1) return;

  // Insert new template into DOM
  template(data);
  console.log(data);

  // Reset textarea value
  initialsInput.value = "";

  // Save the list to localStorage
  localStorage.setItem("initialsListing", initialsList.innerHTML);
}

// submit.addEventListener("click", appendInitials, false);

// Check for saved wishlist items
const saved = localStorage.getItem("initialsListing");

// If there are any saved items, update our list
if (saved) {
  initialsList.innerHTML = saved;
}
