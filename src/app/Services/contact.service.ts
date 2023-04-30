import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private readonly client : HttpClient) { }
  private readonly URL = ""


  AddNewMessage(contactMsg:any){
    return this.client.post(this.URL, contactMsg);
  }

}


