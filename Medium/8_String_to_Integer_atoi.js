/**
 * Problem: 8. String to Integer (atoi) (Medium)
 *
 * Implement myAtoi(string s) which converts a string
 * to a 32-bit signed integer.
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const n = s.length;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Skip leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Check sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Convert digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // 4. Handle overflow before it happens
        if (
            result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > 7)
        ) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};
