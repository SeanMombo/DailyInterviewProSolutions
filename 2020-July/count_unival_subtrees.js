class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
};

//recursion
//time: O(N)
//space: O(h) h when balanced = logN, worst case h = N (singly linked list)

function count_unival_subtrees(root) {
    let count = 0;

    function rec(root) {
        //base case
        if (!root) return true;

        let left = rec(root.left);
        let right = rec(root.right);

        let isUnival = true;

        if(!left || !right) {
            isUnival = false;
        }

        if(root.left) {
            if (root.left.val != root.val) {
                isUnival = false;
            }
        }

        if(root.right) {
            if (root.right.val != root.val) {
                isUnival = false;
            }
        }

        if (isUnival) {
            count++;
            return true;
        } else {
            return false;
        }
    }
    rec(root);
    return count;
}

a = new TreeNode(0)
a.left = new TreeNode(1)
a.right = new TreeNode(0)
a.right.left = new TreeNode(1)
a.right.right = new TreeNode(0)
a.right.left.left = new TreeNode(1)
a.right.left.right = new TreeNode(1)

console.log(count_unival_subtrees(a));