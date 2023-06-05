import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

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

      <Header />

      <main>
        <div className="container">
          <RoomTitleSection
            title={room.info.title}
            visibleReviewCount={room.info.visibleReviewCount}
            location={room.info.location}
          />
          <ImageGallery images={room.info.images.data} />

          <div className="flex flex-row">
            <div className="basis-7/12">
              <RoomDetailsSection
                details={room.info.details}
                title={room.info.title}
                host={room.info.host}
              />
              <RoomDescriptionSection description={room.info.description} />
              <AmenitiesSection amenities={room.info.amenities} />
            </div>

            <div className="ml-[8.33333%] basis-4/12">
              <div className="sticky top-20">
                <div className="mt-12">
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
