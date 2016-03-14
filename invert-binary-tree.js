/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
     if(root === null) {
         return root;
     }
     else {
         var holder = root.left;
         root.left = root.right;
         root.right = holder;
         invertTree(root.right);
         invertTree(root.left);
         return root;
     }
 };
