/*
  LRU cache implementation using a queue and a hash.
*/

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

function LRUCache(limit) {
  this.size = 0;
  this.limit = limit || 10;
  this.map = {};
  this.head = null;
  this.tail = null;
}

LRUCache.prototype = {
  set(key, value) {
    if(this.map[key]) {
      let old = this.map[key];
      old.value = value;
      this.remove(old.key);
      this.setHead(old);
    } else {
      let node = new Node(key, value);
      if(this.size >= this.limit) {
        delete this.map[this.tail.key];
        this.size--;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      this.setHead(node);
    }
  },
  get(key) {
    if(this.map[key]) {
      let value = this.map[key].value;
      let node = new Node(key, value);
      this.remove(key);
      this.setHead(node);
      return value;
    } else {
      console.log('Key ' + key + ' does not exist in the cache.');
    }
  },
  remove(key) {
    let node = this.map[key];

    if(node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if(node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    delete this.map[key]; 
    this.size--;
  },
  setHead(node) {
    node.next = this.head;
    node.prev = null;

    if(this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if(this.tail === null) {
      this.tail = node;
    }

    this.size++;
    this.map[node.key] = node;
  }
};

let cache = new LRUCache(4);
cache.set('a', 1);
cache.set('a', 100);
cache.set('c', 3);
cache.set('d', 10);
cache.set('a', 11);
cache.set('b', 5);
console.log(cache.get('c')); // 3

console.log(cache.map) // c -> b -> a -> d
