class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
};

function reconstruct(preorder, inorder) {
    let preIx = 0;
    function rec(inStart, inEnd) {
        if (inStart > inEnd) 
            return null;

        const node = new TreeNode(preorder[preIx]);
        preIx++;
        
        if (inStart === inEnd) 
            return node;

        let inIx;
        for(let i = 0; i < inorder.length; i++) {
            if (inorder[i] == node.val)
            inIx = i;
        }
        console.log(node.val, inIx, preIx)
        node.left = rec(inStart, inIx-1);
        node.right = rec(inIx+1, inEnd);
        
        return node;
    }
    return rec(0, inorder.length-1);
}


const tree = reconstruct(
    ['a', 'b', 'd', 'e', 'c', 'f', 'g'],
    ['d', 'b', 'e', 'a', 'f', 'c', 'g']
    )

function r(root) {
    if (!root) return;
    
    r(root.left);
    console.log(root.val);
    r(root.right);
}
console.log('------')
r(tree)