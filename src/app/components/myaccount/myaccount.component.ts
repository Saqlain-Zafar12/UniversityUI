import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { transaction } from 'src/app/shared/transaction.model';
import { transactionService } from 'src/app/shared/transaction.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, public login: LoginService, public userdata: transactionService) { }

  //AccountData!: transaction;

  ngOnInit(): void {
   
    this.route.params.subscribe(x=> {
      this.user = x;
      console.log(this.user);
     });
  }

  Detailes(){

    // this.loginservice.getByEmail().subscribe(y => {
    //   if(y.email==login.Email){
        
    //   }
    // })
    //this.userdata.

  }



}
