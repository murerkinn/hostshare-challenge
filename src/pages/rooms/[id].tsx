import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpFromBracket,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Header from '@/components/header'
import listings from '@/data/listings.json'
import AmenitiesSection from '@/modules/room/components/amenities-section'
import HostDetailsSection from '@/modules/room/components/host-details-section'
import ImageGallery from '@/modules/room/components/image-gallery'
import LocationSection from '@/modules/room/components/location-section'
import ReservationDetailsCard from '@/modules/room/components/reservation-details-card'
import RoomDescriptionSection from '@/modules/room/components/room-description-section'
import RoomDetailsSection from '@/modules/room/components/room-details-section'
import RoomTitleSection from '@/modules/room/components/room-title-section'
import { Listing } from '@/modules/room/types'

const RoomDetailsPage = ({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title={`${room.info.title} - ${room.info.type} for Rent - Hostshare`}
        description={room.info.description}
      />

      <Header hiddenOnMobile />

      <main>
        <div className="flex flex-row justify-between items-center md:hidden bg-transparent absolute top-0 left-0 z-10 w-full p-4">
          <button className="btn btn-icon-only">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="flex flex-row gap-2">
            <button className="btn btn-icon-only">
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </button>

            <button className="btn btn-icon-only">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>

        <div className="relative md:hidden h-[200px] w-full">
          <Carousel
            images={room.info.images.data}
            showNavigation={false}
            showCounter
          />
        </div>

        <div className="container">
          <RoomTitleSection
            title={room.info.title}
            visibleReviewCount={room.info.visibleReviewCount}
            location={room.info.location}
          />
          <ImageGallery images={room.info.images.data} />

          <div className="flex flex-row">
            <div className="md:basis-7/12 basis-full">
              <RoomDetailsSection
                details={room.info.details}
                title={room.info.title}
                host={room.info.host}
              />
              <RoomDescriptionSection description={room.info.description} />
              <AmenitiesSection amenities={room.info.amenities} />
            </div>

            <div className="hidden md:block ml-[8.33333%] basis-4/12">
              <div className="sticky top-20">
                <div className="mt-12 pb-12">
                  <ReservationDetailsCard
                    visibleReviewCount={room.info.visibleReviewCount}
                    nightlyPrice={room.info.price}
                  />
                </div>
              </div>
            </div>
          </div>

          <LocationSection location={room.info.location} />
          <HostDetailsSection host={room.info.host} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  room: Listing
}> = async ({ query }) => {
  const roomId = query.id as string

  const room = (listings as unknown as { data: Listing[] }).data.find(
    r => r.info.id === roomId
  )

  if (!room) {
    return { notFound: true }
  }

  return { props: { room } }
}

export default RoomDetailsPage
