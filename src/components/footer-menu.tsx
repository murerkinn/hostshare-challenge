import Link from 'next/link'

import { footerMenuItems } from '@/constants/footer-menu-items'

const FooterMenu = () => {
  return (
    <div className="flex flex-col py-12 md:flex-row">
      {footerMenuItems.map(item => (
        <div key={item.title} className="flex-1 px-3">
          <h6 className="mb-6 font-medium">{item.title}</h6>

          <ul className="flex flex-row gap-4 md:flex-col">
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
