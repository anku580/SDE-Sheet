/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time - O(N)
 * Space - O(1)
 */
var reverseKGroup = function (head, k) {
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let ptr1 = dummyNode;

  while (true) {
    const kthNode = getKthNode(ptr1, k);
    if (kthNode == null) break;

    const kNext = kthNode.next;
    let prev = kNext;
    let curr = ptr1.next;

    while (curr != kNext) {
      let cNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = cNext;
    }

    let dNext = ptr1.next;
    ptr1.next = prev;
    ptr1 = dNext;
  }

  return dummyNode.next;
};

const getKthNode = (head, k) => {
  let ptr = head;

  while (ptr != null && k != 0) {
    ptr = ptr.next;
    k--;
  }

  return ptr;
};
