// Select the <h1> element and store it in a variable
const heading1 = document.querySelector("h1");

console.log(heading1);

//Add an ID to the <h1> element
heading1.id = "mainTitle";

//Style the h1 element using js
heading1.style.color = "Red";

heading1.style.fontSize = "2em";

heading1.style.backgroundColor = "yellow";

//Create and add a ul and li elements

const ulElement = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Item 1";

// // Create a <ul> element
// const ulElement = document.createElement('ul');

// // Create three <li> elements
// const li1 = document.createElement('li');
// li1.textContent = 'Item 1';

// const li2 = document.createElement('li');
// li2.textContent = 'Item 2';

// const li3 = document.createElement('li');
// li3.textContent = 'Item 3';

// // Append the <li> elements to the <ul>
// ulElement.appendChild(li1);
// ulElement.appendChild(li2);
// ulElement.appendChild(li3);

// // Append the <ul> element to the body (or any other element)
// document.body.appendChild(ulElement);
