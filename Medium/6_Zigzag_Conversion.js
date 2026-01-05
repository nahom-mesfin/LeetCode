/**
 * Problem: 6. Zigzag Conversion (Medium)
 *
 * Convert a string into a zigzag pattern on a given number of rows
 * and read it row by row.
 *
 * Example:
 * Input: "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const rows = new Array(numRows).fill("").map(() => "");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};
