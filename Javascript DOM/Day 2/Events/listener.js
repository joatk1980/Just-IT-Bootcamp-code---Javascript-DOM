//define three variables and reference/link them with their respective ids using querySelector

const addButton = document.querySelector("#btnAdd");
const delButton = document.querySelector("#btnDel");
const feedback = document.querySelector("#feedback");

//define a variable to hold the feedback text
//be displayed when the add button is clicked

const textVar = "Add text dynamically, based on click event";

//Create an event listener and bind it to addButton object
//or variable to listen for a click event which then adds a new element
//can use "mouseover" instead of click

addButton.addEventListener("click", () => {
  //create a h2 element
  let newh2Element = document.createElement("h2");

  //set the value to be inserted within/between the opening and closing h2 tags
  newh2Element.innerText = textVar; //<h2> Add dynamic text here..</h2>

  //set the value of the variable feedback to an empty string to clear any previous feedback message

  feedback.innerText = " ";

  //Add the created h2 element with its content to the body of the document
  document.body.insertBefore(newh2Element, feedback);
});

//listens for click event and creates h2 element and then have inner text

//every time click on add button get text added dynamically - i.e click add and text 'Add text dynamically...' is added

//Create an event listener and bind it to delButton object
//or variable to listen for a doubleclick event which then deletes a new element

//can listen for lots of diff events
//can use "mouseout" instead of "dblclick"

delButton.addEventListener("dblclick", () => {
  //find all h2 elements within the body element
  const elements = document.querySelectorAll("body > h2");

  //check if there are one or more h2 elements within the body element of the document that can be removed/deleted

  if (elements.length > 0) {
    //remove the last h2 element that was added to the body
    elements[elements.length - 1].remove();
  }

  //if no h2 element is present display a message that no more elements to delete
  else {
    feedback.innerText = "No more elements to delete";
  }
});
