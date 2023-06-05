import { create } from 'zustand'

import API from '@/lib/api'

import { SearchStoreState } from '../types'

const useSearchStore = create<SearchStoreState>((set, get) => ({
  listings: [],
  categories: [],
  loading: false,
  count: 0,
  checkinDate: '2023-08-07',
  checkoutDate: '2023-08-14',
  adultCount: 1,
  childCount: 0,
  country: '',
  page: 1,
  limit: 20,
  search: async (reset = false) => {
    try {
      const state = get()

      set({ loading: true })

      const { data } = await API.get('/search', {
        params: {
          page: state.page,
          limit: state.limit,
          checkinDate: state.checkinDate,
          checkoutDate: state.checkoutDate,
          adultCount: state.adultCount,
          childCount: state.childCount,
        },
      })

      set(state => ({
        listings: reset ? data.listings : [...state.listings, ...data.listings],
        count: data.count,
        loading: false,
      }))
    } catch (e) {
      console.error('Error while searching listings', e)
    }
  },
  setQuery: query => {
    set(state => ({
      ...state,
      ...query,
    }))
  },
}))

export default useSearchStore
