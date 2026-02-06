/**
 * LeetCode 32: Longest Valid Parentheses
 *
 * Given a string containing '(' and ')',
 * return the length of the longest valid parentheses substring.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let stack = [-1]; // base for valid substring
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                // reset base
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
};
