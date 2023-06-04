import cn from 'classnames'
import Link from 'next/link'

import SearchBar from './search-bar'

type HeaderProps = {
  isFullWidth?: boolean
}

const Header = ({ isFullWidth = false }: HeaderProps) => {
  return (
    <header className="header border-b border-b-border-light-gray bg-white py-4">
      <div className={cn(!isFullWidth && 'container')}>
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <img
              src="/img/logo-green.png"
              alt="Hostshare logo"
              className="h-12"
            />
          </Link>

          <SearchBar />

          <div className="flex flex-row gap-1">
            <Link href="/" className="btn">
              Hostshare your home
            </Link>

            <button></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header