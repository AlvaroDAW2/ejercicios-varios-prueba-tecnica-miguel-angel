import { differenceArray } from './ej1'

// The function correctly calculates the difference between the given number and each element in the array.
it('should correctly calculate the difference between the given number and each element in the array', () => {
  const array = [1, 2, 3]
  const num = 5
  const expected = [4, 3, 2]

  const result = differenceArray(array, num)

  expect(result).toEqual(expected)
})
