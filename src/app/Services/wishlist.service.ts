import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
baseurl:string =environment.baseUrl;


 constructor(private readonly client : HttpClient) {
    }
    GetCustomerWishlist(){
      return this.client.get(environment.baseUrl+ApiPaths.cuswishlist);
    }
}
