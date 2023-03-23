// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EdenClient } from 'eden-sdk';

let filter = {
  username: '0x267f327125903F6D562315A2c8a2e6c2Dc60C068',
  limit: 50,
};

export default async function handler(req, res) {
  let eden = new EdenClient();
  let result = await eden.getCreations(filter);
  const filteredJson = JSON.stringify(
    result.filter((creation) => /\.(jpg|png)$/.test(creation.uri))
  );
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ props: filteredJson });
}
