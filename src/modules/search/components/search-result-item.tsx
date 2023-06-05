import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

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

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.carousel-prev',
            nextEl: '.carousel-next',
          }}
          className="h-full w-full"
          pagination={{ clickable: false, dynamicBullets: true }}
        >
          {listing.info.images.data.map((image, index) => (
            <SwiperSlide key={image.url}>
              <Image
                src={image.url}
                alt={`${listing.info.title} Image ${index + 1}`}
                className="h-full w-full object-cover"
                width={image.width}
                height={image.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </SwiperSlide>
          ))}

          <button className="carousel-prev rounded-full bg-white cursor-pointer absolute top-1/2 left-4 z-10 w-6 h-6 opacity-40 hover:opacity-100 transition-all">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-next rounded-full bg-white cursor-pointer absolute top-1/2 right-4 z-10 w-6 h-6 opacity-40 hover:opacity-100 transition-all">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Swiper>
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
