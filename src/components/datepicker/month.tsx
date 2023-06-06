import { useMonth, UseMonthProps } from '@datepicker-react/hooks'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DatePickerDay, { Day } from './day'

type Props = Pick<UseMonthProps, 'year' | 'month' | 'firstDayOfWeek'> & {
  goToPreviousMonths: () => void
  goToNextMonths: () => void
}

const DatePickerMonth = ({
  year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths,
}: Props) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  return (
    <div className="flex flex-col gap-3 px-6 py-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="p-2 text-xl text-gray-500"
          onClick={goToPreviousMonths}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p className="text-md/md font-semibold text-gray-700">{monthLabel}</p>
        <button
          type="button"
          className="p-2 text-xl text-gray-500"
          onClick={goToNextMonths}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-7">
          {weekdayLabels.map(weekDay => (
            <div
              key={weekDay}
              className="flex h-10 w-10 items-center justify-center text-center text-sm/sm font-medium text-gray-700"
            >
              {weekDay}
            </div>
          ))}
        </div>

        <div className="grid grid-flow-row grid-cols-7 gap-y-1">
          {days.map((day, index) => {
            return (
              <DatePickerDay key={index} day={day} date={(day as Day).date} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DatePickerMonth
