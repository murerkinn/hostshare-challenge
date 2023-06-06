import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import updateQuery from '@/lib/update-query'
import useSearchStore from '@/modules/search/store'

import Dropdown from './dropdown'

const GuestSelectorDropdown = () => {
  const { adultCount, childCount } = useSearchStore()

  const increaseAdultCount = () => {
    updateQuery({ adultCount: (adultCount + 1).toString() })
  }

  const decreaseAdultCount = () => {
    if (adultCount === 1) return

    updateQuery({ adultCount: (adultCount - 1).toString() })
  }

  const increaseChildCount = () => {
    updateQuery({ childCount: (childCount + 1).toString() })
  }

  const decreaseChildCount = () => {
    if (childCount === 0) return

    updateQuery({ childCount: (childCount - 1).toString() })
  }

  return (
    <Dropdown
      trigger={<button>{adultCount + childCount} Guests</button>}
      panelClassName="!rounded-[32px] w-[400px] overflow-hidden"
    >
      <div className="py-4 px-8">
        <div className="flex flex-row items-center justify-between py-6 border-b border-b-border-mid-gray">
          <div>
            <h3 className="text-base font-medium mb-2">Adults</h3>
            <p className="text-sm text-mid-gray">Age 13 or above</p>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <button
              className="btn btn-icon-only !shadow-none border border-border-gray"
              onClick={decreaseAdultCount}
              disabled={adultCount === 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <span>{adultCount}</span>

            <button
              className="btn btn-icon-only !shadow-none border border-border-gray"
              onClick={increaseAdultCount}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between py-6">
          <div>
            <h3 className="text-base font-medium mb-2">Children</h3>
            <p className="text-sm text-mid-gray">Ages 2&mdash;12</p>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button
              className="btn btn-icon-only !shadow-none border border-border-gray"
              onClick={decreaseChildCount}
              disabled={childCount === 0}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <span>{childCount}</span>

            <button
              className="btn btn-icon-only !shadow-none border border-border-gray"
              onClick={increaseChildCount}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </Dropdown>
  )
}

export default GuestSelectorDropdown
