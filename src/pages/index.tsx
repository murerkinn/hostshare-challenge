import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import Header from '@/components/header'
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

      <Header />

      <main className="pt-6">
        <TotalPriceSwitch />

        <section className="py-6">
          <div className="container">
            <SearchResultsGrid maxColNum={5} />
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
