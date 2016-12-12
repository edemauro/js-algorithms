/*
  A binary tree is height-balanced if (1) it is empty or (2) its left and right
  children are height-balanced AND the height of the left tree is within 1 of
  the height of the right tree.

  this is O(n). There is a naive O(n^2) implementation in which the recursion
  is split between two different functions, isBalanced and height. In the below,
  the Math.max is moved into checkBalance instead of being its own recursive 
  function.
*/

const Node = (value) => {
  return {
    value: value
  }
};

function isBalanced(root) {
  return checkBalance(root) != -1;
}

function checkBalance(node) {
  if(!node) {
    return 0;
  }

  let leftHeight = checkBalance(node.left);
  let rightHeight = checkBalance(node.right);

  if(leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

let root = Node(0);
root.left = Node(1);
console.log(isBalanced(root)); // true

root.left.left = Node(2);
console.log(isBalanced(root)); // false