import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types';

type _BooksState = Array<Book>;

export type BooksState = ReadonlyArray<Book>;

const INITIAL_BOOKS_STATE: ReadonlyArray<Book> = [];

const booksSlice = createSlice({
  name: 'books',
  initialState: INITIAL_BOOKS_STATE,
  reducers: {
    addBooks(state: _BooksState, action: PayloadAction<_BooksState>) {
      state = [...state, ...action.payload];
    },
    addBook(state: _BooksState, action: PayloadAction<Book>) {
      state.unshift(action.payload);
    },
    updateBookDetails(state: _BooksState, action: PayloadAction<Book>) {
      const bookIndex = state.findIndex(
        (book) => book.id === action.payload.id
      );
      if (bookIndex < 0) {
        throw Error('book id not found');
      }
      state.splice(bookIndex, 1, action.payload);
    },
  },
});

export const { addBooks, addBook, updateBookDetails } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
