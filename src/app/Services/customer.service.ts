import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewDto } from '../Interfaces/review-dto';

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

    //const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post(url, files);
  }
}
