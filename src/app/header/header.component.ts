import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showModalBox:boolean = false;

  constructor(private basicAuth:BasicAuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.basicAuth.logout()
  }

  public open() {
    if(0){
      // Dont open the modal
      this.showModalBox = false;
    } else {
       // Open the modal
       this.showModalBox = true;
    }

  }
  

}
