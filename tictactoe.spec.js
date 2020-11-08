const TicTacToe = require('./tictactoe')

test('game board starts as an empty grid', () => {
  const game = new TicTacToe()

  expect(game.board()).toEqual([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ])
})
