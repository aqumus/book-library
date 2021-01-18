import { Book } from '../../types';

export type BookDetailsType = Omit<Book, 'id'>;
