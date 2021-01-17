import { searchBooksReducer, SearchBooksState } from './searchBooksSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { booksReducer, BooksState } from './booksSlice';

const reducer = combineReducers({
  books: booksReducer,
  searchBooks: searchBooksReducer,
});

export type BookLibraryState = {
  readonly books: BooksState;
  readonly searchBooks: SearchBooksState;
};

export const bookLibraryStore = configureStore({
  reducer,
});
