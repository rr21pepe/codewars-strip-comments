import { solution } from './strip-comments'

describe('Testing solution function', () => {
  describe('Incorrect arguments', () => {
    describe('input argument', () => {
      it('Should return null when input is not a string (Number)', () => {
        expect(solution(3, ['#', '!'])).toBeNull()
      })
      it('Should return null when input is not a string (Array)', () => {
        expect(solution(['Apple # banana'], ['#', '!'])).toBeNull()
      })
    })
    describe('markers argument', () => {
      it('Should return null when the markers is not an array (Number)', () => {
        expect(solution('Apple # banana', 4)).toBeNull()
      })
      it('Should return null when the markers is not an array (String)', () => {
        expect(solution('Apple # banana', '#!')).toBeNull()
      })
    })
  })
  describe('Functionality', () => {
    it('Should return the correct string (1)', () => {
      const input = "apples, plums % and bananas\npears\noranges !applesauce"
      const markers = ["%", "!"]
      const expected = "apples, plums\npears\noranges"
      
      expect(solution(input, markers)).toBe(expected)
    })
    it('Should return the correct string (2)', () => {
      const input = "Q @b\nu\ne -e f g"
      const markers = ["@", "-"]
      const expected = "Q\nu\ne"

      expect(solution(input, markers)).toBe(expected)
    })
    it('Should return the correct string (3)', () => {
      const input = "corne keyboard # split keyboard\nplanck keyboard # ortholinear keyboard\nlily58 ! another split keyboard"
      const markers = ["#", "!"]
      const expected = "corne keyboard\nplanck keyboard\nlily58"

      expect(solution(input, markers)).toBe(expected)
    })
    it('Should return the correct string (4)', () => {
      const input = "apple $ and oranges\nwatermelon & and apples\noranges ! and grapes\npears $ and bananas"
      const markers = ["$", "&", "!"]
      const expected = "apple\nwatermelon\noranges\npears"

      expect(solution(input, markers)).toBe(expected)
    })
    it('Should return the correct string (5)', () => {
      const input = "qwerty # most common\ndvorak ! not so common\nprogrammers dvorak # adapted to programmers"
      const markers = ["#", "!"]
      const expected = "qwerty\ndvorak\nprogrammers dvorak"

      expect(solution(input, markers)).toBe(expected)
    })
  })
})
