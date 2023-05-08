import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';
import * as moment from "moment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) {
  }

  login(username:string, password:string ) {

    return this.http.post(environment.baseUrl+ApiPaths.user+ApiPaths.userLogin,
      {username, password})
      .pipe(
          shareReplay(),
          map(res => {
            this.setSession(res)
        })
      )
  }

  private setSession(authResult: any) {
    const expiresAt = moment(authResult.expiry);
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('interface', authResult.interface);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("interface");

    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public getInterface() {
    return localStorage.getItem('interface')?.toLocaleLowerCase() || '';
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || '-1';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
