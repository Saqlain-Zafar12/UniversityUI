import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MainComponent } from './components/main/main.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { SuccessComponent } from './components/success/success.component';
import { TransferComponent } from './components/transfer/transfer.component';
const routes: Routes = [
  {
    path: "login",
    component: LoginpageComponent 
  },
  {
    path: "transfermoney",
    component: MainComponent 
  },
  {
    path: "",
    redirectTo: "transfermoney" ,
    pathMatch:"full"
  },
  {
    path: "signup",
    component: SignupComponent 
  },
  {
    path: "myaccount",
    component: MyaccountComponent 
  },
  {
    path: "transfer",
    component: TransferComponent 
  },
  {
    path: "success",
    component: SuccessComponent 
  },
  {
    path: "**",
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
