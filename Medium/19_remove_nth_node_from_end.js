/*
LeetCode 19. Remove Nth Node From End of List

Problem:
Given the head of a linked list, remove the nth node from the end of the list 
and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Approach:
Use two pointers (fast and slow). Move fast pointer n steps ahead, then move both
until fast reaches the end. Remove the target node.

Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove nth node
    slow.next = slow.next.next;

    return dummy.next;
};
