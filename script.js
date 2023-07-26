
/* ------ Change variable in CSS with number of columns and rows ------------- */
let gridSize = 20;
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var deg= rootStyles.getPropertyValue('--gridSize');
root.style.setProperty('--gridSize', gridSize);




/* ---------------- Add childs to the grid container ------------------------ */
const container = document.querySelector("#container");

for (let i = 0; i < (gridSize*gridSize); i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("gridItem");
  gridItem.textContent = "";

  container.appendChild(gridItem);
}

/* ------------------------------------------------------------------------------*/