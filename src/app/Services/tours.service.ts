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

  urlBase: string = environment.baseUrl+ApiPaths.tourguide+'/';

  constructor(private readonly client : HttpClient,
    private readonly FGQuery: FormGroupQueryService) { }

  GetTourGuideTours(tourGuideId: string, isCompleted: boolean,
    toursFilter: FormGroup<any>|undefined = undefined) {

    let url = this.urlBase+tourGuideId

    url += isCompleted? ApiPaths.tgPastTours : ApiPaths.tgUpcomingTours

    url += '?'+this.FGQuery.GetQuery(toursFilter)

    return this.client.get(url);
  }

}
