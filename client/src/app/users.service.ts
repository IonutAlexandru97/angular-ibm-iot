import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Users {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(' http://localhost:3000/v1/users/users');
    }
}