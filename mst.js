const vertices = {
    '1': {'2': 7, '3': 9, '6': 14},
    '2': {'1': 7, '3': 10, '4': 15},
    '3': {'1': 9, '2': 10, '4': 11, '6': 2},
    '4': {'2': 15, '3': 11, '5': 6},
    '5': {'4': 6, '6': 9},
    '6': {'1': 14, '3': 2, '5': 9}
};

function prim(graph) {
  let result = [];
  let unvisited = [];
  let visited = [];

  for(vertex in graph) {
    unvisited.push(vertex);
  }

  visited.push('1');
  unvisited.splice(unvisited.indexOf('1'), 1);

  while(unvisited.length !== 0) {
    let edge = minEdge(unvisited, visited, graph);
    result.push(edge);
    unvisited.splice(unvisited.indexOf(edge.to), 1);
    visited.push(edge.to);
  }

  return result;
}

function minEdge(unvisited, visited, graph) {
  let ret = null;
  let min = Infinity;

  visited.forEach((vertex) => {
    let edges = graph[vertex];

    for(edge in edges) {
      if(unvisited.indexOf(edge) !== -1 && edges[edge] < min) {
        min = edges[edge];
        ret = {
          weight: edges[edge],
          from: vertex,
          to: edge
        };
      }
    }
  });

  return ret;
}

console.log(prim(vertices));