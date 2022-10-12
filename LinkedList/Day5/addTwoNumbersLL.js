/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time - O(m+n)
 * Space - O(1)
 */
var addTwoNumbers = function (l1, l2) {
  let newListHead = null;
  let newList = new ListNode();
  let carry = 0;

  while (l1 != null || l2 != null) {
    const v1 = l1 != null ? l1.val : 0;
    const v2 = l2 != null ? l2.val : 0;

    let sum = carry + v1 + v2;
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;

    const newNode = new ListNode(sum);
    if (newListHead == null) {
      newListHead = newNode;
    }
    newList.next = newNode;
    newList = newList.next;

    l1 = l1 != null ? l1.next : null;
    l2 = l2 != null ? l2.next : null;
  }

  if (carry == 1) {
    newList.next = new ListNode(carry);
  }

  return newListHead;
};
