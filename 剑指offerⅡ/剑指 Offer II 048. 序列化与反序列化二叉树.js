// https://leetcode.cn/problems/h54YBf/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 本质上要考的就是 建树和 遍历树
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return rserialize(root, "");
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const dataArray = data.split(",");
  return rdeserialize(dataArray);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const rserialize = (root, str) => {
  if (root === null) {
    str += "None,";
  } else {
    str += root.val + "" + ",";
    str = rserialize(root.left, str);
    str = rserialize(root.right, str);
  }
  return str;
};

const rdeserialize = (dataList) => {
  if (dataList[0] === "None") {
    dataList.shift();
    return null;
  }

  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
};
