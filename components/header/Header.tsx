import { AddBook } from '../addBook';
import { SearchInput } from '../searchInput';
import { headerStyle, headerTitle } from './Header.style';

export function Header() {
  return (
    <header css={headerStyle}>
      <h1 css={headerTitle}>Book Library</h1>
      <AddBook />
      <SearchInput />
    </header>
  );
}
