const container = document.querySelector('.container');

function createDivs() {
  for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row-container';
    container.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'grid-div';
      rowDiv.appendChild(colDiv);
    }
  }
}

createDivs();

// Add event listener when mouse hovers over div
// When mouse hovers over, add class "hovered" to element
const allGridDivs = document.querySelectorAll('.grid-div');

allGridDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.className = 'grid-div hovered';
  });
});

