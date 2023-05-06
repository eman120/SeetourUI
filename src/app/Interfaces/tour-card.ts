export interface TourCard {
  id: number,
  photos: string[],
  locationTo: string,
  price: number,
  likes: number,
  isLiked: boolean,
  bookings: number,
  capacity: number,
  tourGuideId: string,
  tourGuideName: string,
  tourGuideRating: number,
  tourGuideRatingCount: number,
  dateFrom: string,
  dateTo: string,
  category: string,
  title: string,
  addedToWishList: boolean
}
