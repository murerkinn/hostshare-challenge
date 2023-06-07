import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog } from '@headlessui/react'
import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Switch from '@/components/switch'
import updateQuery from '@/lib/update-query'

const FilterModal = () => {
  const { query } = useRouter()

  const [instantBookingEnabled, setInstantBookingEnabled] = useState(false)
  const [selfCheckInEnabled, setSelfCheckInEnabled] = useState(false)
  const [freeCancellationEnabled, setFreeCancellationEnabled] = useState(false)

  const hoverableClassnames =
    'cursor-pointer border border-border-gray transition-all hover:border-text-gray'

  return (
    <Dialog
      open={query.modal === 'filters'}
      onClose={() => updateQuery({ modal: undefined })}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 ">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto rounded-xl max-h-[760px] max-w-3xl w-full overflow-hidden relative bg-white">
            <div className="flex flex-row w-full items-center justify-between h-16 border-b border-b-border-gray px-6 bg-white">
              <button
                className="btn btn-link"
                onClick={() => updateQuery({ modal: undefined })}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <Dialog.Title className="font-semibold">Filters</Dialog.Title>
              <div></div>
            </div>

            <div className="overflow-y-scroll max-h-[616px]">
              <div className="px-6 py-8 border-b border-b-border-mid-gray">
                <h2 className="mb-6 font-medium text-section-title">
                  Rooms and beds
                </h2>

                <div className="mb-4">
                  <h3 className="mb-5 text-base">Bedrooms</h3>
                  <div className="flex flex-row gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <button
                        key={i}
                        className={cn(
                          'py-[10px] px-[20px] rounded-full',
                          hoverableClassnames
                        )}
                      >
                        {i === 0 ? 'Any' : i === 8 ? '8+' : i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-5 text-base">Beds</h3>
                  <div className="flex flex-row gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <button
                        key={i}
                        className={cn(
                          'py-[10px] px-[20px] rounded-full',
                          hoverableClassnames
                        )}
                      >
                        {i === 0 ? 'Any' : i === 8 ? '8+' : i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-5 text-base">Bathrooms</h3>
                  <div className="flex flex-row gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <button
                        key={i}
                        className={cn(
                          'py-[10px] px-[20px] rounded-full',
                          hoverableClassnames
                        )}
                      >
                        {i === 0 ? 'Any' : i === 8 ? '8+' : i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 border-b border-b-border-mid-gray">
                <h2 className="mb-6 font-medium text-section-title">
                  Property type
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div
                    className={cn(
                      'p-4 flex flex-col justify-between h-32 rounded-xl',
                      hoverableClassnames
                    )}
                  >
                    <Image
                      src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                      alt="House icon"
                      width={32}
                      height={32}
                    />

                    <span className="font-medium">House</span>
                  </div>

                  <div
                    className={cn(
                      'p-4 flex flex-col justify-between h-32 rounded-xl',
                      hoverableClassnames
                    )}
                  >
                    <Image
                      src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg"
                      alt="Apartment icon"
                      width={32}
                      height={32}
                    />

                    <span className="font-medium">Apartment</span>
                  </div>

                  <div
                    className={cn(
                      'p-4 flex flex-col justify-between h-32 rounded-xl',
                      hoverableClassnames
                    )}
                  >
                    <Image
                      src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg"
                      alt="Guesthouse icon"
                      width={32}
                      height={32}
                    />

                    <span className="font-medium">Guesthouse</span>
                  </div>

                  <div
                    className={cn(
                      'p-4 flex flex-col justify-between h-32 rounded-xl',
                      hoverableClassnames
                    )}
                  >
                    <Image
                      src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg"
                      alt="Hotel icon"
                      width={32}
                      height={32}
                    />

                    <span className="font-medium">Hotel</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 border-b border-b-border-mid-gray">
                <h2 className="mb-6 font-medium text-section-title">
                  Booking options
                </h2>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Instant book</p>
                    <p className="text-sm text-mid-gray">
                      Listings you can book without waiting for Host approval
                    </p>
                  </div>

                  <Switch
                    checked={instantBookingEnabled}
                    onChange={setInstantBookingEnabled}
                  />
                </div>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Self check-in</p>
                    <p className="text-sm text-mid-gray">
                      Easy access to the property once you arrive
                    </p>
                  </div>

                  <Switch
                    checked={selfCheckInEnabled}
                    onChange={setSelfCheckInEnabled}
                  />
                </div>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Free cancellation</p>
                    <p className="text-sm text-mid-gray">
                      Only show stays that offer free cancellation
                    </p>
                  </div>

                  <Switch
                    checked={freeCancellationEnabled}
                    onChange={setFreeCancellationEnabled}
                  />
                </div>
              </div>

              <div className="px-6 py-8 border-b border-b-border-mid-gray">
                <h2 className="mb-6 font-medium text-section-title">
                  Top tier stays
                </h2>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Superhost</p>
                    <p className="text-sm text-mid-gray mb-1">
                      Stay with recognized Hosts
                    </p>
                    <button className="btn btn-link p-0">
                      <span>Learn more</span>
                    </button>
                  </div>

                  <Switch
                    checked={selfCheckInEnabled}
                    onChange={setSelfCheckInEnabled}
                  />
                </div>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Airbnb Plus</p>
                    <p className="text-sm text-mid-gray">
                      Every Plus home is reviewed for quality
                    </p>
                  </div>

                  <Switch
                    checked={selfCheckInEnabled}
                    onChange={setSelfCheckInEnabled}
                  />
                </div>

                <div className="flex flex-row justify-between items-center py-3">
                  <div className="cursor-default">
                    <p className="text-base mb-1">Airbnb Luxe</p>
                    <p className="text-sm text-mid-gray">
                      Handpicked luxury homes with personally arranged services
                    </p>
                  </div>

                  <Switch
                    checked={selfCheckInEnabled}
                    onChange={setSelfCheckInEnabled}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 w-full flex flex-row items-center border-t border-t-border-gray justify-between bg-white">
              <button className="btn btn-link btn-lg pl-0">
                <span>Clear all</span>
              </button>

              <button className="bg-text-gray hover:bg-black text-white px-6 py-4 rounded-lg">
                Show 1,000+ places
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default FilterModal
