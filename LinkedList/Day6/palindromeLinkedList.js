/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * @param {ListNode} head
 * @return {boolean}
 * Time - O(N)
 * Space - O(1)
 */
var isPalindrome = function (head) {
  let sptr = head,
    fptr = head;

  while (fptr.next != null && fptr.next.next != null) {
    sptr = sptr.next;
    fptr = fptr.next.next;
  }

  //sptr points to center
  let ptr1 = head;
  let ptr2 = sptr.next;

  let prev = null,
    curr = ptr2;
  while (curr != null) {
    let cNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = cNext;
  }
  ptr2 = prev;

  while (ptr2 != null) {
    if (ptr1.val != ptr2.val) return false;

    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
};
