import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BadDebtsService {

  constructor(private http: HttpClient) { }

  getBadDebts(branchId, dates) {
    return this.http.post(`${API_URL}/vedisoft/reports/badDebts/${branchId}`,dates);
  }
}
