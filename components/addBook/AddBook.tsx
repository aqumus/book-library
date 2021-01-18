import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../slices';
import { Book } from '../../types';
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
  const [inProgress, setInprogress] = useState(false);
  const { bookDetails, onBookDetailsChange, setBookDetails } = useBookDetails(
    EMPTY_BOOK_DETAILS
  );

  const onConfirm = async function () {
    setInprogress(true);
    const { data } = await addBookApi(bookDetails);
    if (data) {
      dispatch(addBook(data));
      setInprogress(false);
      setModalOpen(false);
      setBookDetails(EMPTY_BOOK_DETAILS);
    }
  };

  return (
    <>
      <AddBookButton onClick={() => setModalOpen(true)} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirm}
        confirmLabel={inProgress ? 'Saving' : 'Save'}
        modalHeader="Add new Book details"
        inProgress={inProgress}
      >
        <BookDetails
          onBookDetailsChange={onBookDetailsChange}
          {...bookDetails}
        />
      </Modal>
    </>
  );
}

async function addBookApi(
  bookDetails: BookDetailsType
): Promise<{
  data?: Book;
  error?: Error;
}> {
  try {
    const res: Response = await fetch('api/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookDetails),
    });
    return { data: (await res.json()) as Book };
  } catch (e) {
    const error = Error('Error while adding book');
    console.error(error.message, e);
    return { data: undefined, error };
  }
}
