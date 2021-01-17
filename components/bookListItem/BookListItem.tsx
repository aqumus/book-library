import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Book, updateBookDetails } from '../../slices';
import { BookDetails } from '../bookDetails';
import { BookDetailsType, useBookDetails } from '../bookDetails';
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
  const { bookDetails, onBookDetailsChange } = useBookDetails(props);

  const onConfirm = () => {
    dispatch(updateBookDetails({ ...bookDetails, id }));
    setModalOpen(false);
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
        confirmLabel="Update"
        modalHeader="Update book details"
      >
        <BookDetails
          {...bookDetails}
          onBookDetailsChange={onBookDetailsChange}
        />
      </Modal>
    </>
  );
});
