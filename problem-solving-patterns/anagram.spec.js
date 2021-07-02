import anagram from './anagram.js'

describe('anagram', () => {
  test('Returns true for anagrams and false otherwise', () => {
    expect(anagram('', '')).toEqual(true)
    expect(anagram('aaz', 'zza')).toEqual(false)
    expect(anagram('rat', 'car')).toEqual(false)
    expect(anagram('awesome', 'awesom')).toEqual(false)
    expect(anagram('qwerty', 'qeywrt')).toEqual(true)
    expect(anagram('texttwisttime', 'timetwisttext')).toEqual(true)
    expect(anagram('anagram', 'nagaram')).toEqual(true)
  })
})
