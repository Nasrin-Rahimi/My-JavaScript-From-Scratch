class treeNode{
   constructor(data){
       this.data = data;
       this.left = null;
       this.right = null;
   }

}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.min = 0;
        this.max = 0;
    }

    insert(value){
        let newNode = new treeNode(value);
        if(this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode); 
            }
        }
        else
        {

            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right,newNode);
            }
        }
    }

    remove(data) {
        //root is re-initialized with root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        //the tree is empty
        if (node === null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            else if(node.left === null) {
                node = node.right;
                return node;
            }
            else if(node.right === null) {
                node = node.left;
                return node;
            }
            let tmp = this.findMinNode(node.right);
            node.data = tmp.data;

            node.right = this.removeNode(node.right, tmp.data);
            return node;
        }
    }
    // Performs inorder traversal of a tree
    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        } 
    }

    preorder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }

    //Helper Methods

    //finds the minimum node in tree, searching starts from given node
    findMinNode(node) {
        if(node.left === null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {
        if (node === null) {
            return null;
        }
        else if (data < node.data){
            return this.search(node.left, data);
        }
        else if(data > node.data) {
            return this.search(node.right, data);
        }
        else {
            return node;
        }
    }

    height(node){
        if(node === null || (node.left === null && node.right === null)) {
            return 0;
        }
        else {
            let lDegth = this.height(node.left);
            let rDegth = this.height(node.right);

            if(lDegth > rDegth){
                return lDegth + 1;
            }
            else {
                return rDegth + 1;
            }
        }
    }

    //find min and max distances with respect to root.
    findMinMax(node, hd) {
        // Base case
        if (node == null) {
            return;
        }

        if (hd < this.min) {
            this.min = hd;
        }
        else if (hd > this.max) {
            this.max = hd;
        }

        this.findMinMax(node.left, hd - 1);
        this.findMinMax(node.right, hd + 1);
    }

    printVerticalLine(node, lineNo, hd) {
        if (node == null) {
            return;
        }
        if (lineNo == hd) {
            document.write(node.data, " ");
        }

        // Recur for left and right subtrees
        this.printVerticalLine(node.left, lineNo, hd - 1);
        this.printVerticalLine(node.right, lineNo, hd + 1);

    }
    //https://www.geeksforgeeks.org/print-binary-tree-vertical-order/
    // The main function that prints a given binary tree in vertical order
    verticalOrder(node) {
        this.findMinMax(node, 0);
        // Iterate through all possible vertical lines starting
        // from the leftmost line and print nodes line by line
        for (let lineNo = this.min; lineNo <= this.max; lineNo++) {
            this.printVerticalLine(node, lineNo, 0);
            document.write("</br>");
        }
    }

    topView(node) {

    }

}

// create an object for the BinarySearchTree
let BST = new BinarySearchTree();
  
// Inserting nodes to the BinarySearchTree
 BST.insert(15);
 BST.insert(25);
 BST.insert(10);
 BST.insert(7);
 BST.insert(22);
 BST.insert(17);
 BST.insert(13);
 BST.insert(5);
 BST.insert(9);
 BST.insert(27);
                          
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
  
let root = BST.getRootNode();

console.log("the heilght of BST is: " , BST.height(root));

document.write("Vertical order traversal is :" + "</br>");
BST.verticalOrder(root);
              
// prints 5 7 9 10 13 15 17 22 25 27

BST.inorder(root);
              
// Removing node with no children 
BST.remove(5);
              
              
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 
              
                          
root = BST.getRootNode();
              
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
              
// Removing node with one child 
BST.remove(7);
              
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17 

root = BST.getRootNode();
  
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
              
// Removing node with two children 
BST.remove(15);
      
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
  
root = BST.getRootNode();
console.log("inorder traversal");
  
// prints 9 10 13 17 22 25 27
BST.inorder(root);
              
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);


 
     