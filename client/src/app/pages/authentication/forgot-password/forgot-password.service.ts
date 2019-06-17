import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
          //Local api --> http://localhost:3000/api
          //Cloud API --> https://server-dot-my-project-1484493585394.appspot.com/api
private _resetAPI = 'hhttps://server-dot-my-project-1484493585394.appspot.com/api/reset';

constructor(private http: HttpClient) { }

reset(message){
  return this.http.post<any>(this._resetAPI, message);
}
}
