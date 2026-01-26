/*
LeetCode 21. Merge Two Sorted Lists

Problem:
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted linked list by splicing together nodes from both lists.

Examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Approach:
Use a dummy node and a pointer to build the merged list.
Compare nodes from both lists and attach the smaller one.

Time Complexity: O(m + n)
Space Complexity: O(1) (iterative)
*/

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    current.next = list1 || list2;

    return dummy.next;
};
