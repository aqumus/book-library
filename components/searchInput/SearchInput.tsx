import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../../icons';
import { BookLibraryState, searchByTitle } from '../../slices';
import { input, inputContainer, searchIcon } from './SearchInput.style';

const debounce = function (
  fnToDebounce: (...args: any) => void,
  debounceTime: number = 450
) {
  let timeout = 0;
  return function (...args: any) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => fnToDebounce(...args), debounceTime);
  };
};

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const books = useSelector((state: BookLibraryState) => state.books);
  const bookNames = books.map(({ name }) => name);
  const debouncedDispatch = useMemo(() => debounce(dispatch), [dispatch]);

  useEffect(() => {
    debouncedDispatch(searchByTitle(value));
  }, [value]);

  return (
    <div css={inputContainer}>
      <input
        css={input}
        placeholder="Search book title"
        name="Search"
        id="search-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <datalist id="search-input">
        {bookNames.map((name, i) => (
          <option value={name} key={i} />
        ))}
      </datalist>
      <Search css={searchIcon} />
    </div>
  );
};
