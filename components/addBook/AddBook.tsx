import React, { useCallback, useState } from 'react';
import { BookDetails } from '../bookDetails';
import { BookDetailsType } from '../bookDetails/BookDetailsType';
import { Modal } from '../modal';
import { AddBookButton } from './AddBookButton';

const EMPTY_BOOK_DETAILS = {
  name: '',
  description: '',
  count: 0,
  author: '',
};

export function AddBook() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookDetailsType>(
    EMPTY_BOOK_DETAILS
  );

  const onBookDetailsChange = useCallback(
    (value: string | number, property: string) => {
      setBookDetails({
        ...bookDetails,
        [property]: value,
      });
    },
    [bookDetails]
  );

  return (
    <>
      <AddBookButton onClick={() => setModalOpen(true)} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
        confirmLabel="Save"
        closeLabel="Cancel"
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
