import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewDto } from '../Interfaces/review-dto';
import { CustomerTourSave } from '../Interfaces/customer-tour-save';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly http:HttpClient) { }

  private baseUrl = environment.baseUrl+ApiPaths.customer

  GetIsCompletedBookings(urlSegment:string) {
    let url = this.baseUrl+ApiPaths.customerTour + urlSegment;
    return this.http.get(url);
  }

  GetBookedTourIdToReview(tourId: number) {
    let url = this.baseUrl+ApiPaths.customerTour + '/' + tourId + ApiPaths.customerTourReview+ApiPaths.customerTourReviewcheck;
    return this.http.get(url);
  }

  PostBookedTourReview(files: FormData) {
    let url = this.baseUrl+ApiPaths.customerTour+ApiPaths.customerTourReview;
    return this.http.post(url, files);
  }

  PostTourLike(like: CustomerTourSave) {
    let url = this.baseUrl+ApiPaths.customerTour+ApiPaths.customerTourLike;
    return this.http.post(url, like);
  }

  PostTourWish(wish: CustomerTourSave) {
    let url = this.baseUrl+ApiPaths.customerTour+ApiPaths.customerTourWish;
    return this.http.post(url, wish);
  }

  isWishlisted(TourId: number) {
    let url = this.baseUrl+ApiPaths.customerTour+ApiPaths.customerTourWish+'/'+TourId;
    return this.http.get(url);
  }

  isLiked(TourId: number) {
    let url = this.baseUrl+ApiPaths.customerTour+ApiPaths.customerTourLike+'/'+TourId;
    return this.http.get(url);
  }
}
