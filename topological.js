const adjList = [
  [],
  [],
  [3],
  [1],
  [0, 1],
  [2, 0]
];

const adjList2 = [
  [],
  [0],
  [0],
  [1,2]
];

let topSort = (adjList) => {
  let result = [];
  let visited = [];

  let dfs = (node) => {
    visited.push(node);

    if(adjList[node]) {
      adjList[node].forEach(function(edge) {
        if(visited.indexOf(edge) === -1) {
          dfs(edge);
        }
      });
    }

    // use queue instead of stack. all dependent nodes will be placed in the back.
    result.unshift(node);
  };

  // make sure to check every node
  for(let i = 0; i < adjList.length; i++) {
    if(visited.indexOf(i) === -1) {
      dfs(i);
    }
  }

  return result;
};

console.log(topSort(adjList)); // 5,4,2,3,1,0