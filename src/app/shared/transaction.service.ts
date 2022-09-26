import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class transactionService {
  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:7291/api/transaction'
  // list!: transaction[];

  transactionApi(transactionData: transaction): Observable<any> {

    console.log("Service Print");

    return this.http.put(this.baseURL, transactionData);
  }

  getbyEmail(){

    //return this.http.get(this.baseURL, email);
  }


}