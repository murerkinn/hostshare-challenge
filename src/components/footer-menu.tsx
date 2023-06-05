import cn from 'classnames'
import Link from 'next/link'

import { footerMenuItems } from '@/constants/footer-menu-items'

const FooterMenu = () => {
  return (
    <div className="flex flex-col py-8 md:py-12 md:flex-row">
      {footerMenuItems.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            'flex-1 md:px-3 md:pb-0 md:mb-0 md:border-b-0',
            index !== footerMenuItems.length - 1 &&
              'border-b border-b-border-gray pb-6 mb-6'
          )}
        >
          <h6 className="mb-6 font-medium">{item.title}</h6>

          <ul className="flex gap-4 flex-col">
            {item.links.map(link => (
              <li key={link.title}>
                <Link href={link.href} className="text-sm hover:underline">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FooterMenu
