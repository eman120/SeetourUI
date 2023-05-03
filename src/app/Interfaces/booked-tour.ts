import { TourCard } from "./tour-card";

export interface BookedTour {
  id:number,
  createdAt:string,
  seats:number,
  canCancel:number,
  tourCard: TourCard
}
