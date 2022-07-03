import "./App.css";
import {useEffect, useState} from "react";
import Shelves from './Shelves';
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Routes, Route, Link } from "react-router-dom";


function App() {

  const [books, setBooks] = useState([])

  const handleShelfChange = (book, shelf) => {
    const newState = books.map(obj => {
      if (obj.id === book.id) {
        console.log('bla', 'bla');
        updateBooks(book, shelf);
        return {...obj, shelf: shelf};
      }

      return obj;
    });

    setBooks(newState);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async (clear) => {
    const books = await BooksAPI.getAll();
    clear ? setBooks([]) : setBooks(books);
  }

  const searchBooks = async (e) => {
    if (!e) {
      return;
    }
    const books = await BooksAPI.search(e.target.value);
    setBooks(books);
  }

  const updateBooks = async (book, shelf) => {
    const grr = await BooksAPI.update(book, shelf);
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {books && <Shelves books={books} onShelfChange={handleShelfChange}/>}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        } />

        <Route path="/search" element={
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" onClick={getBooks}>Close</Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={searchBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books && !books.error && books.map(book => <Book book={book} key={book.id} onShelfChange={handleShelfChange} /> )}
              </ol>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
