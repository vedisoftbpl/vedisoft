import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Session } from 'src/app/session/session.component';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor(private http : HttpClient) { }

  getAllSessions(){
    return this.http.get<Session[]>(`${API_URL}/vedisoft/sessions`)
  }

  getSessionById(id){
    return this.http.get<Session>(`${API_URL}/vedisoft/session/${id}`)
  }

  addNewSession(session){
    return this.http.post(`${API_URL}/vedisoft/session/formSubmit`,session)
  }

  updateSession(session,id){
    return this.http.put(`${API_URL}/vedisoft/session/formEdit/${id}`,session)
  }
}
