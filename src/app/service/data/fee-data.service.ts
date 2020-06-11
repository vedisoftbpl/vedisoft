import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fees } from 'src/app/fees/fees.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class FeeDataService {

  constructor(private http : HttpClient) { }

  getAllFees() {
    return this.http.get<Fees[]>(`${API_URL}/vedisoft/fees`)
   //console.log("get Welcome message!!") 

  }

  getFeeById(id){
    return this.http.get<Fees>(`${API_URL}/vedisoft/fee/${id}`)
  }

  saveFee(fee,id){
    return this.http.put(`${API_URL}/vedisoft/fee/formEdit/${id}`,fee)
  }

  addFee(fee){
    return this.http.post(`${API_URL}/vedisoft/fee/formSubmit`,fee)
  }

  deleteFee(id){
    return this.http.delete(`${API_URL}/vedisoft/fee/formDelete/${id}`)
  }
  getFeeByBatchId(batchId) {
    return this.http.get<Fees[]>(`${API_URL}/vedisoft/fee/batch/${batchId}`)
  }
}
