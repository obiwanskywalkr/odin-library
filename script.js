let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.index = myLibrary.length;
    }
    displayInfo() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`);
    }
    toggleReadStatus() {
        return (this.status ? (this.status = false) : (this.status = true));
    }
}

function addBookToLibrary() {
    let title = bookForm.title.value;
    let author = bookForm.author.value;
    let pages = bookForm.pages.value;
    let status = bookForm.status.checked;
    
    myLibrary.push(new Book(title, author, pages, status));
}

const libraryContainer = document.getElementById('libraryContainer');

function displayLibrary() {
    libraryContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
}

function createBookCard(book) {
    const card = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const statusBtn = document.createElement('button');
    const removeBookBtn = document.createElement('button');

    card.classList.add('card');

    titleDiv.classList.add('cardText');
    titleDiv.textContent = `"${book.title}"`;
    card.appendChild(titleDiv);

    authorDiv.classList.add('cardText');
    authorDiv.textContent = book.author;
    card.appendChild(authorDiv);

    pagesDiv.classList.add('cardText');
    pagesDiv.textContent = `${book.pages} pages`;
    card.appendChild(pagesDiv);

    statusBtn.classList.add('statusBtn');
    if (book.status == false) {
        statusBtn.classList.add('unread');
        statusBtn.textContent = 'Unread';
    } else if (book.status == true) {
        statusBtn.classList.add('read');
        statusBtn.textContent = 'Read';
    }
    card.appendChild(statusBtn);
   
    removeBookBtn.classList.add('removeBookBtn');
    removeBookBtn.textContent = 'Remove Book'
    card.appendChild(removeBookBtn);

    statusBtn.addEventListener('click', () => {
        book.toggleReadStatus();
        displayLibrary();
    });  

    removeBookBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displayLibrary();
    }); 

    libraryContainer.appendChild(card);
}

const addBookBtn = document.getElementById('addBookBtn');
const formOverlay = document.getElementById('formOverlay');
const formModal = document.getElementById('formModal');
const bookForm = document.getElementById('bookForm');
const submitBtn = document.getElementById('submitBtn');

function closeForm() {
    formOverlay.classList.remove('displayOverlay');
    formModal.classList.remove('displayForm');
    bookForm.reset();
}

function displayForm() {
    bookForm.title.focus();
    formOverlay.classList.add('displayOverlay');
    formModal.classList.add('displayForm');
}

addBookBtn.addEventListener('click', displayForm);

formOverlay.addEventListener('click', closeForm);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayLibrary();
    closeForm();
});