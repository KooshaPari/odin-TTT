const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}
const page = document.getElementById('body')
const bookList = document.getElementById('book-list')
const bookForm = document.getElementById('bookForm')
bookForm.addEventListener('submit', genBook)
/* CREATE PREMADE CARD GENERIC THAT IS CLONE & MODIFIED WITH GIVEN INFORMATION */
function render() {
  bookList.innerHTML = ''
  for (let book of myLibrary) {
    bookList.appendChild(createBookCard(book))
  }
}
const addBook = document.getElementById('add-book')
addBook.addEventListener('click', () => bookAddHandler())

function bookAddHandler() {
  bookForm.classList.toggle('isVisible')
  console.log('TOGGLE: ', bookForm.classList)
}
function genBook(event) {
  event.preventDefault() // Prevent the default form submission behavior

  // Access form data
  const formData = new FormData(event.target)
  let curBook = new Book(
    formData.get('bookName'),
    formData.get('bookAuthor'),
    formData.get('bookPages'),
    formData.get('bookRead')
  )
  console.log('LOADING')
  bookAddHandler()
  addBookToLibrary(curBook)
  render()
}
function createBookCard(book) {
  const card = document.createElement('li')
  card.classList.add('cardItem')
  card.innerHTML = `<div class="cardCont" >
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read}</p>
    </div>`
  return card
}
render()
