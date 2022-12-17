class Heap {
    // 俗称 优先队列
  heap = [];
  // symbol = '>'
  constructor() {
    this.heap = [];
  }

  // 一个个push建堆
  heapInsert(num) {
    let addIndex = this.heap.push(num) - 1;

    while (this.heap[addIndex] > this.heap[Math.trunc((addIndex - 1) / 2)]) {
      const fatherRootIndex = Math.trunc((addIndex - 1) / 2);
      [this.heap[addIndex], this.heap[fatherRootIndex]] = [
        this.heap[fatherRootIndex],
        this.heap[addIndex],
      ];
      addIndex = fatherRootIndex;
    }
  }

  // 调整 维持大根堆的类型
  heapify(nums = this.heap, index = 0, heapSize = nums.length) {
    let left = 2 * index + 1; // 得到左子树 第一个节点
    while (left < heapSize) {
      // 证明存在左孩子且在 堆区间内

      // 找到左右子树第一个节点 哪一个节点更大
      let largest =
        left + 1 < heapSize && nums[left + 1] > nums[left] ? left + 1 : left;

      // 比较父节点和  较大子节点谁大
      largest = nums[largest] > nums[index] ? largest : index;

      // 最大的是 父节点 就不需要再进行调整了。
      if (largest === index) {
        break;
      }
      // 交换 节点值
      [nums[index], nums[largest]] = [nums[largest], nums[index]];

      // 继续开始下一阶段 调整
      index = largest;
      left = 2 * index + 1;
    }
    this.heap = nums;
    return nums;
  }

  sort(nums) {
    if (nums === null || nums.length < 2) return nums;

    // 见 大根堆
    for (const num of nums) {
      this.heapInsert(num);
    }

    // 给定nums 这种方式更快 原因 先进行子树的heapify 保证子树都是 大根堆后
    // 父树只需要执行一次

    // for (let i = nums.length - 1; i >= 0; i--) {
    //    this.heapify(nums, i, nums.length);
    // }

    let len = this.heap.length;
    while (len > 0) {
      len--;
      [this.heap[0], this.heap[len]] = [this.heap[len], this.heap[0]];
      this.heapify(this.heap, 0, len);
    }
    return this.heap;
  }

  get getMax() {
    return this.heap.length ? this.heap[0] : undefined;
  }

  get getHeap() {
    return this.heap;
  }

  get getAndDeleteMax() {
    const max = this.getMax();
    if (max === undefined) {
      return max;
    }
    this.heap.shift();
    const last = this.heap.pop();
    this.heap.unshift(last);
    this.heapify(0);
  }
}

console.log(new Heap().sort([6, 4, 3, 5, 1, 2]));
console.log(new Heap().sort([3, 5, 4, 2, 1, 7, 8, 6, 3]));
