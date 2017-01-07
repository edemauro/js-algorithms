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

function bfs(start, graph) {
  let visited = {};
  let queue = [];

  queue.push(start);

  while(queue.length) {
    start = queue.shift();
      if(!visited[start]) {
      console.log(start);
      visited[start] = true;
      if(graph[start]) {
        graph[start].forEach((adjNode) => { queue.push(adjNode); });
      }
    }
  }
}

bfs('one', graph);