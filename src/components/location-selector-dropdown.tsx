import { Combobox } from '@headlessui/react'
import { useState } from 'react'

import updateQuery from '@/lib/update-query'
import useSearchStore from '@/modules/search/store'

import Dropdown from './dropdown'

const locations = [
  'Terlingua, United States',
  'Telluride, United States',
  'Perryville, United States',
  'Hardwick, United States',
  'Los Angeles, United States',
  'East Point, United States',
  'Hurricane, United States',
  'Kerhonkson, United States',
  'Maryville, United States',
  'West Farmington, United States',
  'Grandview, United States',
  'Lake Arrowhead, United States',
  'Putney, United States',
  'Greentown, United States',
  'La Grange, United States',
  'China Grove, United States',
  'Joshua Tree, United States',
  'Miami, United States',
]

const LocationSelectorDropdown = () => {
  const { location } = useSearchStore()
  const [query, setQuery] = useState('')

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter(location => {
          return location.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Dropdown
      trigger={<button className="btn">{location}</button>}
      placement="bottom-start"
    >
      <Combobox
        value={location}
        onChange={newLocation =>
          updateQuery({ location: encodeURIComponent(newLocation) })
        }
      >
        <Combobox.Input onChange={event => setQuery(event.target.value)} />
        <Combobox.Options>
          {filteredLocations.map(location => (
            <Combobox.Option key={location} value={location}>
              {location}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </Dropdown>
  )
}

export default LocationSelectorDropdown
