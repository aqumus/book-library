import { Book } from '../../slices';

export type BookDetailsType = Omit<Book, 'id'>;
