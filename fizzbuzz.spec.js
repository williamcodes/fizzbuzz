const foobar = require('./fizzbuzz')

test('returns 1 for 1', () => {
  expect(foobar(1)).toEqual(1)
})
