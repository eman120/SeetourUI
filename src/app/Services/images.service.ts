import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor( private readonly imagesClient:HttpClient) { }
  private readonly URL="http://localhost:3000/Images" ;

  GetAllTours(){
    return this.imagesClient.get(this.URL);
  }
  GetTourByID(id:any)
  {
    return this.imagesClient.get(this.URL+'/'+id);
  }

}
