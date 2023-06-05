import { Image } from '../types'

type ImageGalleryProps = {
  images: Image[]
}

const buttonClasses =
  'relative h-full cursor-pointer after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-text-gray after:opacity-0 after:transition-all hover:after:opacity-20'
const imgClasses = 'h-full w-full object-cover'

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const mainImage = images[0]
  const imagesToShow = images.slice(1, 5)

  return (
    <section className="hidden md:block relative">
      <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
        <div>
          <button className={buttonClasses}>
            <img src={mainImage.url} alt="" className={imgClasses} />
          </button>
        </div>

        <div className="grid grid-cols-2 grid-rows-[220px_220px] gap-2">
          {imagesToShow.map(image => (
            <button key={image.url} className={buttonClasses}>
              <img src={image.url} alt="" className={imgClasses} />
            </button>
          ))}
        </div>
      </div>

      <button className="btn btn-secondary absolute bottom-6 right-6">
        Show all photos
      </button>
    </section>
  )
}

export default ImageGallery
