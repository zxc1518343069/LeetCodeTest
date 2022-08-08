// https://leetcode.cn/problems/OrIXps/
/**
 * @param {number} capacity
 */
// 问题
// 1.get 有就返回  没有就返回 -1
// 2. put   无就添加。 上限就删除最远的

var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let cache = this.cache;
  if (cache.has(key)) {
    let val = cache.get(key);
    cache.delete(key);
    cache.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let cache = this.cache;
  if (cache.has(key)) {
    cache.delete(key);
  } else {
    if (cache.size === this.cap) {
      // Map 中的键值是有序的 返回一个可迭代对象
      cache.delete(cache.keys().next().value);
    }
  }
  cache.set(key, value);
};
