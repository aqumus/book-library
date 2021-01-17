import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from '../../icons';
import { searchByTitle } from '../../slices';
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
