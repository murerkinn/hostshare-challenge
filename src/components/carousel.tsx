import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image as ImageType } from '@/modules/room/types'

type CarouselProps = {
  images: ImageType[]
  showNavigation?: boolean
  showCounter?: boolean
}

const Carousel = ({
  images,
  showNavigation = true,
  showCounter = false,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
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
      onSlideChange={swiper => {
        setActiveIndex(swiper.activeIndex)
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.url}>
          <Image
            src={image.url}
            alt={`Listing Image ${index + 1}`}
            className="h-full w-full object-cover"
            width={image.width}
            height={image.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </SwiperSlide>
      ))}

      {showNavigation && (
        <>
          <button className="carousel-prev btn-icon-only absolute top-1/2 left-4 z-10 w-6 h-6 opacity-40 hover:opacity-100">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-next btn-icon-only absolute top-1/2 right-4 z-10 w-6 h-6 opacity-40 hover:opacity-100">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {showCounter && (
        <div className="rounded-md opacity-75 bg-text-gray py-1 px-2 absolute right-2 bottom-2 z-10 text-white text-xs">
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </Swiper>
  )
}

export default Carousel
