import { BookListItem } from '../bookListItem';

const books = new Array(5).fill(0).map((_, i) => ({
  name: `Book ${i}`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci sapien, porta at ipsum ut, eleifend ultrices massa. Donec felis purus, egestas et erat nec, interdum auctor ipsum.',
  count: Math.round(Math.random() * 10),
  author: 'John Doe',
}));

export function BookList() {
  return (
    <div>
      {books.map((bookDetails, i) => (
        <BookListItem key={i} {...bookDetails} />
      ))}
    </div>
  );
}
