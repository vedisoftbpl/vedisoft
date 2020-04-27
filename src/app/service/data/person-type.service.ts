import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonType } from 'src/app/person-type/person-type.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonTypeService {

  constructor(private http : HttpClient) { }

  getAllPersonTypes(){
    return this.http.get<PersonType[]>(`${API_URL}/vedisoft/personTypes`)
  }

  getPersonTypeById(id){
    return this.http.get<PersonType>(`${API_URL}/vedisoft/personType/${id}`)
  }

  // addPersonType(personType){
  //   return this.http.post(`${API_URL}/vedisoft/personType/formSubmit`, personType)
  // }

  // updateBranch(personType,id){
  //   return this.http.put(`${API_URL}/vedisoft/personType/formEdit/${id}`, personType)
  // }
}
