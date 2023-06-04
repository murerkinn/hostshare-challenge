import { ListingAmenities } from '../types'
import AmenityItem from './amenity-item'

type AmenitiesSectionProps = {
  amenities: ListingAmenities
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <section className="border-b border-b-border-light-gray py-12">
      <h2 className="mb-6 text-section-title font-medium">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {amenities.data.slice(0, 10).map(amenity => (
          <AmenityItem amenity={amenity} key={amenity.type} />
        ))}
      </div>

      <button className="btn btn-secondary btn-lg mt-6">
        Show all {amenities.count} amenities
      </button>
    </section>
  )
}

export default AmenitiesSection
