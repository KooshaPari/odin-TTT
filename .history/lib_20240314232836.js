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
function checkWin() {
  if (board[0] == board[1] == board[2]) {
    console.log(board[0]' win') 
  }
}

// 8 possible wins

// i1
  // i+1->i+2 || i+4->i+8 || i+3->i+6
// i6
  // i-1->i-2 || i-3->i+3
// i7
  // i+1->i+2 || i-2->i->4
// i8
  // i-3 -> i-6
//
  