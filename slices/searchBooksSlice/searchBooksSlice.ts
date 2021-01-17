import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SearchBooksState = {
  readonly searchByTitle: string;
};

type Mutable<T> = { -readonly [k in keyof T]: T[k] };

type _SearchBooksState = Mutable<SearchBooksState>;

const INITIAL_SEARCH_BOOK_STATE: SearchBooksState = {
  searchByTitle: '',
};

const searchBooksSlice = createSlice({
  name: 'searchBooks',
  initialState: INITIAL_SEARCH_BOOK_STATE,
  reducers: {
    searchByTitle(state: _SearchBooksState, action: PayloadAction<string>) {
      state.searchByTitle = action.payload;
    },
  },
});

export const { searchByTitle } = searchBooksSlice.actions;

export const searchBooksReducer = searchBooksSlice.reducer;
