import { Injectable } from '@angular/core';
  import {  HttpClient } from "@angular/common/http";
import { Register } from './register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7291/api/controller'
  list!: Register[];

  RegisterUser(register: Register): Observable<any> {
    return this.http.post(this.baseURL, register);
  }


}
