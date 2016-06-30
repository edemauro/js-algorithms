const graph = {
  "one": ["two", "three"],
  "two": ["four", "five"],
  "three": ["six", "seven"],
  "four": ["eight"],
  "five": []
}

function dfs(start, graph) {
  let visited = {};
  let stack = [];

  stack.push(start);

  while(stack.length) {
    start = stack.pop();
    if(!visited[start]) {
      console.log(start);
      visited[start] = true;
      if(graph[start]) {
        graph[start].forEach((adjNode) => { stack.push(adjNode); });
      }
    }
  }
}

dfs('one', graph);