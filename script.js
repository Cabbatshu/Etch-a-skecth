let gridNum = 16;

const grid = document.createElement("div");
grid.setAttribute("id", "grid");
// __________________________________________________
const popUp = document.createElement("button");
popUp.setAttribute("id", "popUp");
popUp.innerText = "CLICK ME!";
document.body.appendChild(popUp);

function drawGrid() {
  // Inicial grid
  for (let i = 0; i < gridNum; i++) {
    const line = document.createElement("div");
    line.classList.add("line");

    for (let i = 0; i < gridNum; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      line.appendChild(square);

      square.addEventListener("mouseover", function () {
        square.classList.add("painted");
      });
    }

    grid.appendChild(line);
  }
  // __________________________________________________________
  document.body.appendChild(grid);
}

function askQuestion() {}

// should i name this function?
document.getElementById("popUp").onclick = function () {
  gridNum = Number(prompt("How many squares for your grid?", ""));
  if (gridNum > 101) {
    alert("Number cannot be superior to 100");
    return;
  }
  grid.innerHTML = "";

  drawGrid();
};

drawGrid();
