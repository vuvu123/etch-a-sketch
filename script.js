const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clearBtn');

function generateGrid(size) {
  grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    gridItem.addEventListener('mouseover', changeColor);
    grid.appendChild(gridItem);
  }
}

generateGrid(16);

function changeColor(e) {
  e.target.style.backgroundColor = 'blue';
}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {
    grid.removeChild(gridItem);
  });
}

clearBtn.addEventListener('click', () => {
  clearGrid();
  generateGrid(16);
});