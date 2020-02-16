import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

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
import { StudentComponent } from './queries/student/student.component';
import { DaybookComponent } from './reports/daybook/daybook.component';
import { GstComponent } from './reports/gst/gst.component';
import { BranchwiseCollectionComponent } from './reports/branchwise-collection/branchwise-collection.component';
import { FacultywiseCollectionComponent } from './reports/facultywise-collection/facultywise-collection.component';
import { SessionwiseCollectionComponent } from './reports/sessionwise-collection/sessionwise-collection.component';
import { CoursewiseCollectionComponent } from './reports/coursewise-collection/coursewise-collection.component';



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
    BranchwiseCollectionComponent,
    FacultywiseCollectionComponent,
    SessionwiseCollectionComponent,
    CoursewiseCollectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: HttpIntercepterBasicAuthService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
