/**
 * 43_Multiply_Strings.js
 *
 * Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.
 *
 * Note:
 * - You must NOT use BigInt or convert the entire string to an integer directly.
 *
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only
 * No leading zeros except "0"
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    // If either number is "0"
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;

    // Maximum possible length is m + n
    const result = new Array(m + n).fill(0);

    // Multiply from right to left (like manual multiplication)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;           // current digit
            result[i + j] += Math.floor(sum / 10);  // carry
        }
    }

    // Convert array to string and remove leading zeros
    let product = result.join('');

    while (product[0] === '0') {
        product = product.substring(1);
    }

    return product;
};
