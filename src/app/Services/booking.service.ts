import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private readonly http:HttpClient) { }

  private baseUrl = environment.baseUrl+ApiPaths.booking

  CancelBooking(id: number) {
    let url = this.baseUrl+'/'+id;
    return this.http.delete(url);
  }
}
