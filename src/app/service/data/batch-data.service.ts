import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Branch } from 'src/app/branches/branches.component';
import { HttpClient } from '@angular/common/http';
import { Batch } from 'src/app/batch/batch.component';


@Injectable({
  providedIn: 'root'
})
export class BatchDataService {

  constructor(private http : HttpClient) { }

  getAllBatches(){
    return this.http.get<Batch[]>(`${API_URL}/vedisoft/batches`)
  }

  getBatchById(id){
    return this.http.get<Batch>(`${API_URL}/vedisoft/batch/${id}`)
  }

  addBatch(batch){
    // console.log(batch)
    return this.http.post(`${API_URL}/vedisoft/batch/formSubmit`,batch)
  }

  updateBatch(batch,id){
    return this.http.put(`${API_URL}/vedisoft/batch/formEdit/${id}`, batch)
  }
}
