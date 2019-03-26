import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http://localhost:3001/v1/users/login"
  private _registerUrl = "http://localhost:3001/v1/users/register"
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  register(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
