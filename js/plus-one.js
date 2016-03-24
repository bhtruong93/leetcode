/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var last = digits.length - 1;
    while(digits[last] === 9) {
        if(last === 0) {
            digits.push(0);
            digits[last] = 1;
            return digits;
        }
        digits[last] = 0;
        last--;
    }
    digits[last] = digits[last] + 1;
    return digits;
};
