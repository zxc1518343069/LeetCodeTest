// https://leetcode.cn/problems/FortPu/
var RandomizedSet = function () {
  this.nums = [];
  this.indices = new Map();
};

// 插入的时候判断下 是否有这个值的存在
// 设置的是 值和所在位置。
RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }
  this.indices.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

// 因为插入的时候设置了 插入值在数组中的位置
// 这点理解不了啊 太困了 要睡觉了
RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }
  // 得到值的所在位置。
  let location = this.indices.get(val);
  //
  this.indices.set(this.nums[this.nums.length - 1], location);
  this.indices.delete(val);
  // 数组删除对应，这里是把数据最末位的元素覆盖要删除的元素，再把数组长度减1，通过这种技巧来达到时间复杂度为O(1)
  this.nums[location] = this.nums[this.nums.length - 1];
  this.nums.length--;
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};
