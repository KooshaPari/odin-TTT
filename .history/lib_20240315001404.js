let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let status = document.getElementById('status')
let gameS = false
function playTTT(square) {
  square.textContent = 'X'
  board[square.id] = 'X'
  comPlay()
  console.log(board)
  let res = checkWin()
  if (res != false) {
    gameS = true
    console.log('WIN?', res)
    if (res == 'O') {
      status.textContent = 'Computer wins'
    } else {
      status.textContent = 'You win'
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[i] == 0) {
      return
    }
  }
  status.textContent = 'Draw'
}
const squares = document.querySelectorAll('.square')
squares.forEach((square) =>
  square.addEventListener('click', () => {
    if (board[square.id] == '0' && !gameS) {
      playTTT(square)
    }
  })
)
function checkWin() {
  if (board[0] != '0' && board[0] === board[1] && board[0] === board[2]) {
    console.log(board[0] + ' wins')
    return board[0]
  }
  if (board[3] != '0' && board[3] === board[4] && board[3] === board[5]) {
    console.log(board[3] + ' wins')
    return board[3]
  }
  if (board[6] != '0' && board[6] === board[7] && board[6] === board[8]) {
    console.log(board[6] + ' wins')
    return board[6]
  }
  if (board[0] != '0' && board[0] === board[3] && board[0] === board[6]) {
    console.log(board[0] + ' wins')
    return board[0]
  }
  if (board[1] != '0' && board[1] === board[4] && board[1] === board[7]) {
    console.log(board[1] + ' wins')
    return board[1]
  }
  if (board[2] != '0' && board[2] === board[5] && board[2] === board[8]) {
    console.log(board[2] + ' wins')
    return board[2]
  }
  if (board[0] != '0' && board[0] === board[4] && board[0] === board[8]) {
    console.log(board[0] + ' wins')
    return board[0]
  }
  if (board[2] != '0' && board[2] === board[4] && board[2] === board[6]) {
    console.log(board[2] + ' wins')
    return board[2]
  }
  return false
}
function comPlay() {
  let com = 0
  let full = true;
  for (int i = 0; i<9; i++){
    if(board[i] == 0){
      full = false;
      break;
    }
  }
  while (board[com] != 0) {
    com = Math.floor(Math.random() * 9)
  }
  //console.log(com)
  board[com] = 'O'
  let comSq = document.getElementById(com)
  //console.log(comSq)
  comSq.textContent = 'O'
  comSq.classList.add('animationClass')
}

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  resetBtn()
})
function resetBtn() {
  for (let i = 0; i < 9; i++) {
    board[i] = 0
  }
  gameS = false
  squares.forEach((square) => {
    square.textContent = ''
    square.classList.remove('animationClass')
  })
  status.textContent = "X's turn"
}
