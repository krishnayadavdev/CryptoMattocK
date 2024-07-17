import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    bulkDeleteBooks: (state, action: PayloadAction<string[]>) => {
      state.books = state.books.filter(book => !action.payload.includes(book.id));
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
  },
});

export const { addBook, updateBook, deleteBook, bulkDeleteBooks, setBooks } = bookSlice.actions;
export default bookSlice.reducer;
