import { AddBook } from '../addBook';
import { SearchInput } from '../searchInput';
import { headerActions, headerStyle, headerTitle } from './Header.style';

export function Header() {
  return (
    <header css={headerStyle}>
      <h1 css={headerTitle}>Book Library</h1>
      <div css={headerActions}>
        <AddBook />
        <SearchInput />
      </div>
    </header>
  );
}
