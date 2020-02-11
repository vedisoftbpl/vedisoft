import { Component } from '@angular/core';
import { BasicAuthenticationService } from './service/basic-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  constructor(private basicAuth:BasicAuthenticationService) { }
}
