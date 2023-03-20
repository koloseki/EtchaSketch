let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 64) {
    populateBoard(input);
  } 
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

document.querySelector('range').innerHTML = val
document.querySelector('range').innerHTML = post.join('<br/>');


function toggleGrid(status){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  if(status.checked){
    squares.forEach((div) => div.style.border = "0.01rem solid black");
  }else{
    squares.forEach((div) => div.style.border = "none");
  }
}

function clearAll(){
  changeSize()
}