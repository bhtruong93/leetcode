/*
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
 
var reverseBetween = function(head, m, n) {
    if(n == m) {
      return head;
    }
    var beforeM, mPointer,
        afterN, nPointer,
        curr = head,
        swapStart, swapEnd,
        counter = 1;
    //Find m
    while(mPointer === undefined) {
        if(curr === null) {
            return "Not found";
        }
        if(counter === m) {
            mPointer = curr;
            swapStart = mPointer;
            curr = curr.next;
            mPointer.next = null;
            counter++;
        }
        else {
            beforeM = curr;
            curr = curr.next;
            counter++;
        }

    }
    //Find n
    while(nPointer === undefined) {
        if(counter === n) {
            nPointer = curr;
            afterN = nPointer.next;
        }
        var temp = swapStart;
        swapStart = curr;
        curr = curr.next;
        swapStart.next = temp;

        counter++;
    }
    //Replace m position
    if(beforeM) {
        beforeM.next = swapStart;
    }
    if(afterN) {
        mPointer.next = afterN;
    }
    if(m === 1) {
      head = swapStart;
    }
    return head;
};
