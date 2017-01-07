const graph = {
  "one": ["two", "three"],
  "two": ["one", "four", "five"],
  "three": ["one", "six", "seven"],
  "four": ["two", "eight"],
  "five": ["two"],
  "six": ["three"],
  "seven": ["three"],
  "eight": ["two"]
}

let visited = {};

function dfs(start, graph, cb) {
  let adjList = graph[start];

  cb(start);

  visited[start] = true;

  adjList.forEach((adjNode) => {
    if(!visited[adjNode]) {
      dfs(adjNode, graph, cb);
    }
  });
}

dfs('one', graph, console.log);