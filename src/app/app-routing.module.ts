import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CertiRequestComponent } from './certi-request/certi-request.component';
import { InstallmentComponent } from './installment/installment.component';
import { PersonTypeComponent } from './person-type/person-type.component';
import { PersonComponent } from './person/person.component';
import { CollegeComponent } from './college/college.component';
import { AddCollegeComponent } from './add/add-college/add-college.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'certi', component: CertiRequestComponent},
  {path: 'installments', component: InstallmentComponent},
  {path: 'personType', component: PersonTypeComponent},
  {path: 'person', component: PersonComponent},
  {path: 'college', component: CollegeComponent},
  {path: 'addCollege', component: AddCollegeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
