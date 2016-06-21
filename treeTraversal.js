const Node = (value) => { return {value: value}; }

const root = Node('D');
root.left = Node('B');
root.right = Node('E');
root.left.left = Node('A');
root.left.right = Node('C');
root.right.right = Node('F');

const inOrder = (tree) => {
  if(tree.left) { inOrder(tree.left) };
  console.log(tree.value);
  if(tree.right) { inOrder(tree.right) };
};

const preOrder = (tree) => {
  console.log(tree.value);
  if(tree.left) { preOrder(tree.left); }
  if(tree.right) { preOrder(tree.right); }
};

const postOrder = (tree) => {
  if(tree.left) { postOrder(tree.left); }
  if(tree.right) { postOrder(tree.right); }
  console.log(tree.value);
};