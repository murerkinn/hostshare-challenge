import { Listing } from '@/modules/room/types'

export type Category = {
  id: string
  title: string
  type: string
}

export interface SearchStoreState {
  count: number
  listings: Listing[]
  categories: Category[]
  loading: boolean
  checkinDate: string
  checkoutDate: string
  adultCount: number
  childCount: number
  country: string
  page: number
  limit: number
  search: (reset?: boolean) => Promise<void>
  setQuery: (query: Record<string, string | number>) => void
}
