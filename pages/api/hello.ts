// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  roll: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200)
  res.json(<Data>{name: "Mark Alexander", roll: 21})
  // res.status(200).json({ name: 'John Doe' })
}
