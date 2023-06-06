import cn from 'classnames'

import AmenityIcons from '@/components/amenity-icons'

import { Amenity } from '../types'

type AmenityItemProps = {
  amenity: Amenity
}

const AmenityItem = ({ amenity }: AmenityItemProps) => {
  const { title, available, type } = amenity

  const Icon = () => AmenityIcons[type as keyof typeof AmenityIcons]

  return (
    <div className="flex flex-row items-center gap-4 pb-4">
      <div className="w-6 h-6">
        <Icon />
      </div>

      <p className={cn('text-base', !available && 'line-through')}>{title}</p>
    </div>
  )
}

export default AmenityItem
