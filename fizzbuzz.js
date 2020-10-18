const fizzbuzz = (n) => {
  const fizz = n % 3 === 0 ? 'fizz' : ''
  const buzz = n % 5 === 0 ? 'buzz' : ''
  return `${fizz}${buzz}` || `${n}`
}

export default fizzbuzz
