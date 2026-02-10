/**
 * LeetCode 35
 * Search Insert Position
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // found
        } else if (nums[mid] < target) {
            left = mid + 1; // search right
        } else {
            right = mid - 1; // search left
        }
    }

    // target not found, left is the insert position
    return left;
};
