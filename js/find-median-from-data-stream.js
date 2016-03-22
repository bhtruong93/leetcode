/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3)
findMedian() -> 2
*/

/**
 * @constructor
 */
var MedianFinder = function() {
    this.storage = [];
    this.odd = false;
    this.medianOdd;
    this.median1, this.median2;
    this.next = 0;
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    this.storage.push(num);
    this.storage.sort(function(a, b) {
      return a - b;
    });
    this.odd = !this.odd;


    if(this.odd && this.storage.length === 1) {
      this.medianOdd = this.storage[0]
    }
    else if(!this.odd && this.storage.length === 2) {
      this.median1 = this.medianOdd;
      this.median2 = this.storage[1];
    }
    else if(!this.odd) {
      this.median1 = this.storage[this.next - 0.5];
      this.median2 = this.storage[this.next + 0.5];
    }
    else if(this.odd) {
      this.medianOdd = this.storage[this.next];
    }

  this.next += 0.5;
};

/**
 * @return {double}
 * Return median of current data stream
 */
