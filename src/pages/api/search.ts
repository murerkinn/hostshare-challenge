import type { NextApiRequest, NextApiResponse } from 'next'

import listingsData from '@/data/listings.json'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 20

  const listings = (listingsData as any).data.slice(page - 1, page * limit)

  const result = {
    listings: listings,
    count: listingsData.count,
  }

  res.status(200).json(result)
}
