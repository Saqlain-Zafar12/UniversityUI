import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/shared/register.model';
import { RegisterService } from 'src/app/shared/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  constructor(public service: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      cnic: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
    })
  }
 
  SubmitForm() {
    let { firstname, lastname, birthday, cnic, address, email, phone, password, confirmpassword }  = this.form.value;

    let register = new Register(0, firstname, lastname, birthday, cnic, address, email, phone, password, confirmpassword, '');
    this.service.RegisterUser(register).subscribe(x=> {

      if(x==null)
      {
        alert("Email Already Exist: Enter right Email-Id");
      }
      this.router.navigateByUrl('/login');


    });
  }

  UpdateCnicValue(event: any): void {
    var enteredcnic = event.target.value;

    if(enteredcnic.length === 5)
    {
      enteredcnic = enteredcnic.toString() + '-';
    }

    if(enteredcnic.length === 13){
      enteredcnic = enteredcnic.toString() + '-';
    }

    this.form.patchValue({
      cnic: enteredcnic
    })
  }
}
