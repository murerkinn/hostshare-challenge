import { Listing } from '@/modules/room/types'

type Category = {
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
}
