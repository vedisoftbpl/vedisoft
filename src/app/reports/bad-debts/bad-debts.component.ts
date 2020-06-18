import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { RouterGuardService } from 'src/app/service/router-guard.service';
import { BranchesService } from 'src/app/service/data/branches.service';
import { SessionDataService } from 'src/app/service/data/session-data.service';
import { BadDebtsService } from 'src/app/service/data/bad-debts.service';
import { BatchDataService } from 'src/app/service/data/batch-data.service';
import { Branch } from 'src/app/branches/branches.component';
import { Batch } from 'src/app/batch/batch.component';
import { Session } from 'src/app/session/session.component';

export class BadDebt {
  constructor(public id: number, public student: String, public session: String, public registrationNumber: String, public course: String,
    public batch: String, public totalFee: number, public paidFee: number) { }
  badDebt: number = this.totalFee - this.paidFee;
  

}

@Component({
  selector: 'app-bad-debts',
  templateUrl: './bad-debts.component.html',
  styleUrls: ['./bad-debts.component.css']
})
export class BadDebtsComponent implements OnInit{

  constructor(private routeGuardService: RouterGuardService, private branchService: BranchesService,
    private badDebtsService: BadDebtsService, private sessionService: SessionDataService,
    private batchService: BatchDataService) { }

  branchId
  branches: Branch[]
  batches: Batch[]
  sessions: Session[]
  session: Session
  from: Date
  to: Date
  dates : Date[]
  badDebts
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
    this.badDebtsService.getBadDebts(this.branchId, this.dates).subscribe(
      response => {
        this.badDebts = response
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
  getTotal(){
      let sum = 0
      for(let i = 0; i < this.badDebts.length; i++) {
        if(this.branchId == this.badDebts[i][2])
          sum += this.badDebts[i][1]
        if(this.branchId == 0)
          sum += this.badDebts[i][1]
      }
      return sum;
  }
  

}
