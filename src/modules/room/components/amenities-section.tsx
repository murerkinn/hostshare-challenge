import { ListingAmenities } from '../types'
import AmenityItem from './amenity-item'

type AmenitiesSectionProps = {
  amenities: ListingAmenities
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <section className="pb-6 pt-8 md:py-12">
      <h2 className="mb-6 text-section-title font-medium">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {amenities.data.slice(0, 10).map(amenity => (
          <AmenityItem
            amenity={amenity}
            key={`${amenity.type}-${amenity.title}`}
          />
        ))}
      </div>

      <button className="btn btn-secondary btn-lg mt-6 w-full md:w-max justify-center">
        Show all {amenities.count} amenities
      </button>
    </section>
  )
}

export default AmenitiesSection
