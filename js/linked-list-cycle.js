/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head, fast;

    if(!slow) {
        return false;
    }
    else if(slow.next) {
        fast = head.next;
    }

    while(fast) {
        if(fast === slow) {
            return true;
        }
        else {
            slow = slow.next;
            if(fast.next) {
                fast = fast.next.next;
            }
            else {
                return false;
            }

        }
    }
    return false;
};
