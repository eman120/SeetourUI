export interface ReviewCard {
  Id: number,
  TourId: number,
  TourGuideId: number,
  CustomerName: string,
  ReviewText: string,
  Rating: number,
  CreatedAt: string,
  Photos: string[],
}
