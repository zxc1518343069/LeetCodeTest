/*
* 题目描述 传入一个数字 。返回折纸后 凹凸方向
* 例如  1  凹凸
* 2 凹凹凸
* 3 凹 凹 凸 凹 凹 凸 凹
* */

// 也就是二叉树的后序遍历


let Origami = (num) => {
  let printAllFolds = (num) => {
    printProcess(1, num, true)
  }
  let printProcess = (i, num, down) => {
    if (i > num) return
    printProcess(i + 1, num, true)
    console.log(down ? '凹' : '凸')
    printProcess(i + 1, num, false)
  }
  printAllFolds(num)
  return '打印完毕'
}
console.log(Origami(2))
