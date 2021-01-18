import { useSelector } from 'react-redux';
import { BookLibraryState, BooksState } from '../../slices';
import { BookListItem } from '../bookListItem';
import { bookListContainer, noBooksMsg } from './BookList.style';

const searchBooksByTitle = (title: string, books: BooksState) =>
  title ? books.filter(({ name }) => RegExp(title, 'ig').test(name)) : books;

export function BookList() {
  const books = useSelector((state: BookLibraryState) => state.books);
  const searchTitle = useSelector(
    (state: BookLibraryState) => state.searchBooks.searchByTitle
  );
  const renderdBooks = searchBooksByTitle(
    searchTitle,
    books
  ).map((bookDetails, i) => (
    <BookListItem key={bookDetails.id} {...bookDetails} />
  ));

  const hasBooks = !!renderdBooks.length;
  const emptyBooks = <h3 css={noBooksMsg}>No Books Found</h3>;

  if (!hasBooks) {
    return emptyBooks;
  }

  return <div css={bookListContainer}>{renderdBooks}</div>;
}
