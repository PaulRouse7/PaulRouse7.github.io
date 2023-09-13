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


function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
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
        cardsPicked.length = 0; 
        noClicking = false;
      }, 1000);
    }
  }
}

createDivsForColors(shuffledColors);



