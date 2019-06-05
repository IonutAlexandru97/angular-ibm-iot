import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

private _resetAPI = 'http://localhost:3000/api/reset';

constructor(private http: HttpClient) { }

reset(message){
  return this.http.post<any>(this._resetAPI, message);
}
}
