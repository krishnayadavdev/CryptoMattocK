import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateBook, deleteBook } from '../features/books/bookSlice';

interface EditBookProps {
  bookId: string;
  onClose: () => void;
}

const EditBook: React.FC<EditBookProps> = ({ bookId, onClose }) => {
  const book = useSelector((state: RootState) => state.books.books.find(b => b.id === bookId));
  const dispatch = useDispatch();

  const [name, setName] = useState(book?.name || '');
  const [price, setPrice] = useState(book?.price || 0);
  const [category, setCategory] = useState(book?.category || '');
  const [description, setDescription] = useState(book?.description || '');

  useEffect(() => {
    if (book) {
      setName(book.name);
      setPrice(book.price);
      setCategory(book.category);
      setDescription(book.description);
    }
  }, [book]);

  const handleUpdateBook = () => {
    if (book) {
      dispatch(updateBook({
        ...book,
        name,
        price,
        category,
        description,
      }));
      onClose();
    }
  };

  const handleDeleteBook = () => {
    if (book) {
      dispatch(deleteBook(book.id));
      onClose();
    }
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Edit Book</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button onClick={handleUpdateBook}>Update Book</button>
        <button onClick={handleDeleteBook}>Delete Book</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditBook;
