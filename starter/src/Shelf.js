import Book from './Book'

const Shelf = ({ shelf, books, onShelfChange }) => {

    const onShelfChangeChild = (book, shelf) => {
        onShelfChange(book, shelf);
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ shelf }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => <Book book={book} key={book.id} onShelfChange={onShelfChangeChild}/>)}
                </ol>
            </div>
        </div>
    );
}

export default Shelf;