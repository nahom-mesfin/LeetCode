/*
LeetCode 24. Swap Nodes in Pairs

Problem:
Given a linked list, swap every two adjacent nodes and return its head.
You must swap the nodes themselves, not their values.

Example:
Input: 1 -> 2 -> 3 -> 4
Output: 2 -> 1 -> 4 -> 3

Approach:
Use a dummy node and iterate through the list swapping pairs.

Time Complexity: O(n)
Space Complexity: O(1)
*/

var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // move pointer
        prev = first;
    }

    return dummy.next;
};
