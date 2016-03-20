/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

    if(s3.length !== s1.length + s2.length) {
        return false;
    }

    return leaves(s1, s2, s3, 0, 0, 0);

};

function leaves(word1, word2, word3, c1, c2, c3) {

    if(c3 === word3.length) {
      if(c1 === word1.length && c2 === word2.length) {
        return true;
      }
      else { return false; }
    }

    if(word1[c1] === word3[c3] && word2[c2] === word3[c3]) {

        return leaves(word1, word2, word3, c1 + 1 , c2, c3 + 1) || leaves(word1, word2, word3, c1, c2 + 1, c3 + 1);
    }
    else if(word1[c1] === word3[c3]) {

        return leaves(word1, word2, word3, c1 + 1, c2, c3 + 1);
    }
    else if(word2[c2] === word3[c3]) {

        return leaves(word1, word2, word3, c1, c2 + 1, c3 + 1);
    }
    else {
        return false;
    }
}
