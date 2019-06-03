import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface MessagePayload {
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

constructor(private http: HttpClient) { }

private _askURL = 'http://localhost:3000/api/ask';

askMessage(message){
  return this.http.post<any>(this._askURL, message);
}

}
