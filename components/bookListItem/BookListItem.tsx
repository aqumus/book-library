import { useState } from 'react';
import { BookDetails } from '../bookDetails';
import { BookDetailsType } from '../bookDetails/BookDetailsType';
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
import { useBookDetails } from './useBookDetails';

type BookListItemProps = BookDetailsType;

export function BookListItem(props: BookListItemProps) {
  const { name, description, count, author } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const { bookDetails, onBookDetailsChange } = useBookDetails(props);

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
        onConfirm={() => setModalOpen(false)}
        confirmLabel="Save"
        modalHeader="Update book details"
      >
        <BookDetails {...props} onBookDetailsChange={onBookDetailsChange} />
      </Modal>
    </>
  );
}
