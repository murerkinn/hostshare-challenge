import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { useCallback, useState } from 'react'

dayjs.extend(isoWeek)

import { DatePickerContext } from './context'
import DatePickerMonth from './month'

type Props = {
  startDate?: Date | null
  endDate?: Date | null
  onChange?: (dates: { startDate: Date | null; endDate: Date | null }) => void
}

const DatePicker = ({ startDate = null, endDate = null, onChange }: Props) => {
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: startDate && dayjs(startDate).isValid() ? startDate : null,
    endDate: endDate && dayjs(endDate).isValid() ? endDate : null,
    focusedInput: START_DATE,
  })

  const onDatesChange = useCallback(
    (data: OnDatesChangeProps) => {
      setState({
        startDate: data.startDate
          ? dayjs(data.startDate).startOf('day').toDate()
          : null,
        endDate: data.endDate
          ? dayjs(data.endDate).endOf('day').toDate()
          : null,
        focusedInput: data.focusedInput || START_DATE,
      })

      if (onChange) {
        onChange({
          startDate: data.startDate,
          endDate: data.endDate,
        })
      }
    },
    [onChange]
  )

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    initialVisibleMonth: state.startDate || new Date(),
    onDatesChange,
    changeActiveMonthOnSelect: false,
  })

  return (
    <DatePickerContext.Provider
      value={{
        focusedDate,
        startDate: state.startDate,
        endDate: state.endDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div className="flex divide-x divide-gray-200 bg-white">
        <div className="flex flex-col divide-y divide-gray-200">
          <div className="flex justify-start divide-x divide-gray-200">
            {activeMonths.map(({ year, month }) => (
              <DatePickerMonth
                key={`${year}-${month}`}
                year={year}
                month={month}
                firstDayOfWeek={firstDayOfWeek}
                goToNextMonths={goToNextMonthsByOneMonth}
                goToPreviousMonths={goToPreviousMonthsByOneMonth}
              />
            ))}
          </div>
        </div>
      </div>
    </DatePickerContext.Provider>
  )
}

export default DatePicker
