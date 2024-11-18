//6. Nested Objects and Accessing Data
// Create an object library that has properties name (string), location (string), and books (array of book objects with title, author, and year).
// Write a function to display all book titles that were published before the year 2000.

const library = {
  name: "books",
  location: "rawalpindi",
  book: [
    {
      title: "english",
      author: "urooj",
      year: 2000
    },
    {
      title: "urdu",
      author: "ali",
      year: 1999
    },
    {
      title: "physics",
      author: "fatima",
      year: 2008
    }
  ]
}
const bookTitleShow=(library)=>{
  const librarys= library.book.filter((books) => books.year<2000);
  const titleLibrary= librarys.map((titles)=>titles.title)
  titleLibrary.forEach(booktitle => {console.log(booktitle)

  });
}
bookTitleShow(library);
