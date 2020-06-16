import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursewiseCollectionService {

  
  
  constructor(private http: HttpClient) { }

  getCourseWiseCollection(branchId, dates) {
    return this.http.post(`${API_URL}/vedisoft/reports/courseWiseCollection/${branchId}`,dates);
  }
}
