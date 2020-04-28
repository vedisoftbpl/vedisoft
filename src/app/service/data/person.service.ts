import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Person } from 'src/app/person/person.component';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }
  getAllPersons(){
    return this.http.get<Person[]>(`${API_URL}/vedisoft/persons`)
  }

  getPersonById(id){
    return this.http.get<Person>(`${API_URL}/vedisoft/person/${id}`)
  }

  addPerson(person){
    return this.http.post(`${API_URL}/vedisoft/person/formSubmit`, person)
  }

  updatePerson(person,id){
    return this.http.put(`${API_URL}/vedisoft/person/formEdit/${id}`, person)
  }
}
