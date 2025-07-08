const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
// const player = document.getElementById("player");
const currentboard = [];

let currentPlayer = 1;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const showPlayerTurn = () => {
  if (currentPlayer === 1) {
    player.innerHTML = "PLAYER X TURN";
  } else {
    player.innerHTML = "PLAYER O TURN";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");
    if (currentPlayer == 1) {
      box.innerHTML = "X";
      currentPlayer = 0;
    } else {
      box.innerHTML = "O";
      currentPlayer = 1;
    }
    box.disabled = true;
    showPlayerTurn();
  });
});

const checkWinner = () => {
  for (patterns of winPatterns) {
    console.log(patterns);
  }
};
checkWinner();

const resetGame = () => {
  boxes.forEach((box) => {
    box.textContent = "";
    player.innerHTML = "PLAYER X TURN";
    currentPlayer = 1;
    box.disabled = false;
  });
};
resetBtn.addEventListener("click", resetGame);
resetGame();
