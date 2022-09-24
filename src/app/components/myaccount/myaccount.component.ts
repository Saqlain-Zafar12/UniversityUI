import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, public login: LoginService) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(x=> {
      this.user = x;
      console.log(this.user);
    });
  }
}
