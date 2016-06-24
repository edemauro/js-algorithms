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
    this.items.sort((a,b) => { return a.priority - b.priorty; });
  },
  isEmpty() {
    return !this.items.length;
  }
}

function shortestPath(graph, start, end) {
  let distances = {};
  let queue = new PriorityQueue();

  for(vertex in graph) {
    if(vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(0, vertex);
    } else {
      distances[vertex] = Infinity;
      queue.enqueue(Infinity, vertex);
    }
  }
  console.log(queue);
  while(queue.length !== 0) {
    break;
    // let u = minDistance(distances,queue);
    // queue.splice(queue.indexOf(u), 1);
    // let neighbors = graph[u];
    // for(vertex in neighbors) {
    //   let distance = distances[u] + neighbors[vertex];
    //   if(distance < distances[vertex]) {
    //     distances[vertex] = distance;
    //   }
    // }
  }

}

// function minDistance(distances, queue) {
//   let min = Infinity;
//   let ret = null;

//   for(let i = 0; i < queue.length; i++) {
//     if(distances[i] < min) {
//       min = distances[i];
//       ret = i;
//     }
//   }

//   return ret.toString();
// }

shortestPath(vertices, '3', '6');