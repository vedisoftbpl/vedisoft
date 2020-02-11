import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService {

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthenticationString = this.basicAuth.getAuthenticatedToken()
    let username = this.basicAuth.getAuthenticatedUser()

    if (basicAuthenticationString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationString
        }
      })
    }
    return next.handle(request)
  }
}
