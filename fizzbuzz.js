class TicTacToe {
  constructor() {
    this._board = [
      [' ',' ',' '],
      [' ',' ',' '],
      [' ',' ',' '],
    ]
    this._activeSymbol = 'x'
  }

  board() {
    console.log(this._board.map(row => row.join('|')).join("\n"))
    return this._board
  }

  move(x,y) {
    this._board[x][y] = this._activeSymbol
    if (this._activeSymbol === 'x') {
      this._activeSymbol = 'o'}
  }
}

module.exports = TicTacToe
