const helloTest = require('./../helloTest.js')

test('should return "Hello"', () => {
  const result = helloTest()
  expect(result).toBe('Hello')
})
