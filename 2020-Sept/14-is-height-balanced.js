
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function is_height_balanced(node) {
    
    if (!node) return false;
    let ans = true;

    function rec(node) {
        if (!node) return true;

        let l = height(node.left);
        let r = height(node.right);

        if (
            Math.abs(l - r) <= 1 
            && rec(node.left) 
            && rec(node.right)
        )
            return true;

        return false;
    }

    function height(node) {
        if (!node) return 0;

        return 1 + Math.max(height(node.left), height(node.right));
    }

    return rec(node)
}

let n4 = new Node(4);
let n3 = new Node(3);
let n2 = new Node(2, n4);
let n1 = new Node(1, n2, n3);

console.log(is_height_balanced(n1))
