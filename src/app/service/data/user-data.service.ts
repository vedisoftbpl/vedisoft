import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Person } from 'src/app/person/person.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }

  getUserDetails(username){
    // console.log(this.http.get(`${API_URL}/vedisoft/user/${username}`))
    // var x = this.http.get(`${API_URL}/vedisoft/user/${username}`)
    // console.log(x)
    return this.http.get<Person>(`${API_URL}/vedisoft/user/${username}`)
  }
}
