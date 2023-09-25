const numberInBox = document.querySelector(".g-number");
const inputValue = document.querySelector(".number-input");
const guessBtn = document.querySelector(".guess");
const playAgainBtn = document.querySelector(".again");
const playerScore = document.querySelector(".score");
const playerHighScore = document.querySelector(".high-score");
const helpText = document.querySelector(".helper-text");
let score = 20;
let highScore = 0;
let newHighScore = 0;
function randomNumber() {
  return Math.floor(Math.random() * 20);
}
let randomNo = randomNumber();
guessBtn.addEventListener("click", () => {
  let guessedNumber = Number(inputValue.value);
  if (!guessedNumber) {
    helpText.textContent = "Please enter a Number!";
    document.body.style.backgroundColor = "#d90429";
  } else if (guessedNumber === randomNo) {
    helpText.textContent = "You got it Right!";
    document.body.style.backgroundColor = "#4f772d";
    newHighScore = highScore;
    highScore = score;
    if (newHighScore > highScore) {
      playerHighScore.textContent = newHighScore;
    } else {
      newHighScore = highScore;
      playerHighScore.textContent = newHighScore;
    }
    numberInBox.textContent = randomNo;
  } else if (guessedNumber > randomNo) {
    if (score > 1) {
      score--;
      helpText.textContent = "Hint: It's Lower!";
      playerScore.textContent = score;
      document.body.style.backgroundColor = "#2b2d42";
    } else {
      document.body.style.backgroundColor = "#d90429";
      helpText.textContent = "You have no scores left!";
      playerScore.textContent = 0;
    }
  } else if (guessedNumber < randomNo) {
    if (score > 1) {
      helpText.textContent = "Hint: It's Higher!";
      score--;
      playerScore.textContent = score;
      document.body.style.backgroundColor = "#2b2d42";
    } else {
      document.body.style.backgroundColor = "#d90429";
      helpText.textContent = "You have no scores left!";
      playerScore.textContent = 0;
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  score = 20;
  inputValue.value = "";
  playerScore.textContent = 20;
  document.body.style.backgroundColor = "#2b2d42";
  randomNo = randomNumber();
  numberInBox.textContent = "?";
  helpText.textContent = "Start on guessing...";
});
