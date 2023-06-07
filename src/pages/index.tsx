import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import Header from '@/components/header'
import CategoriesBar from '@/modules/search/components/categories-bar'
import FilterModal from '@/modules/search/components/filter-modal'
import SearchResultsGrid from '@/modules/search/components/search-results-grid'
import TotalPriceSwitch from '@/modules/search/components/total-price-switch'
import useSearchStore from '@/modules/search/store'

const HomePage = () => {
  const { query } = useRouter()
  const { search } = useSearchStore()

  useEffect(() => {
    search()
  }, [])

  return (
    <>
      <NextSeo
        title="Hostshare - Booking Platform"
        description="Hostshare is a booking platform for renting rooms and properties."
      />

      <div className="fixed top-0 left-0 z-20 w-full">
        <Header />
        <div className="container">
          <CategoriesBar />
        </div>
      </div>

      <main className=" pt-48">
        <TotalPriceSwitch />

        <section className="py-6">
          <div className="container">
            <SearchResultsGrid maxColNum={5} />
          </div>
        </section>
      </main>

      <FilterModal />
    </>
  )
}

export default HomePage
