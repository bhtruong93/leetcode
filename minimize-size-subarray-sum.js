/*
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var min = Number.POSITIVE_INFINITY;
    for(var i = 0; i < nums.length; i++) {
        var length = findS(s, nums, i, [nums[i]], nums[i]);
        if(length < min) {
            min = length;
        }
    }
    if(min == Number.POSITIVE_INFINITY) {
        return 0;
    }
    else {
        return min;
    }
};

function findS(s, nums, index, currArr, currNum) {
    if(index !== nums.length) {
       var added = currNum + nums[index + 1];
       if(added > s) {
           return currArr.length + 1;
       }
       else if(added < s) {
           currArr.push(nums[index + 1]);
           return findS(s, nums, index + 1, currArr, added);
       }
    }
    else {
        return null;
    }
}
