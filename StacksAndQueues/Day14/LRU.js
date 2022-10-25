/**
 * https://leetcode.com/problems/lru-cache/
 * @param {number} capacity
 * Time - O(1)
 * Space - O(N)
 */

class Node {
  constructor(key, value, prev, next) {
    this.key = key || 0;
    this.value = value || 0;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let head, tail, currentSize, map, maxSize;
var LRUCache = function (capacity) {
  head = new Node();
  tail = new Node();
  head.next = tail;
  tail.prev = head;

  currentSize = 0;
  maxSize = capacity;
  map = new Map();
};

const removeNode = (nodeToRemove) => {
  const previous = nodeToRemove.prev;
  const nextNode = nodeToRemove.next;

  previous.next = nextNode;
  nextNode.prev = previous;
};

const insertNodeAtFront = (nodeToInsert) => {
  const oldHead = head.next;
  head.next = nodeToInsert;
  nodeToInsert.prev = head;
  nodeToInsert.next = oldHead;

  oldHead.prev = nodeToInsert;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (map.has(key)) {
    const nn = map.get(key);
    //remove the node
    removeNode(nn);
    //insert the node at front
    insertNodeAtFront(nn);

    return nn.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (map.has(key)) {
    removeNode(map.get(key));
  }

  let newNode = new Node(key, value);
  map.set(key, newNode);
  insertNodeAtFront(newNode);

  if (map.size > maxSize) {
    //remove the LRU
    map.delete(tail.prev.key);
    removeNode(tail.prev);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
