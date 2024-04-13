// Define the Book object
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

// Define the Library object
class Library {
    constructor() {
        this.books = [];
    }

    // Function to add books to the library
    addBook(title, author) {
        const newBook = new Book(title, author);
        this.books.push(newBook);
        console.log(`Book "${title}" by ${author} has been added to the library.`);
    }

    // Function to display the list of available books
    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`${book.title} by ${book.author}`);
            }
        });
    }

    // Function to borrow a book
    borrowBook(title) {
        const bookIndex = this.books.findIndex(book => book.title === title && book.available);
        if (bookIndex !== -1) {
            this.books[bookIndex].available = false;
            console.log(`You have borrowed "${title}".`);
        } else {
            console.log(`Sorry, "${title}" is not available for borrowing.`);
        }
    }

    // Function to return a book
    returnBook(title) {
        const bookIndex = this.books.findIndex(book => book.title === title && !book.available);
        if (bookIndex !== -1) {
            this.books[bookIndex].available = true;
            console.log(`Thank you for returning "${title}".`);
        } else {
            console.log(`"${title}" is not a valid book to return.`);
        }
    }
}

// Example usage:
const library = new Library();

// Adding books
library.addBook("Book1", "Author1");
library.addBook("Book2", "Author2");
library.addBook("Book3", "Author3");

// Display available books
library.displayAvailableBooks();

// Borrowing a book
library.borrowBook("Book1");
library.borrowBook("Book2");

// Display available books after borrowing
library.displayAvailableBooks();

// Returning a book
library.returnBook("Book2");

// Display available books after returning
library.displayAvailableBooks();
