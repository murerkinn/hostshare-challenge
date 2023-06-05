import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image as ImageType } from '@/modules/room/types'

type CarouselProps = {
  images: ImageType[]
}

const Carousel = ({ images }: CarouselProps) => {
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

      <button className="carousel-prev rounded-full bg-white cursor-pointer absolute top-1/2 left-4 z-10 w-6 h-6 opacity-40 hover:opacity-100 transition-all">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="carousel-next rounded-full bg-white cursor-pointer absolute top-1/2 right-4 z-10 w-6 h-6 opacity-40 hover:opacity-100 transition-all">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </Swiper>
  )
}

export default Carousel
