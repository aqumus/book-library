import React from 'react';
import Head from 'next/head';
import { SearchInput } from '../searchInput';
import { bookLibraryContainer } from './BookLibrary.style';
import { BookList } from '../bookList';
import { AddBook } from '../addBook';

export function BookLibrary() {
  return (
    <div css={bookLibraryContainer}>
      <Head>
        <title>Book Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <SearchInput />
        <AddBook />
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}
