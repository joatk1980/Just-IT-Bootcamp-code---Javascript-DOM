// Task 3: Show/Hide an Image

// Create the HTML Structure:

// Include an image and a button that will toggle its visibility.

// Add Event Listener in JavaScript:

// Write a function to show or hide the image when the button is clicked, and update the button text to reflect the current state.

// Test and Debug:

// Check that the image visibility toggles correctly and that the button text changes accordingly with each click.

//select HTML elements with IDs and assign them vars
const toggleImage = document.getElementById("toggleImage");

const toggleButton = document.getElementById("toggleButton");

//Adding click event listener to toggle button - when button clicked function in event listener is executed

toggleButton.addEventListener("click", () => {
  //code checks the current display style of the toggleImage element - if display is none changes the diplay style and updates the button text to Hide Image
  if (toggleImage.style.display === "none") {
    toggleImage.style.display = "inline-block";
    toggleButton.textContent = "Hide Image";
  }
  //if display style is not none (image vis) changes display style to none to hide the image and update the button text to Show Image
  else {
    toggleImage.style.display = "none";
    toggleButton.textContent = "Show Image";
  }
});
