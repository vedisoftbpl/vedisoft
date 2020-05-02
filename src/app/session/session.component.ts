import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { SessionDataService } from '../service/data/session-data.service';

export class Session {
  constructor
    (public sessionId: number,
      public sessionName: string,
      public startDate:Date,
      public endDate: Date,
      public createdBy:number,
      public creationDate:Date,
      public lastUpdatedBy:number,
      public lastUpdationDate:Date

      ) { }
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

  constructor( public router:Router , public sessionData:SessionDataService) { }
    sessions:Session[]

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [1,5, 10, 15, 20],
    };

    this.refreshSessions();
    this.dtTrigger.next()
  }

  refreshSessions(){
    this.sessionData.getAllSessions().subscribe(
      response =>{
        this.sessions = response
        this.dtTrigger.next()
      },
      error =>{
        console.log(error)
      }
    )

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

