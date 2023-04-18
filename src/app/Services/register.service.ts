import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private readonly client : HttpClient) { }
  private readonly URL = "http://localhost:3000/Register";


  AddNewRegister(Register:any){
    return this.client.post(this.URL, Register);
  }
  getRegisterById(id:any){
    return this.client.get(this.URL + '/' +id);
  }
  updateRegisterById(id:any , Register:any){
    return this.client.put(this.URL + '/' +id ,Register );
  }
}
