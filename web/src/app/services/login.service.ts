import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {environment} from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }

  login(username, password) {
    return this.http.post<any>(environment.API_URL + "users/login", {
      username: username,
      password: password,
    });
  }
}
