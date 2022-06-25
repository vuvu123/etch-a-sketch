const grid = document.querySelector('#grid');

function generateGrid(size) {
  // grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  // grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  }
}

generateGrid(16);