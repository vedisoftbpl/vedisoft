import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session, SessionList } from '../../app/session/session.component';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  session= new Session(-1," ",new Date(),new Date())
  sessionL = new SessionList()
  sessions: Session[]
  id:number
  isEnabled:number
  x:Boolean = true

  disable:boolean = true
  constructor(private router:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.isEnabled = this.router.snapshot.params['isEnabled']
    if(this.isEnabled==0){
      console.log('if working')
      this.disable = true
    }
    console.log(this.disable)
    if(this.id===-1){
      
      console.log('if working')
      this.session = new Session(-1," ",new Date(),new Date())
    }
    else{
      console.log('else working')
      this.sessions = this.sessionL.sessions
      for(var s of this.sessions){
        // console.log(b)
        if(s.id==this.id){
          console.log(s)
          this.session = s
          break
        }
      }
      
    }
  }

}

