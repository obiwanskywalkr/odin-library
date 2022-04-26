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

async function displayLibrary() {
    await addBookToLibrary();

    libraryContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', `${i}`)
        libraryContainer.appendChild(card);

        let titleContainer = document.createElement('div');
        titleContainer.classList.add('cardText');
        titleContainer.textContent = `"${myLibrary[i].title}"`;
        card.appendChild(titleContainer);

        let authorContainer = document.createElement('div');
        authorContainer.classList.add('cardText');
        authorContainer.textContent = myLibrary[i].author;
        card.appendChild(authorContainer);

        let pagesContainer = document.createElement('div');
        pagesContainer.classList.add('cardText');
        pagesContainer.textContent = `${myLibrary[i].pages} pages`;
        card.appendChild(pagesContainer);

        let statusContainer = document.createElement('button');
        statusContainer.classList.add('statusBox');
        statusContainer.textContent = myLibrary[i].status;
        card.appendChild(statusContainer);

        let removeBookButton = document.createElement('button');
        removeBookButton.classList.add('removeBookButton');
        removeBookButton.textContent = "Remove Book";
        removeBookButton.addEventListener('click', (e) => {
            libraryContainer.removeChild(e.currentTarget.parentNode);
            let currentIndex = e.currentTarget.parentNode.getAttribute('data-index');
            myLibrary.splice(currentIndex, 1)
        });
        card.appendChild(removeBookButton);
    }
}

const addBookButton = document.getElementById('addBookButton');
const libraryContainer = document.getElementById('libraryContainer');
const formOverlay = document.getElementById('formOverlay');
const formModal = document.getElementById('formModal');
const bookForm = document.getElementById('bookForm');
const submitButton = document.getElementById('submitButton');
const removeBookButton = document.querySelector('.removeBookButton');


function closeForm() {
    formOverlay.classList.remove('displayOverlay');
    formModal.classList.remove('displayForm');
    bookForm.reset();
}

function displayForm() {
    formOverlay.classList.add('displayOverlay');
    formModal.classList.add('displayForm');
}

addBookButton.addEventListener('click', displayForm);

formOverlay.addEventListener('click', closeForm);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    displayLibrary();
    closeForm();
});