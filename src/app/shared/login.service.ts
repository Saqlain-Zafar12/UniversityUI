import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Login } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any;
  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7291/api/Login'

  PostLoginUser(login: Login): Observable<any> {
    return this.http.post(this.baseURL, login);
  }
}
