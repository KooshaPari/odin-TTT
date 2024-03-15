let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
function playTTT(square) {
  square.textContent = 'X'
  board[square.id] = 'X'
  board[Math.random() * 9] = 'O'
  if (board[0] != '0') {
    checkWin()
  }
  if (board[3] != '0') {
    checkWin()
  }
  if (board[9] != '0') {
    checkWin()
  }
}
const squares = document.querySelectorAll('.square')
squares.forEach((square) =>
  square.addEventListener('click', () => {
    playTTT(square)
  })
)
