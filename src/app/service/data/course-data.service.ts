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
}
