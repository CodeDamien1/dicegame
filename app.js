let player1Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function () {
  let diceNum = Math.floor(Math.random() * 6 + 1);
    player1Dice.textContent = diceNum;
    player1Dice.classList.remove("active");
    player1Score = player1Score + diceNum;
    player1Scoreboard.textContent = player1Score;
  if (player1Score >= 20) {
    message.textContent = "Well Done You've Won 🎉";
    showDisplayButton();
  } else if (diceNum === 1) {
    message.textContent = "GAME OVER!!!:    You Lose!   💀😈💀😈💀";
    showDisplayButton();
  }
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  console.log("reset");
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  message.textContent = "Dare to try Dare to Win?";
  player1Score = 0;
  player1Scoreboard.textContent = 0;
  player1Turn = true;
  player1Dice.textContent = "-";
  player1Dice.classList.add("active");
}
