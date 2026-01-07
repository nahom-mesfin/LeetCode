/**
 * Problem: 7. Reverse Integer (Medium)
 *
 * Given a signed 32-bit integer x,
 * return x with its digits reversed.
 * If it overflows, return 0.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let reversed = 0;

  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  reversed *= sign;

  if (reversed < -2147483648 || reversed > 2147483647) {
    return 0;
  }

  return reversed;
};
