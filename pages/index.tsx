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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once 10 second
    revalidate: 10, // In seconds
  };
}
