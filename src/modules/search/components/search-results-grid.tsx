import cn from 'classnames'
import { useMemo } from 'react'

import useSearchStore from '../store'
import SearchResultItem from './search-result-item'

type SearchResultsGridProps = {
  maxColNum?: number
}

const SearchResultsGrid = ({ maxColNum = 3 }: SearchResultsGridProps) => {
  const { listings } = useSearchStore()

  const gridColClassnames = useMemo(() => {
    if (maxColNum === 5)
      return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'

    if (maxColNum === 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '
  }, [maxColNum])

  return (
    <div className={cn('grid gap-x-6 gap-y-10', gridColClassnames)}>
      {listings.map(listing => (
        <SearchResultItem key={listing.info.id} listing={listing} />
      ))}
    </div>
  )
}

export default SearchResultsGrid
