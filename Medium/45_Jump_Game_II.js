/**
 * 45_Jump_Game_II.js
 *
 * You are given a 0-indexed array nums.
 * Each element nums[i] represents the maximum jump length from that position.
 *
 * Return the minimum number of jumps required to reach the last index.
 *
 * It is guaranteed that you can reach the last index.
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 *
 * Example 2:
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let jumps = 0;          // number of jumps made
    let currentEnd = 0;     // end of current jump range
    let farthest = 0;       // farthest index reachable

    // We stop at n - 1 because we don't need to jump from last index
    for (let i = 0; i < nums.length - 1; i++) {

        // Update farthest reachable index
        farthest = Math.max(farthest, i + nums[i]);

        // When we reach the end of current jump range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};
