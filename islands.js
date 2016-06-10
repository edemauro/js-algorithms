const sea = [
  [0, 1, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0]
];

const columns = sea[0].length;
const rows = sea.length;

let x;
let y;
let numIslands = 0;

for(x = 0; x < rows; x++) {
  for(y = 0; y < columns; y++) {
    if(sea[x][y]) {
      removeIsland(sea, x, y);
      numIslands++;
    }
  }
}

// Use DFS to remove an island.
function removeIsland(sea, x, y) {
  if(sea[x][y]) {
    sea[x][y] = 0;
    if(x > 0) {
      removeIsland(sea, x - 1, y);
    }

    if(x < rows - 1) {
      removeIsland(sea, x + 1, y);
    }

    if(y > 0) {
      removeIsland(sea, x, y - 1);
    }

    if(y < columns - 1) {
      removeIsland(sea, x, y + 1);
    }
  }
}

console.log(4 === numIslands); // true