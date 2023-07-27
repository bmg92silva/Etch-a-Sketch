/* ---------------------------- Change Grid with Slider -------------------------*/
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");
slider.addEventListener("input", function (event) {
  let gridSize = event.target.value;
  sliderValue.textContent = gridSize;
  changeGridCSS(gridSize);
  addChildGrid(gridSize);
});

/* ------ Change variable in CSS with number of columns and rows ------------- */
function changeGridCSS(gridSize = 16) {
  var root = document.querySelector(":root");
  var rootStyles = getComputedStyle(root);
  var deg = rootStyles.getPropertyValue("--gridSize");
  root.style.setProperty("--gridSize", gridSize);
}

/* ---------------- Add childs to the grid container ------------------------ */
function addChildGrid(gridSize = 16) {
  const container = document.querySelector("#container");

  removeAllChildNodes(container);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.setAttribute("id", i);
    gridItem.textContent = "";

    container.appendChild(gridItem);
  }
}

/* -------------- Remove all child elements ---------------- */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


  document.onmouseover = function (e) {
    const gridTarget = e.target.id;
    const classTarget = e.target.classList;

    if (classTarget == "gridItem") {
      // console.log(gridTarget);
      e.target.style.backgroundColor = "black";
    }
  };
