// 给定一个二叉树，找出其最大深度。
// DFS
// [3,9,20,null,null,15,7]
// 3
// / \
//9  20
//   /  \
//  15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};

console.log(maxDepth([3,9,20,null,null,15,7]))
