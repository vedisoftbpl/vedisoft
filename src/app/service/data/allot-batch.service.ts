import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllotBatchService {

  constructor(private http : HttpClient) { }

  addAllocation(studentBatch){
    // console.log(batch)
    return this.http.post(`${API_URL}/vedisoft/studentBatch/formSubmit`,studentBatch)
  }

}
