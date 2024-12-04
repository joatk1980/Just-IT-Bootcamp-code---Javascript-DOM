const title = document.querySelector("#title"); //passing title to variable because the variable then holds everything - binding click event to title var - clicking on it is possible because of the id

const btn = document.querySelector("#btn");

const deleteBtn = document.querySelector("#deleteBtn");

const container = document.querySelector("#container");

console.log(title);

console.log(btn);

// element.addEventListener("event type", () => {some functionality})

// title.addEventListener("click", function thanks() {
//   console.log("Thank you for clicking the H1 element!");
// });

//passes title to this click event - function is called thanks need to ensure function is written before it
title.addEventListener("click", function thanks() {
  console.log("Thank you for clicking the H1 element!");
});

title.addEventListener("mouseover", function thanks() {
  console.log("Testing double click");
});

// title.addEventListener("dblclick", function thanks() {
//   console.log("Testing double click");
// });

//same as above but we use function above
// title.addEventListener("dblclick", () => {
//   console.log("Testing double click");
// });

// eventlistener(event type, function)

// We can declare functions outside of event listeners and call them within

let greeting = () => {
  console.log("Hello, thanks for clicking the button");
};

btn.addEventListener("click", () => {
  //call the greeting defined outside of the event listener
  greeting();
});

// With each event the browser generates an event object providing information about the event that took place

// Example to console log event info on click

// btn.addEventListener("click", (e) => {

//     console.log(e)

// })

// Mouseover Event

title.addEventListener("mouseover", () => {
  title.style.color = "Orange";
});

title.addEventListener("mouseout", () => {
  title.style.color = "Black";
});

// Button that adds a h2 element to the document

btn.addEventListener("click", () => {
  let newElement = document.createElement("h2");

  newElement.innerText = "I am a new element!";

  container.appendChild(newElement);
});

// Button that deletes an element from the document

deleteBtn.addEventListener("click", () => {
  newElement.remove();
});

//does the same code as below

deleteBtn.addEventListener("click", () => {
  container.lastChild.remove();
});

//need to add if/else statement to add message that no other elements to remove

deleteBtn.addEventListener("click", () => {
  //if to check if the container has lastChild element
  if (container.lastChild) {
    container.lastChild.remove();
  } else {
    console.log("No more elements");
  }
});

// Show / Hide Image

const image = document.getElementById("image");

const showHideBtn = document.getElementById("showHideBtn");

const toggleDisplay = () => {
  image.style.display !== "none"
    ? (image.style.display = "none")
    : (image.style.display = "inline-block");
};

showHideBtn.addEventListener("click", toggleDisplay);

// Input / Output

//Add input box
const input = document.getElementById("input");

const submitBtn = document.getElementById("submitBtn");

let outputElement = null;

//add Submit button in html file
submitBtn.addEventListener("click", () => {
  if (outputElement === null) {
    outputElement = document.createElement("h2");

    outputElement.innerText = input.value;

    document.body.append(outputElement);
  } else {
    outputElement.innerText = input.value;
  }
});
