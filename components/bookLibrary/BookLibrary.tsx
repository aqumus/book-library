import React from 'react';
import Head from 'next/head';
import { bookLibraryContainer } from './BookLibrary.style';
import { BookList } from '../bookList';
import { Header } from '../header';
import { MODAL_CONTAINER_ID } from '../modal';

export function BookLibrary() {
  return (
    <>
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
    </>
  );
}
