/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var curr = 0;
    while(curr < nums.length) {
        for(var i = 0; i < curr; i++) {
            if(nums[i] === nums[curr]) {
                for(var j = curr; j < nums.length; j++) {
                    nums[j] = nums[j + 1];
                }
                nums.length = nums.length - 1;
            }
        }
        curr++;
    }

    return nums.length;
};
