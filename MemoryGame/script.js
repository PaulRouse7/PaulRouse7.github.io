const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let attempts = 0;
const cardsPicked = [];
let noClicking = false;

function handleCardClick(event) {
  if (noClicking || event.target.classList.contains('flipped') || cardsPicked.length >= 2) {
    return;
  }

  let card = event.target;
  card.style.backgroundColor = card.classList[0];
  card.classList.add('flipped');
  attempts++;
  cardsPicked.push(card);

  if (cardsPicked.length === 2) {
    noClicking = true; 

    if (cardsPicked[0].classList[0] === cardsPicked[1].classList[0]) {
      alert('Huzzah! Matched!');
      cardsPicked.length = 0; 
      noClicking = false; 
    } else {
      setTimeout(function () {
        alert('Boo! Try again!');
        cardsPicked[0].classList.remove('flipped');
        cardsPicked[1].classList.remove('flipped');
        cardsPicked[0].style.backgroundColor = '';
        cardsPicked[1].style.backgroundColor = '';
        cardsPicked.length = 0; // Clear the array
        noClicking = false; // Enable clicking again
      }, 1000);
    }
  }
}


  
// when the DOM loads
createDivsForColors(shuffledColors);
