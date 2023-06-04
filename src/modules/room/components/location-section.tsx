import GoogleMapReact from 'google-map-react'

import { mapStyles } from '@/constants/map-styles'

import { Location } from '../types'

const LocationIndicator = (props: { lat: number; lng: number }) => (
  <div
    className="relative h-12 w-12 rounded-full bg-primary before:absolute before:left-0 before:top-0 before:h-36 before:w-36 before:translate-x-[-48px] before:translate-y-[-48px] before:rounded-full before:bg-primary before:opacity-30"
    style={{
      boxShadow: 'rgba(0, 0, 0, 0.18)',
    }}
  ></div>
)

type LocationSectionProps = {
  location: Location
}

const LocationSection = ({ location }: LocationSectionProps) => {
  const defaultProps = {
    center: {
      lat: location.lat,
      lng: location.long,
    },
    zoom: 14,
  }

  return (
    <section className="border-t border-t-border-gray py-12">
      <h2 className="mb-6 text-section-title font-medium">Where you'll be</h2>

      <p className="mb-6 text-base">
        {location.city}, {location.country.title}
      </p>

      <div className="relative mb-8">
        <div className="h-[480px] w-full">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={{
              styles: mapStyles,
              panControl: false,
              mapTypeControl: false,
              zoomControl: false,
              scaleControl: false,
              fullscreenControl: false,
            }}
          >
            <LocationIndicator lat={location.lat} lng={location.long} />
          </GoogleMapReact>
        </div>
      </div>

      <button className="btn btn-link btn-lg pl-0">
        <span>Show more</span>
      </button>
    </section>
  )
}

export default LocationSection
