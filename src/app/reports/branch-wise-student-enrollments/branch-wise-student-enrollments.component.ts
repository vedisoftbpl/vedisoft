import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from 'src/app/session/session.component';
import { Branch } from 'src/app/branches/branches.component';
import { BranchesService } from 'src/app/service/data/branches.service';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { BranchwiseStudentsService } from 'src/app/service/data/branchwise-students.service';
import { SessionDataService } from 'src/app/service/data/session-data.service';
import { BatchDataService } from 'src/app/service/data/batch-data.service';
import { Batch } from 'src/app/batch/batch.component';

@Component({
  selector: 'app-branch-wise-student-enrollments',
  templateUrl: './branch-wise-student-enrollments.component.html',
  styleUrls: ['./branch-wise-student-enrollments.component.css']
})
export class BranchWiseStudentEnrollmentsComponent implements OnInit {


  constructor(private routeGuardService: RouterGuardService, private branchService: BranchesService,
    private branchwiseStudentsService: BranchwiseStudentsService, private sessionService: SessionDataService,
    private batchService: BatchDataService) { }

  branchId
  branches: Branch[]
  batches: Batch[]
  sessions: Session[]
  session: Session
  from: Date
  to: Date
  dates : Date[]
  branchWiseStudents
  isEnabled: boolean


  ngOnInit() {
    this.from = new Date()
    this.to = new Date()
    this.getAllBranches()
    this.getAllBatches()
    this.getAllSessions()
  }

  getData() {
    this.dates = [this.session.startDate, this.session.endDate]
    console.log(this.dates)
    this.branchwiseStudentsService.getBranchWiseStudents(this.branchId, this.dates).subscribe(
      response => {
        this.branchWiseStudents = response
        console.log(response)
      }
    )
    this.isEnabled = true;
  }
  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      response => {
        this.branches = response
      }
    )
  }
  getAllBatches() {
    this.batchService.getAllBatches().subscribe(
      response => {
        this.batches = response
      }
    )
  }
  getAllSessions() {
    this.sessionService.getAllSessions().subscribe(
      response => {
        this.sessions = response
      }
    )
  }
  getBatchCode(batchId) {
    let code
    for(let i = 0; i < this.batches.length; i++) {
        if(batchId == this.batches[i].batchId)
          code = this.batches[i].code
    }
    return code;
  }
  getBatchDates(batchId) {
    let dates
    for(let i = 0; i < this.batches.length; i++) {
        if(batchId == this.batches[i].batchId)
          dates = "(" + this.batches[i].sdate.toString() + "-" + this.batches[i].enddate.toString() + ")" + "-" + this.batches[i].timings
    }
    return dates;
  }

}
