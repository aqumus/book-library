import React from 'react';
import { BookLibrary } from '../components';
import { getBooks } from '../database';

export default function Index() {
  return <BookLibrary />;
}

export async function getStaticProps() {
  const books = await getBooks();
  return {
    props: {
      initialReduxState: {
        books,
        searchBooks: {
          searchByTitle: '',
        },
      },
    },
  };
}
