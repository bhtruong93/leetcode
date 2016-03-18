/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var curr, prev;
    console.log(head, val)
    if(head) {
        curr = head.next;
        prev = head;
    }
    else {
        return head;
    }

    while(prev.val === val) {
        if(curr === null) {
            return null;
        }
        head = curr;
        prev = head;
        curr = curr.next;

    }
    while(curr) {
        if(curr.val === val) {
            prev.next = curr.next;
        }
        else {
            sprev = curr;
        }
        curr = curr.next;
    }
    return head;
};
