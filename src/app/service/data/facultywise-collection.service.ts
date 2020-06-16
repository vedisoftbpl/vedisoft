import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultywiseCollectionService {

  

  constructor(private http: HttpClient) { }

  getFacultyWiseCollection(dates) {
    return this.http.post(`${API_URL}/vedisoft/reports/facultyWiseCollection/`, dates);
  }
}
