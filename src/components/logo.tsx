import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/img/logo-green.png"
        alt="Logo"
        className="hidden md:block h-12"
      />
      <img
        src="/img/logo-icon.png"
        alt="Logo"
        className="block md:hidden h-8"
      />
    </Link>
  )
}

export default Logo
