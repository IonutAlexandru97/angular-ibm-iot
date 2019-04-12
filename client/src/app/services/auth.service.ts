import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

private _registerURL = "http://localhost:3001/v1/auth/register"
private _loginURL = "http://localhost:3001/v1/auth/login"

constructor(private http: HttpClient) { }

register(user){
    return this.http.post<any>(this._registerURL, user)
}

login(user){
    return this.http.post<any>(this._loginURL, user);
}

}
