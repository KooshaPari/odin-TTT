let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let turn = 1
function playTTT(plays, square) {}
const squares = document.querySelectorAll('.square')
squares.forEach((square) =>
  square.addEventListener('click', () => {
    playTTT(board, square)
  })
)
