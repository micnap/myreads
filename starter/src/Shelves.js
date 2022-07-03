import Shelf from "./Shelf";
import ShelfTypes from "./ShelfTypes";

const Shelves = ({ books, onShelfChange }) => {

    const filterBooks = (shelf) => {
        return books.filter(book => book.shelf === shelf);
    }

    const onShelfChangeChild = (book, shelf) => {
        onShelfChange(book, shelf);
    }

    return (
        <div className="list-books-content">
            {ShelfTypes.map((shelf) => <Shelf shelf={shelf[1]} books={filterBooks(shelf[0])} key={shelf[0]} onShelfChange={onShelfChangeChild}/>)}
        </div>
    );
}

export default Shelves;