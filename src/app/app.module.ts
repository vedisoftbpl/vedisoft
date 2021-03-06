import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CertiRequestComponent } from './certi-request/certi-request.component';
import { InstallmentComponent } from './installment/installment.component';
import { PersonTypeComponent } from './person-type/person-type.component';
import { PersonComponent } from './person/person.component';
import { CollegeComponent } from './college/college.component';
import { AddCollegeComponent } from './add/add-college/add-college.component';
import { AddPersonComponent } from './add/add-person/add-person.component';
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
import { WelcomeComponent } from './welcome/welcome.component'
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { StudentComponent } from './student/student.component';
import { DaybookComponent } from './reports/daybook/daybook.component';
import { GstComponent } from './reports/gst/gst.component';

import { CollegeWiseStudentsComponent } from './reports/college-wise-students/college-wise-students.component';
import { BranchWiseStudentEnrollmentsComponent } from './reports/branch-wise-student-enrollments/branch-wise-student-enrollments.component';

import { BranchwiseCollectionComponent } from './reports/branchwise-collection/branchwise-collection.component';
import { FacultywiseCollectionComponent } from './reports/facultywise-collection/facultywise-collection.component';
import { SessionwiseCollectionComponent } from './reports/sessionwise-collection/sessionwise-collection.component';
import { CoursewiseCollectionComponent } from './reports/coursewise-collection/coursewise-collection.component';
import { BadDebtsComponent } from './reports/bad-debts/bad-debts.component';
import { AllotComponent } from './allot/allot.component';
import { SessionWiseStudentComponent } from './reports/session-wise-student/session-wise-student.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { StudentReportComponent } from './queries/student-report/student-report.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { BatchwiseCollectionComponent } from './reports/batchwise-collection/batchwise-collection.component';
import { GstChartComponent } from './charts/gst-chart/gst-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SigninComponent,
    CertiRequestComponent,
    InstallmentComponent,
    PersonTypeComponent,
    PersonComponent,
    CollegeComponent,
    AddCollegeComponent,
    AddPersonComponent,
    BranchesComponent,
    BranchFormComponent,
    SessionComponent,
    SessionFormComponent,
    CourseComponent,
    CourseFormComponent,
    BatchComponent,
    BatchFormComponent,
    FeesComponent,
    FeesFormComponent,
    PrintReceiptComponent,
    StudentComponent,
    DaybookComponent,
    GstComponent,
    WelcomeComponent,
    CollegeWiseStudentsComponent,
    BranchWiseStudentEnrollmentsComponent,
    BranchwiseCollectionComponent,
    FacultywiseCollectionComponent,
    SessionwiseCollectionComponent,
    CoursewiseCollectionComponent,
    BadDebtsComponent,
    AllotComponent,
    SessionWiseStudentComponent,
    PersonFormComponent,
    StudentReportComponent,
    StudentFormComponent,
    BatchwiseCollectionComponent,
    GstChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: HttpIntercepterBasicAuthService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
