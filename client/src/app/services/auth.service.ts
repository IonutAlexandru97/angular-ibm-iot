import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface UserDetails {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    username?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthService {
    private token: string;
    private _registerURL = " http://localhost:3000/api/users/register"
    private _loginURL = " http://localhost:3000/api/users/login"

    constructor(private http: HttpClient,
                private router: Router) { }

    private saveToken(token: string): void {
        localStorage.setItem('token', token);
        this.token = token;
    } 

    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if(token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            console.log(payload);
            return JSON.parse(payload);
        }else{
            return null;
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if(user){
            return true;
        }else {
            return false;
        }
    }
    
    private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
        let base;
    
        if (method === 'post') {
          base = this.http.post(`http://localhost:3000/api/users/${type}`, user);
        } else {
          base = this.http.get(`http://localhost:3000/api/users/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        }
    
        const request = base.pipe(
          map((data: TokenResponse) => {
            if (data.token) {
              this.saveToken(data.token);
            }
            return data;
          })
        );
    
        return request;
      }
    
      public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
      }
    
      public login(user: TokenPayload): Observable<any> {
        return this.request('post', 'login', user);
      }
    
      public profile(): Observable<any> {
        return this.request('get', 'profile');
      }

}

