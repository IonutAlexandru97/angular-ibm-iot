import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../../../../server/api/model/userDetails';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    public currentUser: Observable<UserDetails>
    private _registerURL = "http://localhost:3001/v1/auth/register"
    private _loginURL = "http://localhost:3001/v1/auth/login"

    constructor(private http: HttpClient) { }

    register(user) {
        return this.http.post<any>(this._registerURL, user)
    }

    login(user) {
        return this.http.post<any>(this._loginURL, user)
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }

    getToken(){
        return localStorage.getItem('token')
    }
}

