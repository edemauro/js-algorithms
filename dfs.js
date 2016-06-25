const graph = {
  "one": ["two", "three"],
  "two": ["four", "five"],
  "three": ["six", "seven"],
  "four": ["eight"],
  "five": []
}

function dfs(start, graph) {
  let visited = {};
  let queue = [];

  queue.push(start);

  while(queue.length) {
    start = queue.pop();
    if(!visited[start]) {
      console.log(start);
      visited[start] = true;
      if(graph[start]) {
        graph[start].forEach((adjNode) => { queue.push(adjNode); });
      }
    }
  }
}

dfs('one', graph);