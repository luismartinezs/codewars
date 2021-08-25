import simpleSearchArray from './simpleSearchArray.js'

describe('simpleSearchArray', () => {
  test('Return index of array, or -1 if not found', () => {
    expect(simpleSearchArray([1, 2, 3], 1)).toEqual(0)
    expect(simpleSearchArray([1, 2, 3], 2)).toEqual(1)
    expect(simpleSearchArray([1, 2, 3], 3)).toEqual(2)
    expect(simpleSearchArray([1, 2, 3, 10], 34)).toEqual(-1)
    expect(
      simpleSearchArray(
        [5, 6, 8, 12, 16, 26, 29, 34, 44, 46, 58, 60, 61, 64, 85, 86, 93, 99],
        34
      )
    ).toEqual(7)
    expect(
      simpleSearchArray(
        [5, 6, 8, 12, 16, 26, 29, 34, 44, 46, 58, 60, 61, 64, 85, 86, 93, 99],
        100
      )
    ).toEqual(-1)
  })
})
