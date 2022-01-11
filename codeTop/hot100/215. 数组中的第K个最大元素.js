/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// api 方法
let findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a).slice(0, k);
  return nums[k - 1]
};


// 堆
// 整个流程就是上浮下沉

// 第一步构建初始堆：是自底向上构建，从最后一个非叶子节点开始。
//
// 第二步就是下沉操作让尾部元素与堆顶元素交换，最大值被放在数组末尾，并且缩小数组的length，不参与后面大顶堆的调整
//
// 第三步就是调整：是从上到下，从左到右,因为堆顶元素下沉到末尾了，要重新调整这颗大顶堆

var findKthLargest = function(nums, k) {
      let heapSize = nums.length
      buildMaxHeap(nums, heapSize) // 构建好了一个大顶堆

      // 进行下沉 大顶堆是最大元素下沉到末尾
      for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i)
        --heapSize // 下沉后的元素不参与到大顶堆的调整
        // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
      }
      return nums[0]

      // 自下而上构建一颗大顶堆
      function buildMaxHeap(nums, heapSize) {
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
          maxHeapify(nums, i, heapSize)
        }
      }

      // 从左向右，自上而下的调整节点
      function maxHeapify(nums, i, heapSize) {
        let l = i * 2 + 1
        let r = i * 2 + 2
        let largest = i
        if (l < heapSize && nums[l] > nums[largest]) {
          largest = l
        }
        if (r < heapSize && nums[r] > nums[largest]) {
          largest = r
        }
        if (largest !== i) {
          swap(nums, i, largest) // 进行节点调整
          // 继续调整下面的非叶子节点
          maxHeapify(nums, largest, heapSize)
        }
      }

      function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    };
