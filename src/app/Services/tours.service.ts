import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { FormGroup } from '@angular/forms';
import { FormGroupQueryService } from './form-group-query.service';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  urlBase: string = environment.baseUrl;
  queryParams: URLSearchParams = new URLSearchParams;

  constructor(private readonly client : HttpClient,
    private route: ActivatedRoute,
    private readonly FGQuery: FormGroupQueryService) {
    }

    GetTours(isCompleted: boolean,
      toursFilter: FormGroup<any>|undefined = undefined) {

        let url = this.urlBase+ApiPaths.tour;

        url += isCompleted? ApiPaths.tourPast : ApiPaths.tourUpcoming;

        return this.FilterTours(url, toursFilter);
  }

  getTrending() {
    let url = this.urlBase+ApiPaths.tour+ApiPaths.tourTrending;

    return this.client.get(url);
  }

  public FilterTours(url: string, toursFilter: FormGroup<any> | undefined) {

    this.queryParams = new URLSearchParams(this.route.snapshot.queryParams);

    if (toursFilter)
    {
      Object.entries(toursFilter.value).forEach ((entry) => {
        if (entry[1])
          this.queryParams.append(entry[0], entry[1] as string);
      });
    }

    this.queryParams.forEach((key, value) => {
      if (key.startsWith('Sort'))
        this.queryParams.delete(key);
    });

    url += '?' + this.queryParams.toString();
    return  this.client.get(url);
  }

  GetTourGuideTours(tourGuideId: string, isCompleted: boolean,
    toursFilter: FormGroup<any>|undefined = undefined) {

    let url = this.urlBase+ApiPaths.tourguide+'/'+tourGuideId

    url += isCompleted? ApiPaths.tgPastTours : ApiPaths.tgUpcomingTours;

    return this.FilterTours(url, toursFilter);
  }

  GetTourById(tourId: string) {
    const tourIdNum = Number(tourId);
    let url = this.urlBase+ApiPaths.tourDet+'?id='+tourIdNum;
    return this.client.get(url);
  }

}
