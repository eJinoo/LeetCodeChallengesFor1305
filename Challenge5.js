// 94. Binary Tree Inorder Traversal

var inorderTraversal = function(root) {
    const res = [];

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;    
};

// 144. Binary Tree Preorder Traversal

function preOrder (root, res) {
    if(root == null){
        return
    }
    else {
        res.push(root.val)};
    preOrder(root.left, res);
    preOrder(root.right, res);
};

var preorderTraversal = function(root) {
    let res = [];
    preOrder(root, res);
    return res;
};

// 145. Binary Tree Postorder Traversal

var postorderTraversal = function(root) {
    const result = []

    const postOrder = (node) => {
        if (node === null){
            return;
        }
        postOrder(node.left);
        postOrder(node.right);
        result.push(node.val)
    }
    postOrder(root)
    return result;
};