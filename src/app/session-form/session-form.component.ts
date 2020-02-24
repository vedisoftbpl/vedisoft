import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session} from '../../app/session/session.component';
import { SessionDataService } from '../service/data/session-data.service';
import {AUTHENTICATED_USER} from 'src/app/service/basic-authentication.service'
import { UserDataService } from '../service/data/user-data.service';
import { Person } from '../person/person.component';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit{ 
  session: Session
  person:Person
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router, public sessionData : SessionDataService,public userData:UserDataService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    this.session = new Session(-1,"",new Date(),new Date(),1,new Date(),1,new Date())

    
    if(this.id!=-1){
      this.sessionData.getSessionById(this.id).subscribe(
        response => {
          this.session = response
        },
        error=>{
          console.log(error)
        }
      )
      
    }
  }

  submitForm(){
    
    
    var username = sessionStorage.getItem(AUTHENTICATED_USER)
    this.userData.getUserDetails(username).subscribe(
      data=>{
        this.session.lastUpdatedBy = data.personId
        this.session.lastUpdationDate = new Date()
        if(this.id==-1){
          this.session.createdBy = data.personId
          this.session.creationDate = new Date()
        }

      },
      error=>{
        console.log(error)
      }
    )
    if(this.id!=-1){
      
      this.sessionData.updateSession(this.session,this.id).subscribe(
        response=>{
          this.route.navigate(['session'])
        },
        error=>{
          console.log(error)
        }
      )
      
    }
    else{
      this.sessionData.addNewSession(this.session).subscribe(
        response=>{
          this.route.navigate(['session'])
        },
        error=>{
          console.log(error)
        }
      )
    }
  }

}

