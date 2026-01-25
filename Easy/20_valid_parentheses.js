/*
LeetCode 20. Valid Parentheses

Problem:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

A string is valid if:
1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every closing bracket has a corresponding opening bracket.

Examples:
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

Approach:
Use a stack. Push opening brackets. When a closing bracket appears, check if it matches
the top of the stack. If not, return false.

Time Complexity: O(n)
Space Complexity: O(n)
*/

var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
