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
const page = Document.querySelector('#body')
const bookList = Document.querySelector('#book-list')
const bookForm = Document.querySelector('#bookForm')

/* CREATE PREMADE CARD GENERIC THAT IS CLONE & MODIFIED WITH GIVEN INFORMATION */
function render() {
  for (let book of myLibrary) {
    bookList.appendChild(createBookCard(book))
  }
}
const addBook = document.querySelector('#add-book')
addBook.addEventListener('click', () => bookAddHandler())

function bookAddHandler() {
  bookForm.classList.toggle('isVisible')
}
