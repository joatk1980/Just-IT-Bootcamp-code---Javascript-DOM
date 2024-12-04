// Task 2: Mouse Over and Mouse Out Events - Highlight Text

// Step-by-Step Instructions:

// Create the HTML Structure:

// Add a paragraph or heading element that will react when the mouse hovers over it.

// Add Event Listeners in JavaScript:

// Write functions to change the text and background color when the mouse is over the element and when it moves out.

// Test and Debug:

// Test that the text and background color change appropriately when you move your mouse over and out of the element.

const hoverElement = document.querySelector("#hoverElement");

hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.backgroundColor = "blue";
  hoverElement.textContent = "Mouse over!";
});

hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.backgroundColor = "red";
  hoverElement.textContent = "Hover over text";
});
