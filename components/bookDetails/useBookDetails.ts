import { useCallback, useState, useEffect } from 'react';
import { BookDetailsType } from '.';

export const useBookDetails = (initialBookDetails: BookDetailsType) => {
  const [bookDetails, setBookDetails] = useState<BookDetailsType>(
    initialBookDetails
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

  return {
    bookDetails,
    onBookDetailsChange,
    setBookDetails,
  };
};
