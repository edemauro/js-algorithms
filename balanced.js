/*
  A binary tree is height-balanced if (1) it is empty or (2) its left and right
  children are height-balanced AND the height of the left tree is within 1 of
  the height of the right tree.
*/

let Node = function Node(value) {
  return {
    value: value
  }
}

function isBalanced(root) {
  return (getHeight(root) >= 0);
}

function getHeight(root) {
  if(!root) {
    return 0;
  }

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

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