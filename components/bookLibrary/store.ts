import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { booksReducer } from '../../slices';

const reducer = combineReducers({
  books: booksReducer,
});

export const bookLibraryStore = configureStore({
  reducer,
});
