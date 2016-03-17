/*
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var positives = [];

    if(nums.length === 0 || nums.length === 1 && nums[0] === 0) {
        return 1;
    }

    for(var i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            positives[nums[i]] = nums[i];
        }
    }

    for(var k = 0; k < positives.length; k++) {
        if(positives[k] !== undefined) {
            for(var j = i + 1; j < positives.length; j++) {
               if(positives[j] === undefined) {
                   return j;
               }
               if(j === positives.length - 1) {
                    return j + 1;
                }
            }
        }

        if(k === positives.length - 1) {
            return k + 1;
        }

        if(k !== 0) {
            return i;
        }


    }
};
