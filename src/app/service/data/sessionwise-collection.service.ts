import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SessionwiseCollectionService {

  constructor(private http: HttpClient) { }

  getBatchWiseCollection(sessionId) {
    return this.http.get(`${API_URL}/vedisoft/reports/sessionWiseCollection/${sessionId}`);
  }
}
