const adjList = [
  [],
  [],
  [3],
  [1],
  [0, 1],
  [2, 0]
];

let topSort = (adjList) => {
  let result = [];
  let visited = [];

  let visit = (node) => {
    visited.push(node);

    if(adjList[node]) {
      adjList[node].forEach(function(edge) {
        if(visited.indexOf(edge) === -1) {
          visit(edge);
        }
      });
    }

    result.unshift(node);
  };

  for(let i = 0; i < adjList.length; i++) {
    if(visited.indexOf(i) === -1) {
      visit(i);
    }
  }

  return result;
};

console.log(topSort(adjList)); // 5,4,2,3,1,0