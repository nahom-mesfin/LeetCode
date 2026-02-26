/**
 * 46_Permutations.js
 *
 * Given an array nums of distinct integers,
 * return all possible permutations.
 *
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Constraints:
 * 1 <= nums.length <= 6
 * All integers are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(current) {

        // If permutation is complete
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            // Skip if already used in current permutation
            if (used[i]) continue;

            // Choose
            used[i] = true;
            current.push(nums[i]);

            // Explore
            backtrack(current);

            // Undo (backtrack)
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);

    return result;
};
