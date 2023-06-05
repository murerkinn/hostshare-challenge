import { Fragment, useMemo } from 'react'

import { Host, ListingDetails } from '../types'

type RoomDetailsSectionProps = {
  title: string
  details: ListingDetails
  host: Host
}

const RoomDetailsSection = ({
  title,
  details,
  host,
}: RoomDetailsSectionProps) => {
  const detailsText = useMemo(() => {
    return details.data
      .map(detail => `${detail.value} ${detail.type}`)
      .join(' · ')
  }, [details.data])

  return (
    <section className="pt-6 md:pt-12 pb-6 border-b border-b-border-light-gray">
      <div className="flex flex-row justify-between">
        <h2 className="text-section-title font-medium mb-2">{title}</h2>
        <img
          src={host.avatar.url}
          alt={host.name}
          className="rounded-full w-14 h-14"
        />
      </div>

      <div className="flex flex-row items-center">{detailsText}</div>
    </section>
  )
}

export default RoomDetailsSection
