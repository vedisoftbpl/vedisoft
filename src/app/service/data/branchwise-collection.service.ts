import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BranchwiseCollectionService {

  constructor(private http: HttpClient) { }

  getBranchWiseCollection(dates) {
    return this.http.post(`${API_URL}/vedisoft/reports/branchWiseCollection/`, dates);
  }
}
