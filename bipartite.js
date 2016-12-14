const graph = {
  "one": ["two", "three"],
  "two": ["one", "three"],
  "three": ["one", "two"]
};

const graph2 = {
  "one": ["two", "four"],
  "two": ["one", "three"],
  "three": ["two", "four"],
  "four": ["three", "one"]
};

function bipartite(start, graph) {
  let visited = {};
  let part = {};

  visit(start,0);

  function visit(v,p) {
    visited[v] = true;
    part[v] = p;
    let neighbors = graph[v];

    neighbors.forEach((node) => {
      if(part[v] == part[node]) {
        // throw new Error('Graph is NOT bipartite');
        console.log('Graph is NOT bipartite');
      }

      if(!visited[node]) {
        visit(node,1-p);
      }
    });
  }
}

bipartite('one', graph);

bipartite('one', graph2);