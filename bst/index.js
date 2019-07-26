// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
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
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
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

  spiralTraversalInterview() {
    if (!this.data) {
      return null;
    }
    let q = [this, "s"];

    let reverseIt = true;
    let tempArr = [],spiralPrint = [];
    while (q.length > 1) {
      let node = q.shift();
      if (node === "s") {
        if (reverseIt) {
          spiralPrint = [...spiralPrint,...tempArr.reverse()];
        } else {
          spiralPrint = [...spiralPrint,...tempArr];
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
      spiralPrint = [...spiralPrint,...tempArr.reverse()];
    } else {
      spiralPrint = [...spiralPrint,...tempArr];
    }
    console.log(spiralPrint);
  }

  spiralTraversal(){
   
    if (!this.data) {
      return null;
    }
    let st1= [], st2= [];
    let spiralPrint=[]
    st1.push(this);
 
    while (st1.length > 0 || st2.length > 0)
    {
        while (st1.length > 0)
        { 
            let node = st1.pop();
      
            spiralPrint.push(node.data);
           
            if (node.right) st2.push(node.right);
            if (node.left) st2.push(node.left);
        }
        while (st2.length > 0)
        {
            let node = st2.pop();
          
            spiralPrint.push(node.data);
            if (node.left != null) st1.push(node.left);
            if (node.right != null) st1.push(node.right);
        }
    }
    console.log(spiralPrint);
  }
}
const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(2);
node.insert(1);
node.insert(6);

console.log(util.inspect(node, false, null, true /* enable colors */));
node.spiralTraversalInterview();
node.spiralTraversal();
module.exports = Node;
