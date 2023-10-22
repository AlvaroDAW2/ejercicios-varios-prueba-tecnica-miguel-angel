import { removePatterns } from './ej3'

it('should return a new string with the patterns removed', () => {
  const messageInput =
    'Hello, my name is Alvaro and I am coding right now in my laptop'
  const patterns = ['my', ',']
  const result = removePatterns(messageInput, patterns)

  expect(result).toBe(
    'Hello name is Alvaro and I am coding right now in laptop'
  )
})
