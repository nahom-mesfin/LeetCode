/**
 * LeetCode 31: Next Permutation
 *
 * Rearranges numbers into the next lexicographically greater permutation.
 * If such arrangement is not possible, rearranges to the lowest order.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i = nums.length - 2;

    // 1. Find first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. Find element just larger than nums[i] and swap
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3. Reverse the suffix
    reverse(nums, i + 1);
};

function reverse(arr, start) {
    let left = start;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
