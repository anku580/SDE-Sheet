/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * @param {Node} head
 * @return {Node}
 * Time - O(n) + O(n)
 * Space - O(n) for hashmap
 */
var copyRandomList = function (head) {
  let newList = new Node();
  let ptr1 = newList;
  let ptr2 = head;
  let hmap = new Map();

  while (ptr2 != null) {
    const newNode = new Node(ptr2.val);
    hmap.set(ptr2, newNode);
    ptr1.next = newNode;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  ptr1 = newList.next;
  ptr2 = head;

  while (ptr2 != null) {
    ptr1.random = ptr2.random != null ? hmap.get(ptr2.random) : null;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return newList.next;
};
