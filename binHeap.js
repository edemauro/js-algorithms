(function(exports) {
  'use strict';

  exports.BinaryHeap = function(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  };

  exports.BinaryHeap.prototype = {
    push(element) {
      this.content.push(element);
      this.bubbleUp(this.content.length - 1);
    },
    pop() {
      let result = this.content[0];

      let end = this.content.pop();

      if(this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }

      return result
    },
    size() {
      return this.content.length;
    },
    bubbleUp(n) {
      let element = this.content[n];
      let score = this.scoreFunction(element);

      while(n > 0) {
        let parentN = Math.floor((n + 1) / 2) - 1;
        let parent = this.content[parentN];

        if(score >= this.scoreFunction(parent)) {
          break;
        }

        this.content[parentN] = element;
        this.content[n] = parent;
        n = parentN;
      }
    },
    sinkDown(n) {
      let length = this.content.length;
      let element = this.content[n];
      let elemScore = this.scoreFunction(element);

      while(true) {
        let child2N = (n + 1) * 2;
        let child1N = child2N - 1;
        let swap = null;

        if(child1N < length) {
          let child1 = this.content[child1N];
          let child1Score = this.scoreFunction(child1);

          if(child1Score < elemScore) {
            swap = child1N;
          }
        }

        if(child2N < length) {
          let child2 = this.content[child2N];
          let child2Score = this.scoreFunction(child2);

          if(child2Score < (swap == null ? elemScore : child1Score)) {
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

//const BinHeap = require('./binHeap').BinaryHeap;
let heap = new exports.BinaryHeap((x) => { return x; });

[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach((number) => {
  heap.push(number);
});

console.log(heap);
})(typeof window === 'undefined' ? module.exports : window);

