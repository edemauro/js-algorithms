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
    current = queue.shift();
      if(!visited[current]) {
        console.log(current);
        visited[current] = true;
        graph[current].forEach((adjNode) => { queue.push(adjNode); });
    }
  }
}

bfs('one', graph);