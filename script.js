const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary());

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
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
}

// psuedo code for addBookToLibrary =>
// create new Book popup form
//     create textbox for title
//     create textboc for author
//     create textbox for pages
//     create checkbox for status
//     create submit button
// when submit is clicked
//     get title
//     get author
//     get pages
//     get status
//     call Book constructor
// create card with new Book
//     set title
//     set author
//     set pages
//     set status button
//     create delete button