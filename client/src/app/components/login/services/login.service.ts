import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private _loginUrl = "http://localhost:3001/v1/users/login"
constructor(private http: HttpClient) { }

login(user){
  return this.http.post<any>(this._loginUrl, user);
}

}
