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
import { BranchesComponent } from './branches/branches.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { SessionComponent } from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { BatchComponent } from './batch/batch.component';
import { BatchFormComponent } from './batch-form/batch-form.component';
import { FeesComponent } from './fees/fees.component';
import { FeesFormComponent } from './fees-form/fees-form.component';
import { PrintReceiptComponent } from './queries/print-receipt/print-receipt.component';
import { RouterGuardService } from './service/router-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './queries/student/student.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent , canActivate: [RouterGuardService]},
  { path: 'signup', component: SigninComponent  },
  { path: 'certi', component: CertiRequestComponent, canActivate: [RouterGuardService]},
  { path: 'installments', component: InstallmentComponent, canActivate: [RouterGuardService]},
  { path: 'personType', component: PersonTypeComponent, canActivate: [RouterGuardService]},
  { path: 'person', component: PersonComponent, canActivate: [RouterGuardService]},
  { path: 'college', component: CollegeComponent, canActivate: [RouterGuardService]},
  { path: 'addCollege', component: AddCollegeComponent, canActivate: [RouterGuardService]},
  { path: 'branches', component: BranchesComponent, canActivate: [RouterGuardService]},
  { path: 'branchform/:id/:isEnabled', component: BranchFormComponent, canActivate: [RouterGuardService]},
  { path: 'session', component: SessionComponent, canActivate: [RouterGuardService]},
  { path: 'sessionform/:id/:isEnabled', component: SessionFormComponent, canActivate: [RouterGuardService]},
  { path: 'course', component: CourseComponent ,canActivate: [RouterGuardService]},
  { path: 'courseform/:id/:isEnabled', component: CourseFormComponent, canActivate: [RouterGuardService]},
  { path: 'batch', component: BatchComponent ,canActivate: [RouterGuardService]},
  { path: 'batchform/:id/:isEnabled', component: BatchFormComponent, canActivate: [RouterGuardService]},
  { path: 'fees', component: FeesComponent, canActivate: [RouterGuardService]},
  { path: 'feesform/:id/:isEnabled', component: FeesFormComponent, canActivate: [RouterGuardService]},
  { path: 'queries/printreceipt', component: PrintReceiptComponent, canActivate: [RouterGuardService]},
  { path: 'queries/student', component: StudentComponent, canActivate: [RouterGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
