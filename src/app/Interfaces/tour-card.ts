export interface TourCard {
  Id: number,
  Photos: string[],
  LocationTo: string,
  Price: number,
  Likes: number,
  isLiked: boolean,
  Bookings: number,
  Capacity: number,
  TourGuideId: string,
  TourGuideName: string,
  TourGuideRating: number,
  TourGuideRatingCount: number,
  DateFrom: string,
  DateTo: string,
  Category: string,
  Title: string,
  AddedToWishList: boolean,
}
