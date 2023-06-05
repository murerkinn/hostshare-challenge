import Link from 'next/link'

import Carousel from '@/components/carousel'
import formatMoney from '@/lib/format-money'
import { Listing } from '@/modules/room/types'

type SearchResultItemProps = {
  listing: Listing
}

const SearchResultItem = ({ listing }: SearchResultItemProps) => {
  const bedCount = listing.info.details.data.find(
    detail => detail.type === 'bed' || detail.type === 'beds'
  )?.value

  return (
    <Link className="block" href={`/rooms/${listing.info.id}`}>
      <div className="relative mb-3 overflow-hidden rounded-xl w-full h-full max-h-[300px]">
        {listing.info.host?.isSuperHost && (
          <div className="absolute rounded-sm top-5 left-5 bg-white font-medium py-1 px-2 text-sm z-10">
            Superhost
          </div>
        )}

        <Carousel images={listing.info.images.data} />
      </div>

      <div className="grid grid-rows-[19px_19px_19px_25px] gap-x-2 gap-y-1">
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
          <span className="font-medium">{formatMoney(listing.info.price)}</span>{' '}
          night
        </span>
      </div>
    </Link>
  )
}

export default SearchResultItem
