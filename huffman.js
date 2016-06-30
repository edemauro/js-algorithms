/*
  Build tree bottom-up. At every step, select two nodes with the smallest
  frequencies.
*/
function Node(key, value) {
  this.key = key;
  this.value = value;
  this.right = null;
  this.left = null;
  this.parent = null;
}

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

const alphabet = [
  {char: 'a', freq: 5},
  {char: 'b', freq: 9},
  {char: 'c', freq: 12},
  {char: 'd', freq: 13},
  {char: 'e', freq: 16},
  {char: 'f', freq: 45}
];

function huffman(alphabet) {
  // let tree = null;
  let queue = new PriorityQueue();

  alphabet.forEach(character => queue.enqueue(character.freq, character));

  // return tree;
  return queue;
}

console.log(huffman(alphabet));