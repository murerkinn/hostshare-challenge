import { create } from 'zustand'

import { SearchStoreState } from '../types'

const useSearchStore = create<SearchStoreState>(set => ({
  listings: [],
  categories: [],
  loading: false,
  count: 0,
  checkinDate: '2023-08-07',
  checkoutDate: '2023-08-14',
  adultCount: 1,
  childCount: 0,
}))

export default useSearchStore
