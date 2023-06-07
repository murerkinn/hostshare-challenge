import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import Header from '@/components/header'
import FilterModal from '@/modules/search/components/filter-modal'
import Map from '@/modules/search/components/map'
import SearchResultsGrid from '@/modules/search/components/search-results-grid'
import TotalPriceSwitch from '@/modules/search/components/total-price-switch'
import useSearchStore from '@/modules/search/store'

const SearchPage = () => {
  const { search, listings } = useSearchStore()

  useEffect(() => {
    search()
  }, [])

  return (
    <>
      <NextSeo
        title="Hostshare - Booking Platform"
        description="Hostshare is a booking platform for renting rooms and properties."
      />

      <Header />

      <main>
        <div
          className="grid grid-cols-1 md:grid-cols-[9fr_5fr]"
          style={{ height: 'calc(100vh - 80px)', width: '100%' }}
        >
          <div className="p-6 overflow-y-auto md:max-w-[900px]">
            <TotalPriceSwitch containerClassName="max-w-full mb-5 hidden md:flex" />
            <SearchResultsGrid />
          </div>

          <Map listings={listings} />
        </div>
      </main>

      <FilterModal />
    </>
  )
}

export default SearchPage
