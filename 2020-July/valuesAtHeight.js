class TreeNode {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
}
};



//time comp: O(N)
//space comp: O(n) if unbalanced. O(logN) if balanced
function valuesAtHeight(root, height) {
    const ans = [];

    function rec(root, h, height) {
        //base case
        if (!root) return;
    
        //push to list if current height === target height
        if (h === height) ans.push(root.value);
    
        //recurse
        rec(root.left, h+1, height)
        rec(root.right, h+1, height)
    }

    rec(root, 1, height);
    return ans;
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(valuesAtHeight(root, 2));