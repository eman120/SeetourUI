export interface ReviewCard {
  Id: number,
  BookedTourId: number,
  BookedTourTitle: string,
  TourGuideId: string,
  CustomerName: string,
  Comment: string,
  Rating: number,
  CreatedAt: string,
  Photos: string[],
}
