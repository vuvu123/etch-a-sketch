const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentGridSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clearBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorBtn = document.querySelector('#colorBtn');
const colorPicker = document.querySelector('#colorPicker');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeText = document.querySelector('#sizeText');

function setCurrentColor(color) {
  currentColor = color;
}

function setCurrentGridSize(size) {
  currentGridSize = size;
}

function setCurrentMode(mode) {
  currentMode = mode;
}

function generateGrid(size) {
  grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    gridItem.addEventListener('mouseover', changeColor);
    grid.appendChild(gridItem);
  }
}

function changeColor(e) {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'rainbow') {
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = "white";
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {
    grid.removeChild(gridItem);
  });
}

function resetGrid() {
  clearGrid();
  generateGrid(currentGridSize);
}

clearBtn.addEventListener('click', resetGrid);

rainbowBtn.addEventListener('click', () => {
  setCurrentMode('rainbow');
  resetGrid();
});

colorBtn.addEventListener('click', () => {
  setCurrentColor(colorPicker.value);
  setCurrentMode('color');
  resetGrid();
});

sizeSlider.addEventListener('input', () => {
  sizeText.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
});

generateGrid(currentGridSize);