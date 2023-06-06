import { useDay } from '@datepicker-react/hooks'
import cn from 'classnames'
import dayjs from 'dayjs'
import { useContext, useRef } from 'react'

import { DatePickerContext } from './context'

export type Day = { date: Date; dayLabel: string }

type Props = {
  day: number | Day
  date: Date
}

const DatePickerDay = ({ day, date }: Props) => {
  const dayRef = useRef(null)
  const {
    focusedDate,
    startDate,
    endDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatePickerContext)
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  })

  if (typeof day === 'number') {
    return (
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-center"></div>
    )
  }

  return (
    <button
      type="button"
      ref={dayRef}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      tabIndex={tabIndex}
      className={cn(
        'relative isolate flex h-10 w-10 flex-col items-center justify-center gap-0.5 text-center text-sm/sm text-gray-700',
        'last:rounded-r-full first-of-type:rounded-l-full hover:rounded-r-full',
        {
          'font-medium text-white before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-primary':
            isSelectedStartOrEnd,
          'bg-gray-50 font-medium':
            isSelected ||
            isWithinHoverRange ||
            isSelectedStartOrEnd ||
            isDateHovered(day.date),
          'rounded-l-full':
            startDate &&
            (dayjs(startDate).isSame(day.date, 'day') ||
              dayjs(day.date).diff(dayjs(day.date).startOf('week'), 'day') ===
                1),
          'rounded-r-full':
            endDate &&
            (dayjs(endDate).isSame(day.date, 'day') ||
              dayjs(day.date).diff(dayjs(day.date).endOf('week'), 'day') ===
                -6),
        }
      )}
    >
      {day.date.getDate()}

      {dayjs(day.date).isSame(dayjs(), 'day') && (
        <div
          className={cn(
            'absolute bottom-1 left-1/2 h-[5px] w-[5px] flex-shrink-0 -translate-x-1/2 rounded-full',
            isSelectedStartOrEnd ? 'bg-white' : 'bg-primary'
          )}
        />
      )}
    </button>
  )
}

export default DatePickerDay
