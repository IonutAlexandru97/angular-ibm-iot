import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _registerUrl = "http://localhost:3001/v1/users/register"
  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
}
