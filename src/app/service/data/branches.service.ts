import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Branch } from 'src/app/branches/branches.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }

  getAllBranches(){
    return this.http.get<Branch[]>(`${API_URL}/vedisoft/branches`)
  }

  getBranchById(id){
    return this.http.get<Branch>(`${API_URL}/vedisoft/branch/${id}`)
  }

  addBranch(branch){
    return this.http.post(`${API_URL}/vedisoft/branch/formSubmit`, branch)
  }

  updateBranch(branch,id){
    return this.http.put(`${API_URL}/vedisoft/branch/formEdit/${id}`, branch)
  }
}
