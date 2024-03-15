let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
function playTTT(square) {
  square.textContent = 'X'
  board[square.id] = 'X'
  let com = Math.floor(Math.random() * 9)
  console.log(com)
  board[com] = 'O'
  let comSq = document.getElementById(com)
  console.log(comSq)
  comSq.textContent = 'O'
  checkWin()
}
const squares = document.querySelectorAll('.square')
squares.forEach((square) =>
  square.addEventListener('click', () => {
    playTTT(square)
  })
)
function checkWin() {
  if (board[0] != '0' && board[0] === board[1] && board[1] === board[2]) {
    console.log(board[0] + ' wins')
  }
  if (board[3] != '0' && board[3] === board[4] && board[4] === board[5]) {
    console.log(board[3] + ' wins')
  }
  if (board[6] != '0' && board[6] === board[7] && board[7] === board[8]) {
    console.log(board[6] + ' wins')
  }
  if (board[0] != '0' && board[0] === board[3] && board[3] === board[6]) {
    console.log(board[0] + ' wins')
  }
  if (board[1] != '0' && board[1] === board[4] && board[4] === board[7]) {
    console.log(board[1] + ' wins')
  }
  if (board[2] != '0' && board[2] === board[5] && board[5] === board[8]) {
    console.log(board[2] + ' wins')
  }
  if (board[0] != '0' && board[0] === board[4] && board[4] === board[8]) {
    console.log(board[0] + ' wins')
  }
  if (board[2] != '0' && board[2] === board[4] && board[4] === board[6]) {
    console.log(board[2] + ' wins')
  }
}
