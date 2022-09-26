import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';
import { MyaccountComponent } from '../myaccount/myaccount.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  form!: FormGroup;
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  login() {
    console.log(this.form)
    let {email, password} = this.form.value;
    let login = new Login();
    login.Email = email;
    login.Password = password;

    this.loginservice.PostLoginUser(login).subscribe(x =>{
      // console.log(x);
      if(x){
        this.loginservice.user = x.registration;
        this.loginservice.transaction = x.transaction;
        this.form.reset();
        this.router.navigate(['/myaccount', x]);
      }
      else{
        alert('please enter valid email and password')
      }
    })



  }

}
