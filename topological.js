const adjList = [
  [],
  [0, 3],
  [1],
  []
]; 

function topSort(graph) {
  let visited = {};
  let temp = {};
  let ret = [];

  for(let i = 0; i < graph.length; i++) {
    if(!visited[i]) {
      dfs(i);
    }
  }

  function dfs(v) {
    temp[v] = true;
    visited[v] = true;

    let adjNodes = graph[v];

    adjNodes.forEach((node) => {
      if(temp[node]) {
        console.log("Not a DAG.");
        process.exit(1);
      }

      if(!visited[node]) {
        dfs(node);
      }
    });

    temp[v] = false;
    ret.unshift(v);
  }
  return ret;
}

let sorted = topSort(adjList);

sorted.forEach((a) => { console.log(a); })