import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'abc@email.com'
  password = 'abc123'
  invalidLogin = false;
  errorMessage = "Invalid Credentials";
  constructor(private router: Router , private basicAuth:BasicAuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.basicAuth.authentication(this.email,this.password).subscribe(
      data =>{
        console.log(data)
        this.invalidLogin = false;
        this.router.navigate(['welcome'])

      },
      error =>{
        console.log(error)
        this.invalidLogin = true;
      }
    )

  }

  signup() {
    this.router.navigate(['signup']);
  }
}
