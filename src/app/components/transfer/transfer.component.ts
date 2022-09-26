import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';
import { transaction } from 'src/app/shared/transaction.model';
import { transactionService } from 'src/app/shared/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  form!: FormGroup;
  data: any;

  constructor(
    public service: transactionService,
    private router: Router,
    public login: LoginService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      AccountNumber: new FormControl('', Validators.required),
      Amount: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    });
  }

  transferAmount() {
    console.log('Test Prin6t');
    let { AccountNumber, Amount, Email, Password } = this.form.value;

    let data = new transaction(0, AccountNumber, Amount, Email, Password);

    this.service.transactionApi(data).subscribe((x) => {
      // console.log(x);
      let login = new Login();
      login.Email = this.login.user.email;
      login.Password = this.login.user.password;
      this.login.PostLoginUser(login).subscribe((x) => {
        // console.log(x);
        if (x) {
          this.login.user = x.registration;
          this.login.transaction = x.transaction;
         
          this.router.navigate(['/myaccount', x]);
        } else {
          alert('please enter valid email and password');
        }
      });
      this.router.navigateByUrl('/success');
    });
  }
}
