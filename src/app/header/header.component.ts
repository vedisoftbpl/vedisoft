import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private basicAuth:BasicAuthenticationService) { }

  ngOnInit() {
  }
  logout(){
    this.basicAuth.logout()
  }

}
