/*
Minimum spanning tree using Prim's algorithm. Could use min heap to speed up.
*/

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
  let node = Math.floor(Math.random() * 6 + 1).toString(); // choose a random node

  // add every vertex to unvisited array.
  for(vertex in graph) {
    unvisited.push(vertex);
  }

  // add random initial node to visited array and remove from unvisited.
  visited.push(node);
  unvisited.splice(unvisited.indexOf(node), 1);

  // while we have unvisited vertices
  while(unvisited.length !== 0) {
    // figure out the minimum edge with one end in visited and one end in unvisited
    let edge = minEdge(unvisited, visited, graph);
    // push said edge to results
    result.push(edge);y
    // remove the to end of the edge from the unvisited array
    unvisited.splice(unvisited.indexOf(edge.to), 1);
    // add to end of the edge to the visited array.
    visited.push(edge.to);
  }

  return result;
}

// helper function to get minimum weight edge with one end in visited and one end
// in unvisited
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