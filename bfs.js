const graph = {
  "one": ["two", "three"],
  "two": ["four", "five"],
  "three": ["six", "seven"],
  "four": ["eight"],
  "five": []
}

function bfs(start, graph) {
  let visited = [];
  let queue = [];

  queue.push(start);

  while(queue.length) {
    start = queue.shift();
    if(visited.indexOf(start) === -1) {
      console.log(start);
      visited.push(start);
      if(graph[start]) {
        graph[start].forEach((adjNode) => { queue.push(adjNode); });
      }
    }
  }
}

bfs('one', graph);