import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
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

    localStorage.setItem('id_token', authResult.tokenString);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
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
