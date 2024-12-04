// Task 2: Create a Counter

// Create the HTML Structure:

// Add buttons for incrementing and decrementing a counter, along with a display area to show the current count.

// Add Event Listeners in JavaScript:

// Write functions to increase or decrease the counter value each time the respective button is clicked.

// Test and Debug:

// Verify that the counter updates correctly when the buttons are pressed.

//initialize the counter to keep track of the count
let counter = 0;

//assign variables to html elements
const counterValue = document.querySelector("#counter");
const decrementBtn = document.querySelector("#decrementBtn");
const incrementBtn = document.querySelector("#incrementBtn");

//add event listener to the decrement button - when button clicked counter decrements and text content of counter value span updated to reflect counter value
decrementBtn.addEventListener("click", () => {
  counter--; //decrement value of var by 1
  counterValue.textContent = counter;
});

//as above but to increment counter when button pressed
incrementBtn.addEventListener("click", () => {
  counter++; //increments value of var by 1
  counterValue.textContent = counter;
});
