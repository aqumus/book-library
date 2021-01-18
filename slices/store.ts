import { searchBooksReducer, SearchBooksState } from './searchBooksSlice';
import { configureStore, combineReducers, DeepPartial } from '@reduxjs/toolkit';
import { booksReducer, BooksState } from './booksSlice';
import { useMemo } from 'react';

let store: any;

const reducer = combineReducers({
  books: booksReducer,
  searchBooks: searchBooksReducer,
});

export type BookLibraryState = {
  readonly books: BooksState;
  readonly searchBooks: SearchBooksState;
};

export const initBookLibraryStore = (preloadedState: BookLibraryState) =>
  configureStore({
    reducer,
    preloadedState: preloadedState as any,
  });

// reference code https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js
export const initializeStore = (preloadedState: BookLibraryState) => {
  let _store = store ?? initBookLibraryStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initBookLibraryStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: BookLibraryState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
