// Task 3: Keypress Event - Change Input Field Style

// Step-by-Step Instructions:

// Create the HTML Structure:

// Set up a simple form with text input fields.

// Add Event Listener in JavaScript:

// Create a function that changes the background and text color of the input field whenever a key is pressed.

// Test and Debug:

// Type into the input field and verify that the style changes as expected.

//select the HTML element with their id's- - these are stored in constant (var) name and email
const name = document.querySelector("#name");
const email = document.querySelector("#email");

//event listener for when key is pressed down in the name and email input field
name.addEventListener("keypress", () => {
  changeInputStyle(name);
});

email.addEventListener("keypress", () => {
  changeInputStyle(email);
});

//Adds input listener to name and email input field - input event triggered when the value of input field changes - typing or deleting text
name.addEventListener("input", () => {
  resetInputStyle(name);
});

//when input value changes the resetInputStyle function is called with the respective name or email field as an argument

email.addEventListener("input", () => {
  resetInputStyle(email);
});

//when key is pressed down in name or email input field the changeInputStyle function is called with respective name or email field as an argument

function changeInputStyle(field) {
  field.style.backgroundColor = "pink";
  field.style.color = "green";
}

//function changes the style of the input field passed to the field argument
//sets background color of input field to pink and text colour to green

function resetInputStyle(field) {
  if (field.value === "") {
    field.style.backgroundColor = "";
    field.style.color = "";
  }
}

//function checks if the input field passed as the field argument is empty field.value === ""
//if the input field is empty it resets the background colour and text colour to their default styles by setting them to empty strings
