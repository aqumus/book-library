import React from 'react';
import { Add } from '../../icons';
import { addBookContainer } from './AddBook.style';

export function AddBook() {
  return (
    <span css={addBookContainer}>
      <Add />
    </span>
  );
}
