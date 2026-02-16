/**
 * 39_Combination_Sum.js
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return all unique combinations of candidates where the chosen numbers sum to target.
 *
 * The same number may be chosen unlimited times.
 * Two combinations are unique if the frequency of at least one chosen number differs.
 *
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 *
 * Example 2:
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 *
 * Example 3:
 * Input: candidates = [2], target = 1
 * Output: []
 *
 * Constraints:
 * 1 <= candidates.length <= 30
 * 2 <= candidates[i] <= 40
 * All elements are distinct
 * 1 <= target <= 40
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    const result = [];

    function backtrack(start, current, total) {

        // If total equals target → store a copy
        if (total === target) {
            result.push([...current]);
            return;
        }

        // If total exceeds target → stop exploring
        if (total > target) return;

        // Try all candidates starting from 'start'
        for (let i = start; i < candidates.length; i++) {

            // Choose
            current.push(candidates[i]);

            // Stay at i (not i + 1) because we can reuse same number
            backtrack(i, current, total + candidates[i]);

            // Undo choice (backtrack)
            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};
