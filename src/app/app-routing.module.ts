import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CertiRequestComponent } from './certi-request/certi-request.component';
import { InstallmentComponent } from './installment/installment.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'certi', component: CertiRequestComponent},
  {path: 'installments', component: InstallmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
