import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { bookLibraryContainer } from './BookLibrary.style';
import { BookList } from '../bookList';
import { Header } from '../header';
import { MODAL_CONTAINER_ID } from '../modal';
import { bookLibraryStore } from './store';

export function BookLibrary() {
  return (
    <Provider store={bookLibraryStore}>
      <div css={bookLibraryContainer}>
        <Head>
          <title>Book Library</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <BookList />
        </main>
      </div>
      <div id={MODAL_CONTAINER_ID} />
    </Provider>
  );
}
