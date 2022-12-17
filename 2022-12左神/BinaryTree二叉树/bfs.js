const bfs = (root) => {
  const stack = [root];
  while (stack.length) {
    const root = stack.shift();
    console.log(root.value);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
};
