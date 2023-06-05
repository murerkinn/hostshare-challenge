import { Location } from '../types'

type RoomTitleSectionProps = {
  title: string
  visibleReviewCount: number
  location: Location
}

const RoomTitleSection = ({
  title,
  visibleReviewCount,
  location,
}: RoomTitleSectionProps) => {
  return (
    <section className="py-6 border-b border-b-border-mid-gray md:border-b-0">
      <h1 className="mb-1 text-2xl font-semibold">{title}</h1>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          {visibleReviewCount > 0 && (
            <>
              <button className="btn btn-link p-0">
                <span>
                  {visibleReviewCount}{' '}
                  {visibleReviewCount === 1 ? 'review' : 'reviews'}
                </span>
              </button>
              <span className="mx-2">·</span>
            </>
          )}

          <button className="btn btn-link p-0">
            <span>
              {location.city}, {location.country.title}
            </span>
          </button>
        </div>

        <div className="md:flex flex-row gap-5 hidden">
          <button className="btn btn-link">
            <span>Share</span>
          </button>

          <button className="btn btn-link">
            <span>Save</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default RoomTitleSection
