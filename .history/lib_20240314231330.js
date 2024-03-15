let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
function playTTT(plays, square) {
  square.textContent = 'X'
}
const squares = document.querySelectorAll('.square')
squares.forEach((square) =>
  square.addEventListener('click', () => {
    playTTT(board, square)
  })
)
