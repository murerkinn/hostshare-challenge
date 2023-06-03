import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { useState } from 'react'

const TotalPriceSwitch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="mx-auto flex max-w-[50%] flex-row items-center justify-between rounded-xl border border-border-gray p-4">
      <div>
        <span className="text-base font-medium">Display total price</span>
        <span className="ml-3 border-l border-l-border-gray pl-4 text-base">
          Includes all fees, before taxes
        </span>
      </div>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full',
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}

export default TotalPriceSwitch
