import React from 'react';
import { Add } from '../../icons';
import { addBookButton, addBookIcon } from './AddBookButton.style';

type AddBookButtonProps = {
  readonly onClick: () => void;
};

export function AddBookButton({ onClick }: AddBookButtonProps) {
  return (
    <button css={addBookButton} onClick={onClick}>
      <Add css={addBookIcon} />
      New Book
    </button>
  );
}
