/*
LeetCode 17. Letter Combinations of a Phone Number

Problem:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent. Return the answer in any order.

A mapping of digits to letters (like on telephone buttons) is given.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:
1 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

Approach:
Backtracking (DFS) to build all combinations recursively.
Time Complexity: O(3^n) to O(4^n)
Space Complexity: O(n)
*/
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const res = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            res.push(path);
            return;
        }

        for (let ch of map[digits[index]]) {
            backtrack(index + 1, path + ch);
        }
    }

    backtrack(0, "");
    return res;
};
