import getOdds from './helperMethod.js'

describe('getOdds', () => {
  test('Return odd values of an array', () => {
    expect(getOdds([1, 2, 3])).toEqual([1, 3])
    expect(getOdds([4, 2, 2])).toEqual([])
    expect(getOdds([1, 1, 3])).toEqual([1, 1, 3])
  })
})
