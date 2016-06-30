/*
  Build tree bottom-up. At every step, select two nodes with the smallest
  frequencies.
*/
function Node(freq) {
  this.freq = freq;
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
  let tree = null;
  let queue = new PriorityQueue();

  alphabet.forEach(character => queue.enqueue(character.freq, character));
  let i = 5;
  while(!tree) {
    let node1 = queue.dequeue();
    let node2 = queue.dequeue();
    let parent = new Node(node1.freq + node2.freq);

    node1.parent = parent;
    node2.parent = parent;
    parent.left = node1;
    parent.right = node2;

    queue.enqueue(parent.freq, parent);

    if(parent.freq == 100) {
      tree = parent;
    }
  }

  return tree;
}

function printCodes(root, arr, top) {
  if(root.left) {
    arr[top] = 0;
    printCodes(root.left, arr, top + 1);
  }

  if(root.right) {
    arr[top] = 1;
    printCodes(root.right, arr, top + 1);
  }

  if(!root.left && !root.right) {
    let code = "";
    for(let i = 0; i < top; i++) {
      code += arr[i];
    }
    console.log(root.char + ": ", code);
  }
}

let root = huffman(alphabet);
printCodes(root, [], 0);