import { Popover, Portal } from '@headlessui/react'
import cn from 'classnames'
import React, { Fragment, useState } from 'react'
import { usePopper } from 'react-popper'

type DropdownProps = {
  trigger: React.ReactNode
  offset?: number
  children: React.ReactNode
  className?: string
  panelClassName?: string
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'bottom'
}

const Dropdown = ({
  trigger,
  children,
  offset = 10,
  className,
  panelClassName,
  placement = 'bottom-start',
}: DropdownProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, offset],
        },
      },
    ],
  })

  return (
    <Popover className={cn('relative', className)}>
      <Popover.Button as={Fragment} ref={setReferenceElement}>
        {trigger}
      </Popover.Button>

      {/* <Popover.Overlay className="fixed inset-0 z-40 " /> */}

      <Portal>
        <Popover.Panel
          ref={setPopperElement}
          style={{ ...styles.popper, boxShadow: '0 8px 28px rgba(0,0,0,0.28)' }}
          {...attributes.popper}
          className={cn('z-40 w-screen max-w-md rounded-xl', panelClassName)}
        >
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white shadow-2xl">
            {children}
          </div>
        </Popover.Panel>
      </Portal>
    </Popover>
  )
}

export default Dropdown
