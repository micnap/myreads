import Author from './Author';
import Shelfchanger from './Shelfchanger';

const Book = ({ book, onShelfChange }) => {

    const onShelfChangeChild = (shelf) => {
        onShelfChange(book, shelf);
    }

    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                    ></div>
                    <Shelfchanger onShelfChange={onShelfChangeChild} selected={book.shelf} />
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author, index) => <Author key={index} author={author} />)}
            </div>
        </li>


    );
}

export default Book;