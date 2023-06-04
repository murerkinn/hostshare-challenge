import cn from 'classnames'

import { Amenity } from '../types'

type AmenityItemProps = {
  amenity: Amenity
}

const AmenityItem = ({ amenity }: AmenityItemProps) => {
  const { title, available } = amenity

  return (
    <div className="flex flex-row items-center gap-4 pb-4">
      <p className={cn('text-base', !available && 'line-through')}>{title}</p>
    </div>
  )
}

export default AmenityItem
