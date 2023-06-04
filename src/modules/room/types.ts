type Currency = {
  code: string
  name: string
  symbol: string
}

type Country = {
  code: string
  title: string
}

export type Location = {
  address: string
  city: string
  zip: string
  country: Country
  lat: number
  long: number
}

export type Image = {
  aspectRatio: number
  height: number
  mimeType: string
  orientation: string
  type: string
  url: string
  width: number
}

export type Host = {
  avatar: Image
  isSuperHost: boolean
  name: string
}

type Ratings = {
  accuracy: number
  checkin: number
  cleanliness: number
  communication: number
  guestSatisfactionOverall: number
  location: number
  value: number
}

export type Amenity = {
  available: boolean
  group: string
  title: string
  type: string
}

export type ListingAmenities = {
  count: number
  data: Amenity[]
}

export type ListingImages = {
  count: number
  data: Image[]
}

export type ListingDetail = {
  type: string
  value: number
}

export type ListingDetails = {
  count: number
  data: ListingDetail[]
}

type ListingInfo = {
  id: string
  available: boolean
  title: string
  description: string
  type: string
  maxGuestCapacity: number
  price: number
  currency: Currency
  location: Location
  mainImage: Image
  images: ListingImages
  amenities: ListingAmenities
  host: Host
  ratings: Ratings
  visibleReviewCount: number
  details: ListingDetails
}

export type Listing = {
  info: ListingInfo
  ref: string
}
