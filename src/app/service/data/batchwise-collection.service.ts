import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BatchwiseCollectionService {

  constructor(private http: HttpClient) { }

  getBatchWiseCollection(batchId) {
    return this.http.get(`${API_URL}/vedisoft/reports/batchWiseCollection/${batchId}`);
  }
}
