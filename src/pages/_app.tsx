import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/main.scss'

import dayjs from 'dayjs'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useSearchStore from '@/modules/search/store'

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter()
  const { setQuery } = useSearchStore()

  useEffect(() => {
    setQuery({
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 20,
      adultCount: query.adultCount ? Number(query.adultCount) : 1,
      childCount: query.childCount ? Number(query.childCount) : 0,
      checkinDate: query.checkinDate
        ? dayjs(query.checkinDate as string).format('YYYY-MM-DD')
        : dayjs().format('YYYY-MM-DD'),
      checkoutDate: query.checkoutDate
        ? dayjs(query.checkoutDate as string).format('YYYY-MM-DD')
        : dayjs().add(1, 'week').format('YYYY-MM-DD'),
    })
  }, [query])

  return <Component {...pageProps} />
}

export default MyApp
