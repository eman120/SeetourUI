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
export class DashboardstatisticsService {

  // urlBase: string = environment.baseUrl;

  // constructor(private http: HttpClient) { }

  // getStatistics(): Observable<any> {
  //   const url = `${this.urlBase}${ApiPaths.Statistics}`;
  //   return this.http.get(url);
  // }
}
