/*
堆实际上 是一个 完全二叉树（满二叉树或者从左往右依次变满的二叉树）
左节点位置   2*i+1
右节点          2*i+2
父	    （i-1）/2


大根堆
完全二叉树  最大的数是父节点
小根堆
小
*/
let swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

let heap = (nums) => {
  // 两种都是建堆的方法   一种是顺序给数  一种是 一次把树给完
  // 数下沉的状况
  let heapInsert = (index) => {
    // 判断是否比它父节点大
    while (nums[index] > nums[Math.trunc((index - 1) / 2)]) {
      // 交换 他们两个的值
      swap(nums, index, Math.trunc((index - 1) / 2));
      index = Math.trunc((index - 1) / 2);
    }
  };

  // 是否能向下移动
  let heapify = (index, heapSize) => {
    let leftIndex = index * 2 + 1; // 左孩子下表的数组位置
    while (leftIndex < heapSize) {
      // 左孩子的数组下标在 堆的长度内
      // 判断左右孩子 谁最大   获得最大孩子的下表
      let largest =
        leftIndex + 1 < heapSize && nums[leftIndex + 1] > nums[leftIndex]
          ? leftIndex + 1
          : leftIndex;

      // 较大孩子 和父节点比较  看看谁大
      largest = nums[largest] > nums[index] ? largest : index;

      // 证明父节点最大 不需要交换
      if (largest === index)
        // 如果
        break;
      [nums[largest], nums[index]] = [nums[index], nums[largest]];

      index = largest;
      leftIndex = index * 2 + 1;
    }
  };

  // 堆排序
  let heapSort = (nums) => {
    if (nums === null || nums.length < 2) return nums;

    // 建堆的过程
    for (let i = 0; i < nums.length; i++) {
      heapInsert(i);
    }
    console.log(nums);
    // 如果nums 给定了 这种更快
    // for (let i = nums.length -1; i >0 ; i--) {
    //   heapify(i,nums.length)
    // }
    let heapSize = nums.length;

    while (heapSize > 0) {
      swap(nums, 0, --heapSize);

      heapify(0, heapSize);
    }
    return nums;
  };

  heapSort(nums);
  return nums;
};
// console.log(heap([6, 4, 3, 5, 1, 2]));
console.log(heap([3, 5, 4, 2, 1, 7, 8, 6, 3]));
