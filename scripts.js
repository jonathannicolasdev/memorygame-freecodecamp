// Let's make he card flip when we click it
// First lets make a list of all out memory card elements

const cards = document.querySelectorAll(".memory-card");

console.log(cards);

function flipCard() {
  console.log("hello");
  console.log(this);
  this.classList.toggle("flip");
}

// Loop through that list of cards and to each one of the cards we will attach
// an event listener, we will listen for a click event and when that event is fired
// we will execute a function names flipcard

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
