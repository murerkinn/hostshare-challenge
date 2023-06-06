import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

import updateQuery from '@/lib/update-query'

import DatePickerDropdown from './datepicker/dropdown'
import Dropdown from './dropdown'
import GuestSelectorDropdown from './guest-selector-dropdown'
import LocationSelectorDropdown from './location-selector-dropdown'

const SearchBar = () => {
  const router = useRouter()

  const onClickSearch = () => {
    router.push({
      pathname: '/search',
      query: router.query,
    })
  }

  return (
    <div>
      <Dropdown
        trigger={
          <div className="search-bar transition-all rounded-full flex items-center justify-between font-medium p-2 bg-white border border-border-gray w-[300px]">
            <span className="text-sm px-4 cursor-pointer">
              Start your search
            </span>

            <button
              className="rounded-full text-white flex items-center justify-center bg-primary w-8 h-8"
              onClick={onClickSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        }
        placement="bottom"
        panelClassName="!rounded-full overflow-hidden"
      >
        <div className="flex flex-row p-4 items-center rounded-full">
          <LocationSelectorDropdown />
          <span className="mx-2">|</span>
          <DatePickerDropdown
            startDate={null}
            endDate={null}
            onChange={({ startDate, endDate }) => {
              updateQuery({
                checkinDate: startDate
                  ? dayjs(startDate).format('YYYY-MM-DD')
                  : undefined,
              })
              updateQuery({
                checkoutDate: endDate
                  ? dayjs(endDate).format('YYYY-MM-DD')
                  : undefined,
              })
            }}
          />
          <span className="mx-2">|</span>
          <GuestSelectorDropdown />
        </div>
      </Dropdown>
    </div>
  )
}

export default SearchBar
