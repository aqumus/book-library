// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { updateBook as updateBookDbApi } from '../../database';

export default async function updateBook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = await updateBookDbApi(req.body);
      res.statusCode = 200;
      res.json(data);
    } catch (e) {
      console.error(`Error while updating book with id=${req.body.id}`, e);
    }
  }
}
