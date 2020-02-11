import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {API_URL} from 'src/app/app.constants'
import { HttpClient } from '@angular/common/http';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'autenticatedUser'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  authentication(username,password){
    console.log(username + ' '+ password)
    return this.http.post<any>(`http://localhost:8081/authenticate`,{username,password})
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username)
          // console.log(sessionStorage.getItem(AUTHENTICATED_USER)+' ASDFGHJKL')
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`)
          return data
        }
      )
    )
    console.log('Authenticated')
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
 
  }
  getAuthenticatedToken(){
     if(this.getAuthenticatedUser())
     return sessionStorage.getItem(TOKEN)
   }
 
   isUserLoggedIn(){
     let user = sessionStorage.getItem(AUTHENTICATED_USER)
     return !(user===null)
   }
   logout(){
     sessionStorage.clear()
   }



}
