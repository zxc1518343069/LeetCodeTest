// https://leetcode.cn/problems/H8086Q/
// 也是个简单题目
// 思路 建立一个数组
// 每当ping 一个数的时候， 就把他 跟 t-3000 对比，小于 就从队列里删除
// 返回发送请求数  也就是 队列数量
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
