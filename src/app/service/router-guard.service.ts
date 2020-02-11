import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService {

  constructor(private basicAuth:BasicAuthenticationService,
    private router : Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuth.isUserLoggedIn())
      return true

    this.router.navigate(['login']);
    return false
  }
}
