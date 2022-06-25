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

createDivs(50);

// Add event listener when mouse hovers over div
// When mouse hovers over, add class "hovered" to element
const allGridDivs = document.querySelectorAll('.grid-div');

allGridDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.className = 'grid-div hovered';
  });
});

// Add clear button to clear color from grid ()
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
  allGridDivs.forEach((div) => {
    div.className = 'grid-div';
  });
});


// Slider Bar | Add input element, type=range, min 10 -> max 100


// Add random color
