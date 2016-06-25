const adjList = [
  [],
  [],
  [3],
  [1],
  [0, 1],
  [2, 0]
];

function topSort(graph) {
  let result = [];
  let visited = [];
  let temp = [];

  for(let i = 0; i < graph.length; i++) {
    if(!visited[i] && !temp[i]) {
      topSortHelper(i, visited, temp, graph, result);
    }
  }

  return result;
}

function topSortHelper(node, visited, temp, graph, result) {
  temp[node] = true;
  let neighbors = graph[node];

  for(let i = 0; i < neighbors.length; i++) {
    let n = neighbors[i];

    if(temp[n]) {
      throw new Error('The graph is not a DAG.');
    }
    if(!visited[n]) {
      topSortHelper(n, visited, temp, graph, result);
    }
  }

  temp[node] = false;
  visited[node] = true;
  result.unshift(node);
}

console.log(topSort(adjList));