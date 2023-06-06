import dayjs from 'dayjs'

import Dropdown from '../dropdown'
import DatePicker from '.'

type Props = {
  startDate?: Date | null
  endDate?: Date | null
  onChange?: (dates: { startDate: Date | null; endDate: Date | null }) => void
}

const DatePickerDropdown = ({ startDate, endDate, onChange }: Props) => {
  return (
    <Dropdown
      placement="bottom-end"
      panelClassName="!max-w-none !w-auto"
      trigger={
        <button>
          {startDate && endDate
            ? [
                dayjs(startDate).isValid()
                  ? dayjs(startDate).format('MMM D, YYYY')
                  : null,
                dayjs(endDate).isValid()
                  ? dayjs(endDate).format('MMM D, YYYY')
                  : null,
              ]
                .filter(Boolean)
                .join(' — ')
            : 'Select dates'}
        </button>
      }
    >
      <div className="overflow-hidden rounded-xl">
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onChange={onChange}
        />
      </div>
    </Dropdown>
  )
}

export default DatePickerDropdown
