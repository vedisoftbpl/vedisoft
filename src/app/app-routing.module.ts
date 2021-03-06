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
import { DaybookComponent } from './reports/daybook/daybook.component';
import { GstComponent } from './reports/gst/gst.component';
import { RouterGuardService } from './service/router-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './student/student.component';

import { CollegeWiseStudentsComponent } from './reports/college-wise-students/college-wise-students.component';
import { BranchwiseCollectionComponent } from './reports/branchwise-collection/branchwise-collection.component';
import { FacultywiseCollectionComponent } from './reports/facultywise-collection/facultywise-collection.component';
import { SessionwiseCollectionComponent } from './reports/sessionwise-collection/sessionwise-collection.component';
import { CoursewiseCollectionComponent } from './reports/coursewise-collection/coursewise-collection.component';
import { BadDebtsComponent } from './reports/bad-debts/bad-debts.component';
import { BranchWiseStudentEnrollmentsComponent } from './reports/branch-wise-student-enrollments/branch-wise-student-enrollments.component';
import { AllotComponent } from './allot/allot.component';
import { SessionWiseStudentComponent } from './reports/session-wise-student/session-wise-student.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { StudentReportComponent } from './queries/student-report/student-report.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { BatchwiseCollectionComponent } from './reports/batchwise-collection/batchwise-collection.component';
import { GstChartComponent } from './charts/gst-chart/gst-chart.component';




const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [RouterGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouterGuardService] },
  { path: 'signup', component: SigninComponent },
  { path: 'certi', component: CertiRequestComponent },
  { path: 'installments', component: InstallmentComponent },
  { path: 'personType', component: PersonTypeComponent },
  { path: 'person', component: PersonComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'addCollege', component: AddCollegeComponent },
  { path: 'branches', component: BranchesComponent, canActivate: [RouterGuardService] },
  { path: 'branchForm/:id', component: BranchFormComponent },
  { path: 'session', component: SessionComponent },
  { path: 'sessionform/:id/:isEnabled', component: SessionFormComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courseform/:id/:isEnabled', component: CourseFormComponent },
  { path: 'batch', component: BatchComponent },
  { path: 'batchform/:id/:isEnabled', component: BatchFormComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'feesform/:id', component: FeesFormComponent },

  


  { path: 'certi', component: CertiRequestComponent, canActivate: [RouterGuardService] },
  { path: 'installment/:id', component: InstallmentComponent, canActivate: [RouterGuardService] },
  { path: 'allot/:id', component: AllotComponent, canActivate: [RouterGuardService] },
  
  { path: 'queries/student-report', component: StudentReportComponent, canActivate: [RouterGuardService] },
  { path: 'queries/printreceipt', component: PrintReceiptComponent },


  { path: 'certi', component: CertiRequestComponent, canActivate: [RouterGuardService] },
  { path: 'personType', component: PersonTypeComponent, canActivate: [RouterGuardService] },
  { path: 'person', component: PersonComponent, canActivate: [RouterGuardService] },
  { path: 'college', component: CollegeComponent, canActivate: [RouterGuardService] },
  { path: 'addCollege', component: AddCollegeComponent, canActivate: [RouterGuardService] },
  { path: 'branches', component: BranchesComponent, canActivate: [RouterGuardService] },
  { path: 'branchform/:id/:isEnabled', component: BranchFormComponent, canActivate: [RouterGuardService] },
  { path: 'session', component: SessionComponent, canActivate: [RouterGuardService] },
  { path: 'sessionform/:id/:isEnabled', component: SessionFormComponent, canActivate: [RouterGuardService] },
  { path: 'course', component: CourseComponent, canActivate: [RouterGuardService] },
  { path: 'courseform/:id/:isEnabled', component: CourseFormComponent, canActivate: [RouterGuardService] },
  { path: 'batch', component: BatchComponent, canActivate: [RouterGuardService] },
  { path: 'batchform/:id/:isEnabled', component: BatchFormComponent, canActivate: [RouterGuardService] },
  { path: 'fees', component: FeesComponent, canActivate: [RouterGuardService] },
  { path: 'feesform/:id', component: FeesFormComponent, canActivate: [RouterGuardService] },
  { path: 'student', component: StudentComponent, canActivate: [RouterGuardService] },
  { path: 'studentform/:id/:isEnabled', component: StudentFormComponent, canActivate: [RouterGuardService] },


  { path: 'queries/printreceipt', component: PrintReceiptComponent, canActivate: [RouterGuardService] },
  { path: 'queries/student-report', component: StudentComponent, canActivate: [RouterGuardService] },


  { path: 'reports/daybook', component: DaybookComponent },
  { path: 'reports/gst', component: GstComponent, canActivate: [RouterGuardService] },
  { path: 'reports/branchwiseCollection', component: BranchwiseCollectionComponent, canActivate: [RouterGuardService] },
  { path: 'reports/facultywiseCollection', component: FacultywiseCollectionComponent, canActivate: [RouterGuardService] },
  { path: 'reports/sessionwiseCollection', component: SessionwiseCollectionComponent, canActivate: [RouterGuardService] },
  { path: 'reports/coursewiseCollection', component: CoursewiseCollectionComponent, canActivate: [RouterGuardService] },
  { path: 'reports/branchwisestudent', component: BranchWiseStudentEnrollmentsComponent, canActivate: [RouterGuardService] },
  { path: 'reports/sessionwisestudent', component: SessionWiseStudentComponent, canActivate: [RouterGuardService] },
  { path: 'reports/badDebts', component: BadDebtsComponent, canActivate: [RouterGuardService] },
  { path: 'reports/collegewisestudents', component: CollegeWiseStudentsComponent, canActivate: [RouterGuardService] },
  { path: 'reports/collegewisestudents', component: CollegeWiseStudentsComponent},
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouterGuardService]},
  { path: 'personForm/:id', component: PersonFormComponent, canActivate: [RouterGuardService]},
  { path: 'reports/batchWiseCollection', component: BatchwiseCollectionComponent, canActivate: [RouterGuardService]},
  { path: 'charts/gst', component: GstChartComponent, canActivate: [RouterGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
