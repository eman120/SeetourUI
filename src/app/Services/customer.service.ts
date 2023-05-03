import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { HttpClient } from '@angular/common/http';

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
}
