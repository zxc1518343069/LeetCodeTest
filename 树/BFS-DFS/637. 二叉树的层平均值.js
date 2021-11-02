function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let averageOfLevels = function(root) {
    let res = [],arr = [],tmp = [root],sum = 0,length = 1
    while(tmp.length){
        let node = tmp.shift()
        sum += node.val
        node.left && arr.push(node.left)
        node.right && arr.push(node.right)
        if (tmp.length === 0){
            res.push(sum / length)
            tmp = arr
            length = arr.length
            arr = []
            sum = 0
        }
    }
    return res
};

let averageOfLevels2 = function(root) {
    let res = [],tmp = [root],sum = 0,dep = 1,count = 0,time = 0
    while (tmp.length!== 0){
        if (time === count){
            res.push(sum / count)
            sum = 0;count = 0;
        }
        let node = tmp.shift()
        if (node) {
            sum += node.value
            dep ++
        }
        if (node.left) {
            tmp.push(node.left)
            count ++
        }
        if (node.right) {
            tmp.push(node.right)
            count ++
        }
    }





    return res
};
