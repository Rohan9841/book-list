import { BookContext } from "../contexts/BookContext";
import { useContext } from 'react';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='book-list'>
            <ul>
                {books.length ? books.map(book => {
                    return (
                        <BookDetails book={book} key={book.id} />
                    )
                }) :
                    <div className="empty">No more books to read. Hurray!</div>
                }
            </ul>
        </div>
    );
}

export default BookList;