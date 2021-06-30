// https://www.codewars.com/kata/59568be9cc15b57637000054/train/javascript
function elderAge (m, n, l, t) {
  // m cols and n rows
  // donated time  = row ^ col
  // l transmission loss and min transmission
  // time is bound between 0 and t-1
  const totalTime = doubleLoop(m, n, (x, y) =>
    calcWorshipperTransmittedTime(x, y)
  )

  const clampedTime = totalTime % t

  return clampedTime

  function calcWorshipperTransmittedTime (x, y) {
    const transmittedTime = (x ^ y) - l
    return transmittedTime < 0 ? 0 : transmittedTime
  }
}

// O(n2) :(
function doubleLoop (nCol, nRow, callback) {
  let res = 0
  for (let x = 0; x < nCol; x++) {
    for (let y = 0; y < nRow; y++) {
      res += callback(x, y)
    }
  }
  return res
}

const res = elderAge(8, 5, 1, 100)
console.log(res)
