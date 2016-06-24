const graph = [
  [3],    // 0
  [7],    // 1
  [5],    // 2
  [6],    // 3
  [1],    // 4
  [8],    // 5
  [0],    // 6
  [4, 5], // 7
  [2, 6]  // 8
]; 

function reverseGraph(graph) {
  let revGraph = [];

  for(let j = 0; j < graph.length; j++) {
    revGraph[j] = [];
  }
  
  for(let i = 0; i < graph.length; i++) {
    graph[i].forEach(function(edge) {
      revGraph[edge].push(i);
    });
  }

  return revGraph;
}

function scc(g) {
  let t = 0; // for finishing times in 1st pass
  let visited = []; // keep track of visited nodes.
  let finishing = []; // keep track of ordering for 2nd pass.

  // first, reverse the graph
  let graph = reverseGraph(g);

  // make sure every node is visited at least once.
  for(let i = graph.length - 1; i >= 0; i--) {
    if(visited.indexOf(i) === -1) {
      dfs(graph, i, visited, (node) => {
        finishing[t++] = node;
      });
    }
  }

  secondDfs();

  // second pass to determine the SCCs
  function secondDfs() {
    let visited = [];
    let count = 0;

    for(i = graph.length - 1; i >= 0; i--) {
      let node = finishing[i];

      if(visited.indexOf(node) === -1) {
        dfs(g, node, visited, (node) => {
          console.log(node);
        });
        console.log('------');
        count++;
      }
    }

    console.log('There are ' + count + ' strongly connected components.');
  }

  function dfs(graph, node, visited, fn) {
    visited.push(node);

    if(graph[node]) {
      graph[node].forEach((edge) => { 
        if(visited.indexOf(edge) === -1) {
          dfs(graph, edge, visited, fn);
        }
      });
    }
    if(fn !== undefined) {
      fn(node);
    }
  }
}

scc(graph);
