// https://leetcode.cn/problems/FortPu/

// 整体 思路很简单，就是使用 数组加map 组合。 注意下下标即可
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.nums = [];
  this.indices = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.indices.has(val)) {
    return false;
  }
  let index = this.nums.length;
  this.nums.push(val);
  this.indices.set(val, index);
  return true;
};
/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.indices.has(val)) {
    return false;
  }
  let id = this.indices.get(val);
  this.nums[id] = this.nums[this.nums.length - 1];
  this.indices.set(this.nums[id], id);
  this.nums.pop();
  this.indices.delete(val);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */







