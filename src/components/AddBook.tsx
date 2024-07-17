import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/bookSlice';
import { v4 as uuidv4 } from 'uuid';

interface AddBookProps {
  onClose: () => void;
}

const AddBook: React.FC<AddBookProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({
      id: uuidv4(),
      name,
      price,
      category,
      description,
    }));
    onClose();
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Add Book</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button onClick={handleAddBook}>Add Book</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddBook;
