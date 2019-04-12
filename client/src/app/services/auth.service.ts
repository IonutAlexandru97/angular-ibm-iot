import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

private _registerURL = "http://localhost:3001/v1/auth/register"

constructor(private http: HttpClient) { }

register(user){
    return this.http.post<any>(this._registerURL, user)
}

}
