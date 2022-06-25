const container = document.querySelector('.container');

function createDivs() {
  for (let i = 0; i < 5; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'grid-div row-container';
    container.appendChild(rowDiv);
    for (let j = 0; j < 5; j++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'grid-div';
      rowDiv.appendChild(colDiv);
    }
  }
}

createDivs();