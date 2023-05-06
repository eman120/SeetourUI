import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { ToursService } from './tours.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient, private tours: ToursService) { }

  private baseUrl = environment.baseUrl+ApiPaths.favorites

  ToggleFavorite(tourGuideId: string, isFavorite: boolean) {
    if (isFavorite) {
      return this.http.post(this.baseUrl, {tourGuideId})
    }
    else {
      return this.http.delete(this.baseUrl+'/'+tourGuideId)
    }
  }

  isFavorite(tourGuideId: string) {
    return this.http.get(this.baseUrl+'/'+tourGuideId)
  }

  GetTours(filter: FormGroup<any>) {
    let url = this.baseUrl+ApiPaths.tour;
    return this.tours.FilterTours(url, filter);
  }
}
