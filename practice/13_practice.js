//3. Personal Library (Book Collection)
//Scenario: You’re building a book cataloging app for a friend who loves to read. They want to:

//Add new books they’re reading with details like title, author, genre, and whether they’ve read it or not.
//See a list of all books with options to filter by genre or unread status.
//Update book details if they finish reading or get more information about the book.
//Delete books they no longer want in the collection.
//Features to implement:

//Create: Add a book with details like title, author, genre, and status (read/unread).
//Read: List all books, with options to filter by genre or status.
//Update: Change the reading status (e.g., from "unread" to "read") or update other details.
//Delete: Remove a book from the collection
class book {
  constructor(title, author, genre, readStatus) {
    this.title = title
    this.author = author
    this.genre = genre
    this.readStatus = readStatus
  }


}
class bookList {
  constructor() {
    this.books = []
  }
  addBooks(title, author, genre, readStatus) {
    const newBooks = new book(title, author, genre, readStatus)
    this.books.push(newBooks);
    console.log(`Added books: ${title}, author: ${author} , genre: ${genre}, readStatus:${readStatus}`);
  }

  viewBooks(genreFilter = null, readStatusFilter = null) {
    const filteredBooks = this.books.filter(book => {
      const genreMatch = genreFilter ? book.genre.toLowerCase() === genreFilter.toLowerCase() : true;
      const statusMatch = readStatusFilter !== null ? book.readStatus === readStatusFilter : true;
      return genreMatch && statusMatch;
    });

    filteredBooks.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Read: ${book.readStatus ? 'Yes' : 'No'}`);
    });
  }
  updateBook(title, newStatus = null, newGenre = null) {
    const book = this.books.find(b => b.title === title);
    if (book) {
        if (newStatus !== null) book.readStatus = newStatus;
        if (newGenre) book.genre = newGenre;
        console.log(`Updated book: ${book.title}, Read: ${book.readStatus ? 'Yes' : 'No'}, Genre: ${book.genre}`);
    } else {
        console.log("Book not found.");
    }
}
deleteBook(title) {
  const index = this.books.findIndex(book => book.title === title);
  if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Deleted book: ${title}`);
  } else {
      console.log("Book not found.");
  }
}
}
const myLibrary = new bookList();
myLibrary.addBooks("1984", "George Orwell", "Dystopian", false);
myLibrary.addBooks("To Kill a Mockingbird", "Harper Lee", "Fiction", true);
console.log("All Books:");
myLibrary.viewBooks();
console.log("\nFiction Books:");
myLibrary.viewBooks("Fiction");
myLibrary.updateBook("1984", true);
myLibrary.deleteBook("To Kill a Mockingbird");
console.log("\nBooks after deletion:");
myLibrary.viewBooks();
