/**
 * 44_Wildcard_Matching.js
 *
 * Given a string s and a pattern p, implement wildcard pattern matching
 * with support for:
 *
 * '?' → Matches any single character
 * '*' → Matches any sequence of characters (including empty)
 *
 * The matching must cover the entire string.
 *
 * Example 1:
 * Input: s = "aa", p = "a"
 * Output: false
 *
 * Example 2:
 * Input: s = "aa", p = "*"
 * Output: true
 *
 * Example 3:
 * Input: s = "cb", p = "?a"
 * Output: false
 *
 * Constraints:
 * 0 <= s.length, p.length <= 2000
 * s contains lowercase letters
 * p contains lowercase letters, '?' or '*'
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    let i = 0;              // pointer for s
    let j = 0;              // pointer for p
    let starIndex = -1;     // last position of '*'
    let matchIndex = -1;    // position in s when '*' was found

    while (i < s.length) {

        // Case 1: Characters match or '?'
        if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
            i++;
            j++;
        }

        // Case 2: '*' found in pattern
        else if (j < p.length && p[j] === '*') {
            starIndex = j;
            matchIndex = i;
            j++; // move pattern pointer
        }

        // Case 3: Previous '*' exists → backtrack
        else if (starIndex !== -1) {
            j = starIndex + 1;
            matchIndex++;
            i = matchIndex;
        }

        // Case 4: No match and no previous '*'
        else {
            return false;
        }
    }

    // Check for remaining '*' in pattern
    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};
