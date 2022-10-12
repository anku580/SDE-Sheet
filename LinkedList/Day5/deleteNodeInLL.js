/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * Time - O(1)
 * Space - O(1)
 */
var deleteNode = function (node) {
  const nextNode = node.next;
  let nextToNextNode = null;
  let nextNodeVal = null;
  if (nextNode) {
    nextToNextNode = nextNode.next;
    nextNodeVal = nextNode.val;
  }

  node.val = nextNodeVal;
  node.next = nextToNextNode;
};
