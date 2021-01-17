import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Book = {
  readonly name: string;
  readonly description: string;
  readonly count: number;
  readonly author: string;
  readonly id: string;
};

export type BooksState = Array<Book>;

const randomIdGenerator = () =>
  '' + parseInt(`${Math.floor(Math.random() * Math.pow(10, 12))}`, 20);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBooks(state: BooksState, action: PayloadAction<BooksState>) {
      state = [...state, ...action.payload];
    },
    addBookDetails(state: BooksState, action: PayloadAction<Omit<Book, 'id'>>) {
      state.unshift({
        ...action.payload,
        id: randomIdGenerator(),
      });
    },
    editBookDetails(state: BooksState, action: PayloadAction<Book>) {
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

export const { addBooks, addBookDetails, editBookDetails } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
