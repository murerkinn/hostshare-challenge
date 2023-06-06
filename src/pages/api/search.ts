import type { NextApiRequest, NextApiResponse } from 'next'

import rawData from '@/data/listings.json'
import { Listing } from '@/modules/room/types'
import { Category } from '@/modules/search/types'

type ListingsData = {
  data: Listing[]
  categories: Category[]
  count: number
}

type SuccessResponseData = {
  listings: Listing[]
  count: number
}

type ErrorResponseData = {
  message: string
}

type ResponseData = SuccessResponseData | ErrorResponseData

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const listingsData = rawData as unknown as ListingsData

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 20

  const listings = listingsData.data.slice(page - 1, page * limit)

  const result = {
    listings: listings,
    count: listingsData.count,
    categories: listingsData.categories,
  }

  res.status(200).json(result)
}
