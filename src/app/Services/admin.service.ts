import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlBase: string = environment.baseUrl;

  constructor(private readonly client : HttpClient,
  private route: ActivatedRoute) {}

  GetTourRequests() {

    let url = this.urlBase+ApiPaths.admin+ApiPaths.adminTour+ApiPaths.adminTourRequest;

    return this.client.get(url);
  }
}
