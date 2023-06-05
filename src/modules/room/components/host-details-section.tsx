import Link from 'next/link'

import { Host } from '../types'

type HostDetailsSectionProps = {
  host: Host
}

const HostDetailsSection = ({ host }: HostDetailsSectionProps) => {
  return (
    <section className="border-t border-t-border-gray py-12">
      <div className="max-w-md">
        <div className="mb-6 flex flex-row items-center gap-4">
          <img
            src={host.avatar.url}
            alt={`${host.name} Avatar`}
            className="h-16 w-16 rounded-full"
          />

          <div>
            <h2 className="mb-2 text-section-title font-medium">{host.name}</h2>
            <p className="font-light" style={{ color: 'rgb(113, 113, 113)' }}>
              Joined in October 2016
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-row gap-6">
          <p>126 Reviews</p>
          <p>Identity Verified</p>
        </div>

        <h3 className="mb-2 font-medium">During your stay</h3>

        <p className="mb-6 text-base leading-6">
          We respect and value the privacy of our guests, and as such, you can
          expect a secluded and undisturbed stay with us. Should you require any
          assistance, our property manager is readily available to assist you
          with any needs or concerns. Simply send us a message on AirBNB, and we
          will make every effort to respond promptly and attend to your needs,
          24 hours a day, 7 days a week. We encourage you to reach out to us for
          any assistance you may require.
        </p>

        <ul className="mb-8">
          <li className="mb-4">Languages: English</li>
          <li className="mb-4">Response rate: 88%</li>
          <li>Response time: within an hour</li>
        </ul>

        <Link href="/" className="btn btn-secondary btn-lg mb-6">
          Contact Host
        </Link>

        <p className="text-xs">
          To protect your payment, never transfer money or communicate outside
          of the Hostshare website or app.
        </p>
      </div>
    </section>
  )
}

export default HostDetailsSection
