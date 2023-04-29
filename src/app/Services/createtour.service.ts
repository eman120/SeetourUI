import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
@Injectable({
  providedIn: 'root'
})
export class CreatetourService {

  constructor(private readonly http:HttpClient) { }
CreateTour(Tour:any)
{
  return this.http.post(environment.baseUrl+ApiPaths.createtour,Tour);
}
}
