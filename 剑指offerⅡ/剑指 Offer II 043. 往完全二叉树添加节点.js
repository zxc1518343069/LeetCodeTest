// https://leetcode.cn/problems/NaqhDT/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
// 开始建树
var CBTInserter = function (root) {
  this.root = root;
  const queue = [];
  this.candidate = []; //  没有同时又 左右节点 的节点
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    // 没有同时拥有左右节点，证明他是最后一层 / 倒数第二层右侧 的 某个节点
    if (!(node.left && node.right)) {
      this.candidate.push(node);
    }
  }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const child = new TreeNode(val);
  // 拿到第一个 没有同时拥有左右节点的节点
  // 即插入值的父节点
  const node = this.candidate[0];
  let ret = node.val;
  // 没有做就插入左边 有则 插入右边
  if (!node.left) {
    node.left = child;
    // 为什么这里步 shift 因为右边还没插
  } else {
    node.right = child;
    this.candidate.shift();
  }

  // 为什么 要push  因为这个节点 没有左右节点
  this.candidate.push(child);
  return ret;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
