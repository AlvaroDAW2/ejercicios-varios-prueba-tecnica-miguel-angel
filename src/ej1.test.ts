import { differenceArray } from './ej1'

// The function correctly calculates the difference between the given number and each element in the array.
it('should correctly calculate the difference between the given number and each element in the array', () => {
  const array = [1, 6, 10]
  const num = 5
  const expected = [4, 1, 5]

  const result = differenceArray(array, num)

  expect(result).toEqual(expected)
})
