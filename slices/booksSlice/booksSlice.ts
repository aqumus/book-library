import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Book = {
  readonly name: string;
  readonly description: string;
  readonly count: number;
  readonly author: string;
  readonly id: string;
};

type _BooksState = Array<Book>;

export type BooksState = ReadonlyArray<Book>;

const randomIdGenerator = () =>
  '' + parseInt(`${Math.floor(Math.random() * Math.pow(10, 12))}`, 20);

const books = new Array(5).fill(0).map((_, i) => ({
  name: `Book ${i}`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci sapien, porta at ipsum ut, eleifend ultrices massa. Donec felis purus, egestas et erat nec, interdum auctor ipsum.',
  count: Math.round(Math.random() * 10),
  author: 'John Doe',
  id: randomIdGenerator(),
}));

const INITIAL_BOOKS_STATE: ReadonlyArray<Book> = [];

const booksSlice = createSlice({
  name: 'books',
  initialState: books,
  reducers: {
    addBooks(state: _BooksState, action: PayloadAction<_BooksState>) {
      state = [...state, ...action.payload];
    },
    addBook(state: _BooksState, action: PayloadAction<Omit<Book, 'id'>>) {
      state.unshift({
        ...action.payload,
        id: randomIdGenerator(),
      });
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
