import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CertiRequestComponent } from './certi-request/certi-request.component';
import { DataTablesModule } from 'angular-datatables';
import { InstallmentComponent } from './installment/installment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SigninComponent,
    CertiRequestComponent,
    InstallmentComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    DataTablesModule
=======
    AppRoutingModule
>>>>>>> 8734f84b43c61c5fc71aa99bd77748cf1f3a9a79
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
