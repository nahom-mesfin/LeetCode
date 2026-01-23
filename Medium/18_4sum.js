/*
LeetCode 18. 4Sum

Problem:
Given an array nums of n integers, return all unique quadruplets 
[nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct
nums[a] + nums[b] + nums[c] + nums[d] == target

Return the quadruplets in any order without duplicates.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

Approach:
Sort the array, then fix two numbers and use two pointers for the remaining two.
Avoid duplicates.

Time Complexity: O(n^3)
Space Complexity: O(1) (excluding output)
*/

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicates

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;

                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};
