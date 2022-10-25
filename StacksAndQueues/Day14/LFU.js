//https://leetcode.com/problems/lfu-cache/
// Time - O(1)
// Space - O(N)

class Node {
  constructor(key, value) {
    this.key = key || 0;
    this.value = value || 0;
    this.next = null;
    this.prev = null;
    this.count = 1;
  }
}

class List {
  constructor() {
    this.size = 0;
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertAtFront = (node) => {
    const oldHead = this.head.next;
    node.prev = this.head;
    node.next = oldHead;
    oldHead.prev = node;
    this.head.next = node;
    this.size += 1;
  };

  removeNode = (node) => {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size -= 1;
  };
}

/**
 * @param {number} capacity
 */
let keyNode, freqListMap, maxSize, minFreq;
var LFUCache = function (capacity) {
  keyNode = new Map();
  freqListMap = new Map();
  maxSize = capacity;
  minFreq = 0;
};

const updateFreqListMap = (node) => {
  //remove the node from the freqListMap and update counter
  const getList = freqListMap.get(node.count);
  getList.removeNode(node);

  if (getList.size == 0 && node.count == minFreq) {
    minFreq += 1;
  }

  node.count += 1;
  let newList = new List();
  if (freqListMap.has(node.count)) {
    newList = freqListMap.get(node.count);
  }

  newList.insertAtFront(node);
  freqListMap.set(node.count, newList);
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (keyNode.has(key)) {
    const node = keyNode.get(key);

    updateFreqListMap(node);

    return node.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (maxSize == 0) {
    return;
  }
  if (keyNode.has(key)) {
    const node = keyNode.get(key);
    node.value = value;
    updateFreqListMap(node);
    keyNode.set(key, node);
  } else {
    let newNode = new Node(key, value);

    while (keyNode.size == maxSize) {
      const nodeToRemoveFromList = freqListMap.get(minFreq);
      const prevTail = nodeToRemoveFromList.tail.prev;
      nodeToRemoveFromList.removeNode(prevTail);
      keyNode.delete(prevTail.key);
    }

    minFreq = 1;
    let list = new List();
    if (freqListMap.has(minFreq)) {
      list = freqListMap.get(minFreq);
    }
    list.insertAtFront(newNode);
    keyNode.set(key, newNode);
    freqListMap.set(minFreq, list);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
