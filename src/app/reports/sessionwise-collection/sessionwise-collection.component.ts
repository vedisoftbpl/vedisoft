import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Branch } from 'src/app/branches/branches.component';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { SessionDataService } from 'src/app/service/data/session-data.service';
import { SessionwiseCollectionService } from 'src/app/service/data/sessionwise-collection.service';
import { Session } from 'src/app/session/session.component';


@Component({
  selector: 'app-sessionwise-collection',
  templateUrl: './sessionwise-collection.component.html',
  styleUrls: ['./sessionwise-collection.component.css']
})
export class SessionwiseCollectionComponent implements OnInit {

  constructor(private routeGuardService: RouterGuardService, private branchService: BranchesService, private sessionService: SessionDataService,
    private sessionWiseCollectionService: SessionwiseCollectionService) { }

  
  isEnabled: boolean = false;
  allEnabled: boolean = false;
  sessions: Session[]
  session : Session
  branches: Branch[]
  
  branchId = 0
  sessionWiseCollection
  todaysDate = new Date()
  

  ngOnInit() {
    this.getAllSessions()
    this.getAllBranches()
   
     
  }

  getData() {
    this.sessionWiseCollectionService.getBatchWiseCollection(this.session.sessionId).subscribe(
      response => {
        this.sessionWiseCollection = response
      }
    )
    if(this.branchId == 0) {
      this.allEnabled = true
    }
    else{
      this.allEnabled = false
    }
    this.isEnabled = true;
  }
  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      response => {
        this.branches = response
      }
    )
  }
  getAllSessions() {
    this.sessionService.getAllSessions().subscribe(
      response => {
        this.sessions = response
        this.session = response[response.length - 1]
      }
    )

  }
  getTotal() {
    let sum = 0
    for(let i = 0; i < this.sessionWiseCollection.length; i++) {
      if(this.branchId == this.sessionWiseCollection[i][0] || this.allEnabled)
      sum += this.sessionWiseCollection[i][2]
    }
    return sum;
  }
  

}
