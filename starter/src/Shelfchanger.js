import ShelfTypes from './ShelfTypes';

const Shelfchanger = ({ onShelfChange, selected }) => {

    const changeShelf = (e) => {
        onShelfChange(e.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={changeShelf} value={selected}>
                <option value="none" disabled>
                    Move to...
                </option>
                {ShelfTypes.map(shelf => (
                    <option value={shelf[0]} key={shelf[0]}>
                        {shelf[1]}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Shelfchanger;