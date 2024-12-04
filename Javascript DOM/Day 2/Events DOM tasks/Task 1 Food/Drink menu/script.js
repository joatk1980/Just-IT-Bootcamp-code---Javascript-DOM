// Task 1: Click Event - Show and Hide Menus

// Step-by-Step Instructions:

// Create the HTML Structure:

// Add two buttons: one labeled "See Food Menu" and another labeled "See Drink Menu."

// Create corresponding content areas for the food and drink menus.

// Add Event Listeners in JavaScript:

// Write a function that toggles the visibility of the menu when the button is clicked.

// Use a method to change the button text based on whether the menu is visible or hidden.

// Test and Debug:

// Ensure the menus show and hide as expected when the buttons are clicked, and that the button text updates correctly.

const foodBtn = document.querySelector("#foodBtn");
const drinkBtn = document.querySelector("#drinkBtn");
const foodMenu = document.querySelector("#foodMenu");
const drinkMenu = document.querySelector("#drinkMenu");

foodBtn.addEventListener("click", () => {
  toggleMenu(foodMenu, foodBtn, "See Food Menu", "Hide Food Menu");
});

drinkBtn.addEventListener("click", () => {
  toggleMenu(drinkMenu, drinkBtn, "See Drink Menu", "Hide Drink Menu");
});

function toggleMenu(menu, button, showText, hideText) {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    button.textContent = hideText;
  } else {
    menu.style.display = "none";
    button.textContent = showText;
  }
}
