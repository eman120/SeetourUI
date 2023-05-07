import { ReviewCard } from "./review-card";

export interface TourDet {
    id: number,
    photos: string[],
    locationTo: string,
    locationFrom: string,
    tourguideId: string,
    price: number,
    likes: number,
    bookings: number,
    capacity: number,
    dateFrom: string,
    dateTo: string,
    title: string,
    hasTransportation: boolean,
    description:string,
    reviews: ReviewCard[]
  }
