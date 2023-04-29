export interface ReviewCard {
  id: number,
  bookedTourId: number,
  bookedTourTitle: string,
  tourGuideId: string,
  customerName: string,
  comment: string,
  rating: number,
  createdAt: string,
  photos: string[],
}
