import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/course/course.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http : HttpClient) { }

  getAllCourses() {
    return this.http.get<Course[]>(`${API_URL}/vedisoft/courses`)
   //console.log("get Welcome message!!") 

  }

  getCourseById(id){
    return this.http.get<Course>(`${API_URL}/vedisoft/course/${id}`)
  }

  saveCourse(course,id){
    return this.http.put(`${API_URL}/vedisoft/course/formEdit/${id}`,course)
  }

  addCourse(course){
    return this.http.post(`${API_URL}/vedisoft/course/formSubmit`,course)
  }

  deleteCourse(id){
    return this.http.delete(`${API_URL}/vedisoft/course/formDelete/${id}`)
  }
}
