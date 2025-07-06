const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");

const winningPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");
    box.innerHTML = "X";
  });
});

const resetGame = () => {
  boxes.forEach((box) => {
    box.textContent = "";
  });
};
resetBtn.addEventListener("click", resetGame);
resetGame();
