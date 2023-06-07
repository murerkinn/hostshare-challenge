import Link from 'next/link'

import Footer from '@/components/footer'
import Header from '@/components/header'

const Custom404Page = () => {
  return (
    <>
      <Header isSearchBarVisible={false} />

      <main className="py-12">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div>
              <h1 className="text-2xl font-medium mb-10">
                We can’t seem to find the page you’re looking for
              </h1>

              <p className="text-base">Here are some helpful links instead:</p>

              <ul className="my-4">
                <li>
                  <Link href="/" className="btn btn-link btn-lg pl-0">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="btn btn-link btn-lg pl-0">
                    <span>Travelling on Hostshare</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="btn btn-link btn-lg pl-0">
                    <span>Hosting on Hostshare</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="btn btn-link btn-lg pl-0">
                    <span>Trust & Safety</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="btn btn-link btn-lg pl-0">
                    <span>Sitemap</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-10 md:mb-0 md:ml-auto md:mr-40">
              <img
                src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
                alt="404 gif"
                className="object-cover h-60"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Custom404Page
