import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { College } from 'src/app/college/college.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {

  constructor(private http : HttpClient) { }

  getAllColleges(){
    return this.http.get<College[]>(`${API_URL}/vedisoft/colleges`)
  }

  getCollegeById(id){
    return this.http.get<College>(`${API_URL}/vedisoft/college/${id}`)
  }

  addNewCollege(college){
    return this.http.post(`${API_URL}/vedisoft/college/formSubmit`,college)
  }

  updateCollege(college,id){
    return this.http.put(`${API_URL}/vedisoft/college/formEdit/${id}`,college)
  }
}
