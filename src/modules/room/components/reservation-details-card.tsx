import dayjs from 'dayjs'

import Dropdown from '@/components/dropdown'
import formatMoney from '@/lib/format-money'
import useSearchStore from '@/modules/search/store'

type ReservationDetailsCardProps = {
  visibleReviewCount: number
  nightlyPrice: number
}

const ReservationDetailsCard = ({
  visibleReviewCount,
  nightlyPrice,
}: ReservationDetailsCardProps) => {
  const { adultCount, checkinDate, checkoutDate } = useSearchStore()

  const duration = dayjs(checkoutDate).diff(dayjs(checkinDate), 'day')
  const netTotal = nightlyPrice * duration
  const serviceFee = netTotal * 0.15
  const total = netTotal + serviceFee

  return (
    <div
      className="rounded-xl border border-border-gray p-6"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
      }}
    >
      <div className="mb-6 flex flex-row justify-between">
        <div className="text-base">
          <span className="text-section-title font-medium">
            {formatMoney(nightlyPrice)}
          </span>
          &nbsp;night
        </div>

        {visibleReviewCount > 0 && (
          <button className="btn btn-link">
            {visibleReviewCount}{' '}
            {visibleReviewCount === 1 ? 'review' : 'reviews'}
          </button>
        )}
      </div>

      <div className="mb-4 rounded-lg border border-mid-gray">
        <div className="flex flex-row">
          <div className="flex-1 rounded-tl-lg border-r border-r-mid-gray p-3">
            <div className="text-xxs font-medium uppercase text-text-gray">
              Check-in
            </div>
            <div className="text-sm text-mid-gray">
              {dayjs(checkinDate).format('MM/DD/YYYY')}
            </div>
          </div>
          <div className="flex-1 rounded-tr-lg p-3">
            <div className="text-xxs font-medium uppercase text-text-gray">
              Check-out
            </div>
            <div className="text-sm text-mid-gray">
              {dayjs(checkoutDate).format('MM/DD/YYYY')}
            </div>
          </div>
        </div>

        <div className="rounded-bl-lg rounded-br-lg border-t border-t-mid-gray p-3">
          <div className="text-xxs font-medium uppercase text-text-gray">
            Guests
          </div>
          <div className="text-sm text-mid-gray">
            {adultCount} {adultCount === 1 ? 'guest' : 'guests'}
          </div>
        </div>
      </div>

      <button className="btn btn-primary mb-2 w-full justify-center">
        Reserve
      </button>

      <p className="mb-6 text-center text-sm">You won't be charged yet</p>

      <ul>
        <li className="mb-4 flex flex-row items-center justify-between">
          <Dropdown
            trigger={
              <button className="btn btn-link p-0 text-base font-normal">
                <span>
                  {formatMoney(nightlyPrice)} x {duration} nights
                </span>
              </button>
            }
            placement="top-end"
            panelClassName="w-[400px]"
          >
            <div className="border-b border-b-border-mid-gray p-6">
              <h3 className="text-center text-base font-bold">
                Base Price Breakdown
              </h3>
            </div>

            <div className="p-6">
              <ul>
                {Array.from({ length: duration }).map((_, i) => (
                  <li key={i} className="mb-4 flex flex-row justify-between">
                    <span className="text-base">
                      {dayjs(checkinDate).add(i, 'day').format('DD/MM/YYYY')}
                    </span>
                    <span className="text-base">
                      {formatMoney(nightlyPrice)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-row justify-between border-t border-t-border-gray pt-6">
                <span className="text-base font-medium">Total Base Price</span>
                <span className="text-base font-medium">
                  {formatMoney(netTotal)}
                </span>
              </div>
            </div>
          </Dropdown>

          <span className="text-base">{formatMoney(netTotal)}</span>
        </li>

        <li className="flex flex-row items-center justify-between">
          <Dropdown
            trigger={
              <button className="btn btn-link p-0 text-base font-normal">
                <span>Hostshare service fee</span>
              </button>
            }
            placement="top-end"
            panelClassName="w-[400px]"
          >
            <div className="p-6">
              <p className="text-sm">
                This helps us run our platform and offer services like 24/7
                support on your trip. This includes VAT.
              </p>
            </div>
          </Dropdown>
          <span>{formatMoney(serviceFee)}</span>
        </li>
      </ul>

      <div className="mt-6 flex flex-row items-center justify-between border-t border-t-border-gray pt-6">
        <span className="text-base font-medium">Total before taxes</span>
        <span className="text-base">{formatMoney(total)}</span>
      </div>
    </div>
  )
}

export default ReservationDetailsCard
