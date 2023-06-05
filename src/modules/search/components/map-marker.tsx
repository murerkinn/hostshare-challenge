import Carousel from '@/components/carousel'
import Dropdown from '@/components/dropdown'
import formatMoney from '@/lib/format-money'
import { Listing } from '@/modules/room/types'

type MapMarkerProps = {
  lat: number
  lng: number
  listing: Listing
}

const MapMarker = ({ lat, lng, listing }: MapMarkerProps) => {
  const bedCount = listing.info.details.data.find(
    detail => detail.type === 'bed' || detail.type === 'beds'
  )?.value

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
      panelClassName="w-[320px]"
    >
      <div className="overflow-hidden rounded-xl p-0">
        <div className="relative overflow-hidden w-full h-full max-h-[210px]">
          <Carousel images={listing.info.images.data} />
        </div>

        <div className="grid grid-rows-[19px_19px_19px_25px] gap-x-2 gap-y-1 p-4">
          <h4 className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
            {listing.info.title}
          </h4>
          <span className="text-sm">
            {listing.info.location.city}, {listing.info.location.country.title}
          </span>
          <span className="text-sm">
            {bedCount} {bedCount === 1 ? 'bed' : 'beds'}{' '}
          </span>
          <span>
            <span className="font-medium">
              {formatMoney(listing.info.price)}
            </span>{' '}
            night
          </span>
        </div>
      </div>
    </Dropdown>
  )
}

export default MapMarker
