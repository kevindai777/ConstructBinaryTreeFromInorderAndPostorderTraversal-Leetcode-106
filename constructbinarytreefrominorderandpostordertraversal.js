//Objective is to build a binary tree from the 1-D array values of the preorder and
//postorder traversal.

let postorder = [9,15,7,20,3]
let inorder = [9,3,15,20,7]

class Node {
    constructor(val, left, right) {
        this.val = val
        this.left = null 
        this.right = null
    }
}

class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(data) {
      this.root = new Node(null, null, data)
    }
  
    addLeftNode(node, data) {
      node.left = new Node(null, null, data)
    }
  
    addRightNode(node, data) {
      node.right = new Node(null, null, data)
    }
}


//O(n) solution that recursively builds the left and right part of the root of the
//binary tree by finding where the root is indexed in the inorder array.
function dfs(inorder, postorder) {
    if (!inorder || inorder.length < 1) {
        return null
    }

    let root = new Node(postorder.pop())
    let index = inorder.indexOf(root.val)

    let leftside = inorder.slice(0, index)
    let rightside = inorder.slice(index + 1)

    //Here, the order matters between doing the right or left side of the
    //binary tree. We do the right side first since postorder goes L -> R -> Root
    root.right = dfs(rightside, postorder)
    root.left = dfs(leftside, postorder)

    return root
}

return dfs(inorder, postorder)
