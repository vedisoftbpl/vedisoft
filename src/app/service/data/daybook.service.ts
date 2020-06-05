import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class DaybookService {

  constructor(private http: HttpClient) { }
  getDayBook(date, branchId) {
   return this.http.post(`${API_URL}/vedisoft/reports/daybook/${branchId}`, date);
  }
}
