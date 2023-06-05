import {
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleMapReact from 'google-map-react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import Dropdown from '@/components/dropdown'
import Header from '@/components/header'
import { mapStyles } from '@/constants/map-styles'
import formatMoney from '@/lib/format-money'
import SearchResultItem from '@/modules/search/components/search-result-item'
import SearchResultsGrid from '@/modules/search/components/search-results-grid'
import TotalPriceSwitch from '@/modules/search/components/total-price-switch'
import useSearchStore from '@/modules/search/store'

const MapMarker = ({ lat, lng, listing }) => {
  return (
    <Dropdown
      trigger={
        <div
          className="rounded-full bg-white py-1 px-2 font-medium text-sm text-center inline-block"
          style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.18)' }}
        >
          {formatMoney(listing.info.price)}
        </div>
      }
      placement="bottom"
    >
      <div className="overflow-hidden">
        <SearchResultItem listing={listing} />
      </div>
    </Dropdown>
  )
}

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
          className="grid grid-cols-[9fr_5fr]"
          style={{ height: 'calc(100vh - 80px)', width: '100%' }}
        >
          <div className="p-6 overflow-y-auto max-w-[900px]">
            <TotalPriceSwitch containerClassName="max-w-full mb-5" />
            <SearchResultsGrid />
          </div>

          <div className="h-full relative">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={{
                lat: 37.0902,
                lng: -90.02509,
              }}
              defaultZoom={11}
              options={{
                styles: mapStyles,
                panControl: false,
                mapTypeControl: false,
                zoomControl: false,
                scaleControl: false,
                fullscreenControl: false,
              }}
            >
              {listings.map(listing => (
                <MapMarker
                  key={listing.info.id}
                  lat={listing.info.location.lat}
                  lng={listing.info.location.long}
                  listing={listing}
                />
              ))}
            </GoogleMapReact>

            <div className="absolute top-4 flex flex-row justify-between w-full px-4">
              <button
                className="btn btn-secondary rounded-lg border-0 items-center justify-center w-10 h-10"
                style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <div
                className="flex flex-col bg-white rounded-lg overflow-hidden"
                style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
              >
                <button className="btn btn-secondary border-0 p-0 w-10 h-10 items-center justify-center border-b border-b-border-mid-gray rounded-none">
                  <FontAwesomeIcon icon={faPlus} />
                </button>

                <button className="btn btn-secondary border-0 p-0 w-10 h-10 items-center justify-center">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SearchPage
