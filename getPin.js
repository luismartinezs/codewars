function getPINs (observed) {
  const adjacencyList = [
    [8], //0
    [2, 4], //1
    [1, 3, 5], //2
    [2, 6], //3
    [1, 5, 7], //4
    [2, 4, 6, 8], //5
    [3, 5, 9], //6
    [4, 8], //7
    [0, 5, 7, 9], //8
    [6, 8] //9
  ]
  const res = new Set()

  // length 1
  if (observed.length === 1) {
    return [
      String(observed),
      ...adjacencyList[Number(observed)].map(String)
    ].sort()
  }

  // length 2
  for (let n of observed) {
    res.add(n)
    adjacencyList[+n].forEach(val => res.add(String(val)))
  }
  return [...res].sort()
}

const res = getPINs('91')

console.log(res)
