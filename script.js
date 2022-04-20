let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    displayInfo() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`);
    }
    changeReadStatus() {
        
    }
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').checked;

    myLibrary.push(new Book(title, author, pages, status));
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}

const addBookButton = document.getElementById('addBookButton');
const libraryContainer = document.getElementById('libraryContainer');
const formOverlay = document.getElementById('formOverlay');
const formModal = document.getElementById('formModal');
const newBookForm = document.getElementById('newBookForm');
const submitButton = document.getElementById('submitButton');

function closeForm() {
    formOverlay.classList.remove('displayOverlay');
    formModal.classList.remove('displayForm');
}

function displayForm() {
    formOverlay.classList.add('displayOverlay');
    formModal.classList.add('displayForm');
}

addBookButton.addEventListener('click', () => {
    displayForm();
});

formOverlay.addEventListener('click', () => {
    closeForm()
    newBookForm.reset();
});

submitButton.addEventListener('click',(e) => {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
    newBookForm.reset();
    displayLibrary();
});

// psuedo code
// when addBook is clicked =>
//      display new book modal
// when submit is clicked - addBookToLibrary()
//      get data from form
//      call new Book constructor
//      store new book in myLibrary[]
//      clear data from form
//      close modal
// create card with with books in myLibrary - displayLibrary()
//      for each book =>
//      create book card
//      add book attributes to card
//      add classes for styling
//      append DOM
