import { PostingStatus } from "../Enums/posting-status";

export interface AdminPostStatus {
  TourId: number,
  Status: PostingStatus,
  EditRequest: string
}
