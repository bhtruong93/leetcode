/*
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root) {
        if(root.left) {
            root.next = helper(root.left);
        }
        if(root.right) {
            var curr = root;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = helper(root.right);
        }
        delete root.right;
        delete root.left;
    }

};

function helper(root) {
    if(root) {
        if(root.left) {
            root.next = helper(root.left);
        }
        if(root.right) {
            var curr = root;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = helper(root.right);
        }
        delete root.right;
        delete root.left;
    }
    return root;
}
