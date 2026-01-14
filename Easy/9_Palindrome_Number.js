/**
 * Problem: 9. Palindrome Number (Easy)
 *
 * Given an integer x, return true if x is a palindrome,
 * and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // For even digits: x === reversedHalf
    // For odd digits: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
