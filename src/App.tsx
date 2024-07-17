import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

const App: React.FC = () => {
  const [editBookId, setEditBookId] = useState<string | null>(null);
  const [showAddBook, setShowAddBook] = useState(false);

  const handleBookClick = (id: string) => {
    setEditBookId(id);
  };

  const handleAddBookClick = () => {
    setShowAddBook(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
          <h1 style={{"textAlign": "center", "fontStyle": "italic", "fontWeight": "bold"}}>Online Book Store</h1>
        <div className="add-button">
          <button onClick={handleAddBookClick}>Add Book</button>
        </div>
        <BookList onBookClick={handleBookClick} />
        {showAddBook && <AddBook onClose={() => setShowAddBook(false)} />}
        {editBookId && <EditBook bookId={editBookId} onClose={() => setEditBookId(null)} />}
      </div>
    </Provider>
  );
};

export default App;
