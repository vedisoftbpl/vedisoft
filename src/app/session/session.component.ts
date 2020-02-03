import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

export class Session {
  constructor
    (public id: number,
      public sessionName: string,
      public startDate:Date,
      public endDate: Date
      ) { }
}
export class SessionList{
  sessions: Session[] 
  constructor(){
    this.sessions = [
      new Session(1, "ABC",new Date(),new Date()),
      new Session(2, "XYZ",new Date(),new Date())
    ]
  }
}
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit ,OnDestroy {
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor( public router:Router) { }

    sessionL = new SessionList()
    sessions:Session[] = this.sessionL.sessions

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [1,5, 10, 15, 20],
    };
  }

  addSession(){
    this.router.navigate(['sessionform',-1,1])
    // alert('add clicked')

  }

  editSessionDetails(id){
    this.router.navigate(['sessionform',id,1])


  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}

