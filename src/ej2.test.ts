import { counterElementsGreather } from './ej2'

// The function returns the number of elements in array1 that are greater than the corresponding element in array2.
it('should return the correct count of elements in array1 that are greater than the corresponding element in array2', () => {
  const array1 = [1, 2, 3, 4]
  const array2 = [0, 1, 2, 3]
  const result = counterElementsGreather(array1, array2)
  expect(result).toBe(4)
})
