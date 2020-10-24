let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changeMainTitle() {
    let newMainTitle = document.getElementById("main-title");
    newMainTitle.innerHTML = "Welcome to Dom Toretto's Homepage";
  }
  changeMainTitle()

  // Part 2
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "#E9967A";
  }
  changeBackgroundColor()

  // Part 3
  function removeLastFavorite() {
    let myList = document.querySelector('ul');
    let lastListItem = document.querySelector('li:last-child');
    myList.removeChild(lastListItem);
  }
  removeLastFavorite()
  
  // Part 4
  // let firstHeading = document.getElementById('firstHeading');


  // Part 5

  // Part 6

  // Part 7
}
