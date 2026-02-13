/**
 * 38_Count_and_Say.js
 *
 * The count-and-say sequence is defined as:
 *
 * countAndSay(1) = "1"
 * countAndSay(n) is the run-length encoding (RLE) of countAndSay(n - 1).
 *
 * Run-length encoding works by replacing consecutive identical digits
 * with the count followed by the digit.
 *
 * Example:
 * Input: n = 4
 * Output: "1211"
 *
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = "11"
 * countAndSay(3) = "21"
 * countAndSay(4) = "1211"
 *
 * Constraints:
 * 1 <= n <= 30
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let current = "";
        let count = 1;

        for (let j = 1; j <= result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                current += count + result[j - 1];
                count = 1;
            }
        }

        result = current;
    }

    return result;
};
