let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let status = document.getElementById('status')
function playTTT(square) {
  square.textContent = 'X'
  board[square.id] = 'X'
  comPlay()

  let res = checkWin() != false
  if (res != false) {
    console.log(res)
    if (res == 'O') {
      status.textContent = 'Computer wins'
    } else {
      status.textContent = 'You win'
    }
  }
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
    return board[0]
  }
  if (board[3] != '0' && board[3] === board[4] && board[4] === board[5]) {
    console.log(board[3] + ' wins')
    return board[3]
  }
  if (board[6] != '0' && board[6] === board[7] && board[7] === board[8]) {
    console.log(board[6] + ' wins')
    return board[6]
  }
  if (board[0] != '0' && board[0] === board[3] && board[3] === board[6]) {
    console.log(board[0] + ' wins')
    return board[0]
  }
  if (board[1] != '0' && board[1] === board[4] && board[4] === board[7]) {
    console.log(board[1] + ' wins')
    return board[1]
  }
  if (board[2] != '0' && board[2] === board[5] && board[5] === board[8]) {
    console.log(board[2] + ' wins')
    return board[2]
  }
  if (board[0] != '0' && board[0] === board[4] && board[4] === board[8]) {
    console.log(board[0] + ' wins')
    return board[0]
  }
  if (board[2] != '0' && board[2] === board[4] && board[4] === board[6]) {
    console.log(board[2] + ' wins')
    return board[2]
  }
  return false
}
function comPlay() {
  let com = 0
  while (board[com] != 0) {
    com = Math.floor(Math.random() * 9)
  }
  console.log(com)
  board[com] = 'O'
  let comSq = document.getElementById(com)
  console.log(comSq)
  comSq.textContent = 'O'
  comSq.classList.add('animationClass')
}

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  reset()
})
function reset() {
  for (int i = 0; i<9; i++) {
    board[i] = 0
  }
  squares.forEach((square) => {
    square.textContent = ''
    square.classList.remove('animationClass')
  })
  status.textContent = 'X\'s turn'
}