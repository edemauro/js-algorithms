const vertices = {
    '1': {'2': 7, '3': 9, '6': 14},
    '2': {'1': 7, '3': 10, '4': 15},
    '3': {'1': 9, '2': 10, '4': 11, '6': 2},
    '4': {'2': 15, '3': 11, '5': 6},
    '5': {'4': 6, '6': 9},
    '6': {'1': 14, '3': 2, '5': 9}
};

function PriorityQueue() {
  this.items = [];
}

PriorityQueue.prototype = {
  enqueue(priority, key) {
    this.items.push({priority: priority, key: key});
    this.sort();
    return this;
  },
  dequeue() {
    return this.items.shift().key;
  },
  sort() {
    this.items.sort((a,b) => { return a.priority - b.priority; });
  },
  isEmpty() {
    return !this.items.length;
  }
}

function shortestPath(graph, start, end) {
  let distances = {};
  let prev = {};
  let queue = new PriorityQueue();

  for(vertex in graph) {
    if(vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(0, vertex);
    } else {
      distances[vertex] = Infinity;
    }
  }
 
  while(!queue.isEmpty()) {
    let u = queue.dequeue();
    let neighbors = graph[u];
    for(vertex in neighbors) {
      let alt = distances[u] + neighbors[vertex];
      if(alt < distances[vertex]) {
        distances[vertex] = alt;
        prev[vertex] = u;
        queue.enqueue(alt, vertex);
      }
    }
  }
  console.log(distances);
  console.log(prev);
}

shortestPath(vertices, '1', '5');