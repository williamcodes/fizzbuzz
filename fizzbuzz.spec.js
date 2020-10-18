import fizzbuzz from './fizzbuzz'

describe("default behavior", () => {
  it('returns 1 for 1', () => {
    expect(fizzbuzz(1)).toEqual('1')
  })

  it('returns 2 for 2', () => {
    expect(fizzbuzz(2)).toEqual('2')
  })
})

describe("numbers divisible by 3", () => {
  it('returns fizz for 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz')
  })

  it('returns fizz for 6', () => {
    expect(fizzbuzz(6)).toEqual('fizz')
  })
})

describe('numbers divisible by 5', () => {
  it('returns buzz for 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz')
  })

  it('returns buzz for 10', () => {
    expect(fizzbuzz(10)).toEqual('buzz')
  })
})

describe('numbers divisible by both 3 and 5', () => {
  expect(fizzbuzz(15)).toEqual('fizzbuzz')
})
