/**
 * 47_Permutations_II.js
 *
 * Given a collection of numbers nums that might contain duplicates,
 * return all possible unique permutations.
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output:
 * [
 *  [1,1,2],
 *  [1,2,1],
 *  [2,1,1]
 * ]
 *
 * Example 2:
 * Input: nums = [1,2,3]
 * Output:
 * [
 *  [1,2,3],[1,3,2],
 *  [2,1,3],[2,3,1],
 *  [3,1,2],[3,2,1]
 * ]
 *
 * Constraints:
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    const result = [];
    const used = new Array(nums.length).fill(false);

    // Sort first to handle duplicates
    nums.sort((a, b) => a - b);

    function backtrack(current) {

        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            // Skip if already used
            if (used[i]) continue;

            // Skip duplicates
            // If same number as previous and previous not used in this branch
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            current.push(nums[i]);

            backtrack(current);

            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);

    return result;
};
