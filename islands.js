const sea = [
  [0, 1, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0]
];

const columns = sea[0].length;
const rows = sea.length;

let row;
let column;
let numIslands = 0;

for(row = 0; row < rows; row++) {
  for(column = 0; column < columns; column++) {
    if(sea[row][column]) {
      removeIsland(sea, row, column);
      numIslands++;
    }
  }
}

// Use DFS to remove an island.
function removeIsland(sea, row, column) {
  // if element is 1
  if(sea[row][column]) {
    sea[row][column] = 0;
    // DFS to the top
    if(row > 0) {
      removeIsland(sea, row - 1, column);
    }
    // DFS to the bottom
    if(row < rows - 1) {
      removeIsland(sea, row + 1, column);
    }
    // DFS to the left
    if(column > 0) {
      removeIsland(sea, row, column - 1);
    }
    // DFS to the right
    if(column < columns - 1) {
      removeIsland(sea, row, column + 1);
    }
  }
}

console.log(4 === numIslands); // true