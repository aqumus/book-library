import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../slices';
import { BookDetails } from '../bookDetails';
import { BookDetailsType, useBookDetails } from '../bookDetails';
import { Modal } from '../modal';
import { AddBookButton } from './AddBookButton';

const EMPTY_BOOK_DETAILS: BookDetailsType = {
  name: '',
  description: '',
  count: 0,
  author: '',
};

export function AddBook() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { bookDetails, onBookDetailsChange, setBookDetails } = useBookDetails(
    EMPTY_BOOK_DETAILS
  );

  const onConfirm = () => {
    dispatch(addBook(bookDetails));
    setBookDetails(EMPTY_BOOK_DETAILS);
    setModalOpen(false);
  };

  return (
    <>
      <AddBookButton onClick={() => setModalOpen(true)} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirm}
        confirmLabel="Save"
        modalHeader="Add new Book details"
      >
        <BookDetails
          onBookDetailsChange={onBookDetailsChange}
          {...bookDetails}
        />
      </Modal>
    </>
  );
}
