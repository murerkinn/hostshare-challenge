import { faBars, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import Link from 'next/link'

import Dropdown from './dropdown'
import Logo from './logo'
import SearchBar from './search-bar'

type HeaderProps = {
  isFullWidth?: boolean
  isSearchBarVisible?: boolean
  hiddenOnMobile?: boolean
  actionsMenuHiddenOnMobile?: boolean
}

const Header = ({
  isFullWidth = false,
  isSearchBarVisible = true,
  hiddenOnMobile = false,
  actionsMenuHiddenOnMobile = false,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'header border-b border-b-border-light-gray bg-white py-4',
        hiddenOnMobile && 'hidden md:block'
      )}
    >
      <div className={cn(!isFullWidth && 'container')}>
        <div className="flex flex-row items-center justify-between">
          <Logo />

          {isSearchBarVisible && <SearchBar />}

          <div
            className={cn(
              'flex-row items-center gap-1',
              actionsMenuHiddenOnMobile ? 'hidden md:flex' : 'flex'
            )}
          >
            <Link href="/" className="btn">
              Hostshare your home
            </Link>

            <button className="btn">
              <FontAwesomeIcon icon={faGlobe} />
            </button>

            <Dropdown
              trigger={
                <button className="btn flex flex-row items-center gap-3 rounded-full border border-border-gray p-1 pl-3 ml-1">
                  <FontAwesomeIcon icon={faBars} className="h-4 w-4" />

                  <div className="rounded-full bg-mid-gray w-8 h-8 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-white" />
                  </div>
                </button>
              }
              placement="bottom-end"
              panelClassName="!rounded-xl w-48  "
            >
              <div className="py-2">
                <ul>
                  <li>
                    <Link href="/" className="btn rounded-none w-full">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="btn rounded-none w-full font-normal"
                    >
                      Log in
                    </Link>
                  </li>
                  <li className="py-2">
                    <hr />
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="btn rounded-none w-full font-normal"
                    >
                      Hostshare your home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="btn rounded-none w-full font-normal"
                    >
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
