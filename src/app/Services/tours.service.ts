import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { FormGroup } from '@angular/forms';
import { FormGroupQueryService } from './form-group-query.service';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  urlBase: string = environment.baseUrl;

  constructor(private readonly client : HttpClient,
    private readonly FGQuery: FormGroupQueryService) { }

  GetTours(isCompleted: boolean,
    toursFilter: FormGroup<any>|undefined = undefined) {

      let url = this.urlBase+ApiPaths.tour;

      url += isCompleted? ApiPaths.tourPast : ApiPaths.tourUpcoming;

      return this.FilterTours(url, toursFilter);
  }

  private FilterTours(url: string, toursFilter: FormGroup<any> | undefined) {
    url += '?' + this.FGQuery.GetQuery(toursFilter);
    return  this.client.get(url);
  }

  GetTourGuideTours(tourGuideId: string, isCompleted: boolean,
    toursFilter: FormGroup<any>|undefined = undefined) {

    let url = this.urlBase+ApiPaths.tourguide+'/'+tourGuideId

    url += isCompleted? ApiPaths.tgPastTours : ApiPaths.tgUpcomingTours;

    return this.FilterTours(url, toursFilter);
  }

}
