//Event Listener for DOMContentLoaded - waits for the HTML doc to be fully loaded before executing the game setup

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.querySelector("#game-board"); //container where the cards will be displayed
  const movesDisplay = document.querySelector("#moves");
  //An element to show the number of moves made by the player
  const restartButton = document.querySelector("#restart"); //A button to restart the game
  let moves = 0; //tracks no of moves made
  let firstCard, secondCard; //tracks the cards being compared
  let lockBoard = false; //prevents further card flips while the 2 cards are being prepared

  //Array of card values - each value appears twice for matching pairs
  const cards = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
  ];

  //shuffles the card array to ensure a different card layout each game
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  //clears the game board and creates card elements for each value in the shuffled array
  function createBoard() {
    shuffle(cards);
    gameBoard.innerHTML = "";
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.dataset.value = card;
      //Adds a click event listener to each card to handle the card flip
      cardElement.addEventListener("click", flipCard);
      gameBoard.appendChild(cardElement);
    });
  }

  //handles logic for flipping card, prevents flipping more than 2 cards at a time or flipping same card twice
  //when card clicked flipCard is triggered..first flipped card if stored in the firstCard var , 2nd card flipped is stored in secondCard var - board then locked to prevent further card flips until the 2 cards are compared
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");
    this.textContent = this.dataset.value;

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this; //event listener - this is element that triggered even. i.e. the card was clicked
    lockBoard = true;
    moves++;
    //updates the move counter current number of moves
    //movesDisplay HTML element displays no of moves selected at top of code
    //.textcontent sets or gets the text content of an element (of movesDisplay)
    //` and ${} used to create template literal - allow embedded expressions in string literals - ${moves} gets current value of the moves var if moves is 5  string will show 5
    movesDisplay.textContent = `Moves: ${moves}`;
    //check for a match if 2 cards are flipped
    checkForMatch();
  }

  //check for match function - compares value of two flipped cards
  function checkForMatch() {
    //calls disableCards if they match or unflipCards if they dont
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  //removes click event listener from the matched cards to prevent further flipping
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    //resets board state and checks if the game is complete
    resetBoard();
    checkGameCompletion();
  }

  //temp locks the board then flips the cards back over if they dont match
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.textContent = "";
      secondCard.textContent = "";
      //resets the board after a short delay
      resetBoard();
    }, 1000);
  }

  //resets the firstCard secondCard and lockBoard vars
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  //checks all cards have been matched and displays congrat alert if so
  function checkGameCompletion() {
    const allFlipped = document.querySelectorAll(".card.flipped").length;
    if (allFlipped === cards.length) {
      setTimeout(() => alert("Congratulations! You matched all pairs!"), 500);
    }
  }

  //resets the move counter and recreates the game board when restart button is clicked
  restartButton.addEventListener("click", () => {
    moves = 0;
    movesDisplay.textContent = `Moves: ${moves}`;
    createBoard();
  });

  //calls createBoard to set up the game board when the page loads
  createBoard();
});
