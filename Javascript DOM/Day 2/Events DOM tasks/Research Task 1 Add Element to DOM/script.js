// Task 1: Add an Element to the DOM

// Create the HTML Structure:

// Add a text input field and a submit button to your page. tick

// Add Event Listener in JavaScript:

// Write a function to create and add a new element to the DOM containing the input field's value when the button is clicked.

// Optionally, clear the input field after submission.

// Test and Debug:

// Make sure a new element is added with the correct content, and that the input field clears as intended.

//selects button element with id and submits to variable submitButton
const submitButton = document.getElementById("submitButton");

//adds even listener to submitButton to listen for click event - when clicked function inside event listener executed
submitButton.addEventListener("click", () => {
  //retrieves value entered in the input field inputField and stores it in var inputValue
  const inputValue = document.getElementById("inputField").value;

  //Create a new h2 element and set its text content to the value stored in inputValue
  const newh2Element = document.createElement("h2");
  newh2Element.textContent = inputValue;

  //appends the new h2 element to the div with id output to add it to the DOM
  document.getElementById("output").appendChild(newh2Element);

  //clears the input field by setting its value to an empty string after the new element has been added to the DOM
  document.getElementById("inputField").value = "";
});
