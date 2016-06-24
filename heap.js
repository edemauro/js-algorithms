function MinHeap() {
  this.content = [];
}

MinHeap.prototype = {
  push: function(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  },
  pop: function() {
    let result = this.content[0];
    let end = this.content.pop();
    if(this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  },
  size: function() {
    return this.content.length;
  },
  bubbleUp: function(n) {
    let element = this.content[n];
    while(n > 0) {
      let parentN = Math.floor((n + 1) / 2) - 1;
      let parent = this.content[parentN];

      if(element >= parent) {
        break;
      }

      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },
  sinkDown: function(n) {
    let length = this.content.length;
    let element = this.content[n];

    while(true) {
      let child1 = null;
      let child2 = null;
      let child2N = (n + 1) * 2;
      let child1N = child2N - 1;
      let swap = null;

      if(child1N < length) {
        child1 = this.content[child1N];
        if(child1 < element) {
          swap = child1N;
        }
      }

      if(child2N < length) {
        child2 = this.content[child2N];
        if(child2 < (swap == null ? element : child1)) {
          swap = child2N;
        }
      }

      if(swap == null) break;

      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};

let heap = new MinHeap();
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach((v) => { heap.push(v); })

console.log(heap);

heap.pop();

console.log(heap);