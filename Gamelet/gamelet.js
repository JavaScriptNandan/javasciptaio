/*

Gamelet
Nandan
Version Beta

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  refresh(); // Refreshes the ball's position.
}
function refresh() {
  ball.style.left = position + "px";
}

document.addEventListener("keydown", handleKeyPress2);
function handleKeyPress2(e) {
  if (e.code === "ArrowUp") {
    position = position - 10;
  }
  if (e.code === "ArrowDown") {
    position = position + 10;
  }
  refresh();
}
