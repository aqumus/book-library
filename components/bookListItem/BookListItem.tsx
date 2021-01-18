import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { updateBookDetails } from '../../slices';
import { Book } from '../../types';
import { BookDetails } from '../bookDetails';
import { useBookDetails } from '../bookDetails';
import { Modal } from '../modal';
import {
  bookListItemContainer,
  bookName,
  bookAuthor,
  bookDescription,
  bookCount,
  bookCountLabel,
  separator,
  editButtonStyle,
  listItemFooterContainer,
} from './BookListItem.style';

type BookListItemProps = Book;

export const BookListItem = memo((props: BookListItemProps) => {
  const { name, description, count, author, id } = props;
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [inProgress, setInprogress] = useState(false);
  const { bookDetails, onBookDetailsChange, setBookDetails } = useBookDetails(
    props
  );

  const onConfirm = async () => {
    setInprogress(true);
    const updatedBookDetails = { ...bookDetails, id };
    const { data } = await updateBookApi(updatedBookDetails);
    if (data) {
      dispatch(updateBookDetails(data));
      setInprogress(false);
      setModalOpen(false);
      setBookDetails(data);
    }
  };

  return (
    <>
      <div css={bookListItemContainer}>
        <div css={bookName}>{name}</div>
        <div css={bookAuthor}>By {author}</div>
        <p css={bookDescription}>{description}</p>
        <hr css={separator} />
        <div css={listItemFooterContainer}>
          <span css={bookCount}>
            <label css={bookCountLabel}>Count: </label>
            {count}
          </span>
          <button css={editButtonStyle} onClick={() => setModalOpen(true)}>
            Edit
          </button>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={onConfirm}
        confirmLabel={inProgress ? 'Updating' : 'Update'}
        modalHeader="Update book details"
        inProgress={inProgress}
      >
        <BookDetails
          {...bookDetails}
          onBookDetailsChange={onBookDetailsChange}
        />
      </Modal>
    </>
  );
});

async function updateBookApi(
  bookDetails: Book
): Promise<{
  data?: Book;
  error?: Error;
}> {
  try {
    const res: Response = await fetch('api/updateBook', {
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
