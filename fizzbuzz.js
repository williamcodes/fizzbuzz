class TicTacToe {
  constructor() {
    this._board = [
      ['','',''],
      ['','',''],
      ['','',''],
    ]
    this._activeSymbol = 'x'
  }

  board() {
    return this._board
  }

  switchSymbol() {
    if (this._activeSymbol === 'x') {
      this._activeSymbol = 'o'
      return 'x'
    } else {
      this._activeSymbol = 'x'
      return 'o'
    }
  }

  move(x,y) {
    this._board[x][y] = this.switchSymbol()
  }
}

module.exports = TicTacToe
