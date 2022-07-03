import "./App.css";
import {useEffect, useState} from "react";
import Shelves from './Shelves';
import * as BooksAPI from "./BooksAPI";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([])

  const handleShelfChange = (book, shelf) => {
    const newState = books.map(obj => {
      if (obj.id === book.id) {
        return {...obj, shelf: shelf};
      }

      return obj;
    });

    setBooks(newState);
  }

  useEffect(() => {
    const getBooks = async () => {
      const books = await BooksAPI.getAll();
      console.log(books);
      setBooks(books);

    }
    getBooks();

  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelves books={books} onShelfChange={handleShelfChange}/>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
