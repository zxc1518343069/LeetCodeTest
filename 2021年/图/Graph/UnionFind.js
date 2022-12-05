export default class {
  setMap = new Map();

  constructor(nodes) {
    for (let node of nodes) {
      this.setMap.set(node, [node])
    }
  }

  isSameSet(from, to) {
    let fromSet = this.setMap.get(from),
        toSet = this.setMap.get(to)
    return fromSet === toSet
  }

  union(from, to) {
    let fromSet = this.setMap.get(from),
        toSet = this.setMap.get(to)

    for (let toNode of toSet) {
      fromSet.push(toNode)
      this.setMap.set(toNode, fromSet)
    }


  }
}

