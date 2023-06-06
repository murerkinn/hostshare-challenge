/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react'

type DatePickerContextType = {
  focusedDate: null | Date
  startDate: null | Date
  endDate: null | Date
  isDateFocused: (date: Date) => boolean
  isDateSelected: (date: Date) => boolean
  isDateHovered: (date: Date) => boolean
  isFirstOrLastSelectedDate: (date: Date) => boolean
  isDateBlocked: (date: Date) => boolean
  onDateFocus: (date: Date) => void
  onDateHover: (date: Date) => void
  onDateSelect: (date: Date) => void
}

export const DatePickerContext = createContext<DatePickerContextType>({
  focusedDate: null,
  startDate: null,
  endDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
})
