import Link from 'next/link'

import FooterMenu from './footer-menu'

const Footer = () => {
  return (
    <footer className="footer border-t border-t-border-gray bg-btn-hover">
      <div className="container">
        <FooterMenu />

        <div className="flex flex-row border-t border-t-border-gray py-6">
          <ul className="flex flex-row gap-2">
            <li></li>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Sitemap</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
