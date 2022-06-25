const container = document.querySelector('.container');

function createDivs(size) {
  for (let i = 0; i < size; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row-container';
    container.appendChild(rowDiv);
    for (let j = 0; j < size; j++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'grid-div';
      rowDiv.appendChild(colDiv);
    }
  }
}

createDivs(25);

// Add event listener when mouse hovers over div
// When mouse hovers over, add class "hovered" to element
const allGridDivs = document.querySelectorAll('.grid-div');

allGridDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.className = 'grid-div hovered';
  });
});

