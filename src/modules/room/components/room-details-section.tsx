import { Fragment } from 'react'

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
  return (
    <section className="pt-12 pb-6 border-b border-b-border-light-gray">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-section-title font-medium mb-2">{title}</h2>
          <div className="flex flex-row items-center">
            {details.data.map((detail, index) => (
              <Fragment key={detail.type}>
                <span>
                  {detail.value} {detail.type}
                </span>

                {index !== details.data.length - 1 && (
                  <span className="mx-2">·</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <img
          src={host.avatar.url}
          alt={host.name}
          className="rounded-full w-14 h-14"
        />
      </div>
    </section>
  )
}

export default RoomDetailsSection
