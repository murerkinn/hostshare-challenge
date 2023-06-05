import {
  faChevronLeft,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleMapReact from 'google-map-react'
import { useState } from 'react'

import { mapStyles } from '@/constants/map-styles'
import { Listing } from '@/modules/room/types'
import MapMarker from '@/modules/search/components/map-marker'

type MapProps = {
  listings: Listing[]
}

const Map = ({ listings }: MapProps) => {
  const [zoom, setZoom] = useState(4)

  const handleZoomIncrease = () => {
    if (zoom === 20) return

    setZoom(z => z + 1)
  }

  const handleZoomDecrease = () => {
    if (zoom === 4) return

    setZoom(z => z - 1)
  }

  return (
    <div className="h-full relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{
          lat: 41.34891,
          lng: -80.96674,
        }}
        zoom={zoom}
        defaultZoom={4}
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
            key={`marker-${listing.info.id}`}
            lat={listing.info.location.lat}
            lng={listing.info.location.long}
            listing={listing}
          />
        ))}
      </GoogleMapReact>

      <div className="absolute top-4 flex flex-row justify-between w-full px-4">
        <button
          className="btn btn-icon-only rounded-lg w-10 h-10"
          style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          className="flex flex-col bg-white rounded-lg overflow-hidden"
          style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
        >
          <button
            onClick={handleZoomIncrease}
            className="btn btn-icon-only w-10 h-10 border-b border-b-border-mid-gray rounded-none"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button
            onClick={handleZoomDecrease}
            className="btn btn-icon-only w-10 h-10 rounded-none"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Map
