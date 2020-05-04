import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Batch } from '../batch/batch.component';
import { Branch } from '../branches/branches.component';
import { FeeDataService } from '../service/data/fee-data.service';

export class Fees {
  constructor(
    public id:number,
    public createdBy:number,
    public creationDate:Date,
    public dueDate: Date,
    public extra1:string,
    public extra2:number,
    public famt: number,
    public lastCreationBy:number,
    public lastCreationDate:Date,
    public mode1: String,
    public branch:any,
    public batch:any
       ) {

  }
}

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit, OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static:false})
  dataTableElement:DataTableDirective;
  dtOptions:DataTables.Settings = {}

  feesList: Fees[]
  batch:Batch;
  constructor(private router: Router, private feeData:FeeDataService) { }

  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ 5, 10, 15, 20 ],
    };

    this.refreshColleges();
    this.dtTrigger.next()
  }

  refreshColleges(){
    this.feeData.getAllFees().subscribe(
      response =>{
        console.log(response)
        this.feesList = response
        console.log(this.feesList)
        this.batch = this.feesList[0].batch
      },
      error =>{
        console.log(error)
      }
    )

  }

  public editFeesDetails(batchId) {
    this.router.navigate(['feesform', batchId, 1])
  }

  public addFeesDetails() {
    console.log("called")
    this.router.navigate(['feesform', -1, 1])
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
