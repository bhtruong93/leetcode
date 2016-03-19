/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = {}, half = nums.length/2;

    for(var i = 0; i < nums.length; i++) {
        if(count[nums[i]]) {
            count[nums[i]] = count[nums[i]] + 1;
        }
        else {
            count[nums[i]] = 1;
        }
    }

    for(var element in count) {
        if(count[element] >= half) {
            return Number(element);
        }
    }
};
