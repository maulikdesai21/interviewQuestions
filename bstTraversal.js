
const util = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data <= this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data >= this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }

  maxDept() {
    if (!this.data) {
      return 0;
    }
    else {
      /* compute the depth of each subtree */
      let lDepth, rDepth;
      lDepth = (this.left) ? this.left.maxDept() : 0;
      rDepth = (this.right) ? this.right.maxDept() : 0;

      /* use the larger one */
      if (lDepth > rDepth)
        return lDepth + 1;
      else return rDepth + 1;
    }
  }
  numberOfNodes() {
    if (!this.data)
      return 0;
    let lDepth, rDepth;
    lDepth = (this.left) ? this.left.numberOfNodes() : 0;
    rDepth = (this.right) ? this.right.numberOfNodes() : 0;

    return 1 + lDepth + rDepth;
  }
  spiralTraversalInterview() {
    if (!this.data) {
      return null;
    }
    let q = [this, "s"];

    let reverseIt = true;
    let tempArr = [], spiralPrint = [];
    while (q.length > 1) {
      let node = q.shift();
      if (node === "s") {
        if (reverseIt) {
          spiralPrint = [...spiralPrint, ...tempArr.reverse()];
        } else {
          spiralPrint = [...spiralPrint, ...tempArr];
        }
        q.push("s");
        reverseIt = !reverseIt;
        tempArr = [];
      } else {
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
        tempArr.push(node.data);
      }
    }
    if (reverseIt) {
      spiralPrint = [...spiralPrint, ...tempArr.reverse()];
    } else {
      spiralPrint = [...spiralPrint, ...tempArr];
    }
    console.log(spiralPrint);
  }

  spiralTraversal() {

    if (!this.data) {
      return null;
    }
    let st1 = [], st2 = [];
    let spiralPrint = []
    st1.push(this);

    while (st1.length > 0 || st2.length > 0) {
      while (st1.length > 0) {
        let node = st1.pop();

        spiralPrint.push(node.data);

        if (node.right) st2.push(node.right);
        if (node.left) st2.push(node.left);
      }
      while (st2.length > 0) {
        let node = st2.pop();

        spiralPrint.push(node.data);
        if (node.left != null) st1.push(node.left);
        if (node.right != null) st1.push(node.right);
      }
    }
    console.log(spiralPrint);
  }
  isSymmetric() {
    if (!this.data) { // Sanity check
      return true;
    }
    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
      // Create two stacks
      var s1 = [s], s2 = [t];

      // Perform preorder traversal
      while (s1.length > 0 || s2.length > 0) {
        var n1 = s1.pop(), n2 = s2.pop();

        // Two null nodes, let's continue
        if (!n1 && !n2) continue;

        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.data !== n2.data) return false;

        // Scan tree s from left to right
        // and scan tree t from right to left
        s1.push(n1.left); s1.push(n1.right);
        s2.push(n2.right); s2.push(n2.left);
      }

      return true;
    }
    return isMirror(this.left, this.right);
  }

  lowestCommonAncestor(n1, n2) {
    function ancestor(root, n1, n2) {
      while (root) {
        // If both n1 and n2 are smaller than root, then LCA lies in left 
        if (root.data > n1 && root.data > n2)
          root = root.left;

        // If both n1 and n2 are greater than root, then LCA lies in right 
        else if (root.data < n1 && root.data < n2)
          root = root.right;

        else break;
      }
      return root;
    }
    return ancestor(this.data, n1, n2);
  }
}
const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(2);
node.insert(1);
node.insert(6);

console.log("==============================TREE OBJECT STARTS ===============================================");
console.log(util.inspect(node, false, null, true /* enable colors */));
console.log("==============================TREE OBJECT ENDS =================================================\n\n");
console.log("==============================METHOD DONE ON WHITEBOARD=========================================\n");
//node.spiralTraversalInterview();
console.log("\n\n")
console.log("==============================SOLVING USING TWO STACK===========================================\n")
//node.spiralTraversal();
console.log("\n\n")
console.log("============================== Max Dept===========================================\n")
console.log(node.maxDept());


console.log("============================== Number of Nodes===========================================\n")
console.log(node.numberOfNodes(5, 2));

console.log("============================== Lowest Common Ancestor  ===========================================\n")
console.log(node.lowestCommonAncestor());
const symmetricTree = new Node(1);
symmetricTree.insert(2);
symmetricTree.insert(2);
symmetricTree.insert(3);
symmetricTree.insert(4);
symmetricTree.insert(4);
symmetricTree.insert(3);
console.log("============================== symmetricTree Not Woking As its a BST===========================================\n");

//console.log(symmetricTree.isSymmetric());
