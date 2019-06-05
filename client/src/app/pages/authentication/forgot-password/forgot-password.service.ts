import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

private _emailAPI = 'http://localhost:3000/api/send-email';

constructor(private http: HttpClient) { }

send(message){
  return this.http.post<any>(this._emailAPI, message);
}
}
