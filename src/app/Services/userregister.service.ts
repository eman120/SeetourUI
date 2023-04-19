import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private readonly client : HttpClient) { }
  private readonly URL = "http://localhost:3000/Register";


  AddNewRegister(UserRegister:any){
    return this.client.post(this.URL, UserRegister);
  }
  getRegisterById(id:any){
    return this.client.get(this.URL + '/' +id);
  }
  updateRegisterById(id:any , UserRegister:any){
    return this.client.put(this.URL + '/' +id ,UserRegister );
  }
}

