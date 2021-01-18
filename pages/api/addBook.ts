import { NextApiRequest, NextApiResponse } from 'next';
import { addBook as addBookDbApi } from '../../database';

export default async function addBook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = await addBookDbApi(req.body);
      res.statusCode = 201;
      res.json(data);
    } catch (e) {
      console.error('Error while adding book', e);
    }
  }
}
