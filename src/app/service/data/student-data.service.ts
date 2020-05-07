import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Student } from 'src/app/student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http : HttpClient) { }

  getAllStudents(){
    return this.http.get<Student[]>(`${API_URL}/vedisoft/students`)
  }

  getStudentById(id){
    return this.http.get<Student>(`${API_URL}/vedisoft/student/${id}`)
  }

  addNewStudent(uploadData){
    return this.http.post(`${API_URL}/vedisoft/student/formSubmit`,uploadData)
  }

  updateStudent(student,id){
    return this.http.put(`${API_URL}/vedisoft/student/formEdit/${id}`,student)
  }
}
