import { Search } from '../../icons';
import { input, inputContainer, searchIcon } from './SearchInput.style';

export const SearchInput = () => {
  return (
    <div css={inputContainer}>
      <input
        css={input}
        placeholder="Search book title"
        name="Search"
        id="search-input"
      />
      <datalist id="browsers">
        <option value="Book 1" />
        <option value="Book 2" />
        <option value="Book 3" />
        <option value="Book 4" />
        <option value="Book 5" />
      </datalist>
      <Search css={searchIcon} />
    </div>
  );
};
