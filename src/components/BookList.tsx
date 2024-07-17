import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteBook } from '../features/books/bookSlice';

interface BookListProps {
  onBookClick: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ onBookClick }) => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onBookClick(book.id)}>
            <span>{book.name} - ${book.price} - {book.category}</span>
            <button onClick={(e) => handleDelete(book.id, e)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
