let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    info() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`);
    }
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').checked;

    let currentBook = new Book(title, author, pages, status);
   
    myLibrary.push(currentBook);
}

function displayBooks() {

}

const addBook = document.getElementById('addBook');
const formModal = document.getElementById('formModal')
const overlay = document.getElementById('overlay')
addBook.addEventListener('click', () => {
    overlay.classList.add('display');
    formModal.classList.add('active');
});
overlay.addEventListener('click', () => {
    overlay.classList.remove('display');
    formModal.classList.remove('active');
});
const submit = document.getElementById('submit');
submit.addEventListener('click', addBookToLibrary());

// psuedo code
// when addBook is clicked =>
//      clear values from form
//      display new book modal
// when submit is clicked - addBookToLibrary()
//      get data from form
//      call new Book constructor
//      store new book in myLibrary[]
//      clear data from form
//      close modal
// create card with new book - displayBooks()
