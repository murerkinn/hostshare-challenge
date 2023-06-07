import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch as HeadlessUISwitch } from '@headlessui/react'
import cn from 'classnames'

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const Switch = ({ checked = false, onChange }: SwitchProps) => {
  return (
    <HeadlessUISwitch
      checked={checked}
      onChange={onChange}
      className={cn(
        'relative inline-flex h-8 w-12 items-center rounded-full transition-all px-0.5',
        checked ? 'bg-black' : 'bg-switch-bg hover:bg-mid-gray'
      )}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          checked ? 'translate-x-4' : 'translate-x-0'
        } inline-block h-7 w-7 transform rounded-full bg-white transition`}
      >
        {checked && (
          <FontAwesomeIcon
            icon={faCheck}
            style={{ verticalAlign: 'middle' }}
            width={12}
          />
        )}
      </span>
    </HeadlessUISwitch>
  )
}

export default Switch
