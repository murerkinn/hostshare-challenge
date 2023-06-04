import '@/styles/main.scss'

import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axios.get('/api/search').then(res => console.log(res.data))
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
