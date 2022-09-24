import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(x=> {
      this.user = x;
      console.log(this.user);
    });
  }
}
