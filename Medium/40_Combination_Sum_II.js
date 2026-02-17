/**
 * 40_Combination_Sum_II.js
 *
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * return all unique combinations where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used ONCE in the combination.
 *
 * The solution set must NOT contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 *  [1,1,6],
 *  [1,2,5],
 *  [1,7],
 *  [2,6]
 * ]
 *
 * Example 2:
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 *  [1,2,2],
 *  [5]
 * ]
 *
 * Constraints:
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    const result = [];

    // Sort first to handle duplicates
    candidates.sort((a, b) => a - b);

    function backtrack(start, current, total) {

        // If total equals target → store result
        if (total === target) {
            result.push([...current]);
            return;
        }

        // If total exceeds target → stop
        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates at same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // Choose current number
            current.push(candidates[i]);

            // Move to next index (i + 1) because each number can be used once
            backtrack(i + 1, current, total + candidates[i]);

            // Undo choice (backtrack)
            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};
