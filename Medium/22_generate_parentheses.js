/*
LeetCode 22. Generate Parentheses

Problem:
Given n pairs of parentheses, generate all combinations of well-formed parentheses.

Examples:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Approach:
Use backtracking. Add '(' if we still have open parentheses left.
Add ')' only if it will not make the string invalid (close < open).

Time Complexity: O(4^n / sqrt(n))  (Catalan numbers)
Space Complexity: O(n) recursion stack
*/

var generateParenthesis = function(n) {
    const result = [];

    function backtrack(open, close, str) {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        if (open < n) {
            backtrack(open + 1, close, str + "(");
        }

        if (close < open) {
            backtrack(open, close + 1, str + ")");
        }
    }

    backtrack(0, 0, "");
    return result;
};
