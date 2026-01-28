/*
LeetCode 23. Merge k Sorted Lists

Problem:
You are given an array of k sorted linked lists. Merge them into one sorted linked list.

Examples:
Input: [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Approach:
Use a Min Heap (Priority Queue) to always extract the smallest node.
This gives optimal performance.

Time Complexity: O(N log k)
Space Complexity: O(k)
*/

var mergeKLists = function(lists) {
    if (!lists.length) return null;

    function merge(l1, l2) {
        let dummy = new ListNode(0), cur = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        cur.next = l1 || l2;
        return dummy.next;
    }

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        lists.push(merge(a, b));
    }

    return lists[0];
};
