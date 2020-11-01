const TicTacToe = require('./fizzbuzz')

test('has a board', () => {
  const tictactoe = new TicTacToe()
  expect(tictactoe.board()).toEqual([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
})

test('allows x to move', () => {
  const tictactoe = new TicTacToe()
  tictactoe.move(0,0)
  expect(tictactoe.board()).toEqual([
    ['x','',''],
    ['','',''],
    ['','',''],
  ])
})

test('allows o to move', () => {
  const tictactoe = new TicTacToe()
  tictactoe.move(0,0)
  tictactoe.move(1,1)
  expect(tictactoe.board()).toEqual([
    ['x','',''],
    ['','o',''],
    ['','',''],
  ])
})

test('allows x to move again', () => {
  const tictactoe = new TicTacToe()
  tictactoe.move(0,0)
  tictactoe.move(1,1)
  tictactoe.move(0,2)
  expect(tictactoe.board()).toEqual([
    ['x','','x'],
    ['','o',''],
    ['','',''],
  ])
})
