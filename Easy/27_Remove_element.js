/*
27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed. Return the number of elements in nums which are not equal to val.

After removing, the first k elements of nums should contain the elements not equal to val.
The remaining elements are not important.

Example:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // index for placing non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
