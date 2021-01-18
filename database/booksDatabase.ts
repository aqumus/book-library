import fs from 'fs';
import path from 'path';
import util from 'util';
import { Book } from '../types';

const writeFile = util.promisify(fs.writeFile);

let _BOOKS: ReadonlyArray<Book> = [];
const BOOK_JSON_PATH = path.join(process.cwd(), 'books.json');

try {
  _BOOKS = JSON.parse(
    fs.readFileSync(BOOK_JSON_PATH, {
      encoding: 'utf8',
    })
  );
} catch (e) {
  console.log('Error while reading books.json file');
}

const randomIdGenerator = () =>
  '' + parseInt(`${Math.floor(Math.random() * Math.pow(10, 12))}`, 20);

export async function updateBook(updatedBook: Book) {
  _BOOKS = _BOOKS.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );
  return updatedBook;
}

export async function addBook(newBook: Book) {
  const book = {
    ...newBook,
    id: randomIdGenerator(),
  };
  _BOOKS = [book, ..._BOOKS];

  return book;
}

export async function getBooks() {
  return _BOOKS;
}

async function writeToBookJson() {
  return writeFile(BOOK_JSON_PATH, JSON.stringify(_BOOKS, null, 2));
}
