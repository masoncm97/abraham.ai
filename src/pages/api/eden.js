// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EdenClient } from 'eden-sdk';

let filter = {
  username: '0x267f327125903F6D562315A2c8a2e6c2Dc60C068',
  limit: 50,
};

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
