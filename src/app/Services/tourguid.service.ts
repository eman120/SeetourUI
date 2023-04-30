import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourguidService {

  constructor(private readonly client : HttpClient) { }
  private readonly URL = "";


  AddNewTourGuid(tourGuid:any){
    return this.client.post(this.URL, tourGuid);
  }

}
